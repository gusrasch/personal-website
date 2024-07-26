terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 4.0"
    }
  }
}

provider "google" {
  project = var.project_id
  region  = var.region
}

# Create a GCS bucket
resource "google_storage_bucket" "website" {
  name          = var.bucket_name
  location      = var.region
  force_destroy = true

  uniform_bucket_level_access = true

  website {
    main_page_suffix = "index.html"
    not_found_page   = "404.html"
  }

  cors {
    origin          = ["*"]
    method          = ["GET", "HEAD", "OPTIONS"]
    response_header = ["*"]
    max_age_seconds = 3600
  }
}

# Make the bucket publicly readable
resource "google_storage_bucket_iam_member" "public_read" {
  bucket = google_storage_bucket.website.name
  role   = "roles/storage.objectViewer"
  member = "allUsers"
}

# Create a Cloud CDN backend bucket
resource "google_compute_backend_bucket" "website" {
  name        = "${var.bucket_name}-backend"
  description = "Backend bucket for ${var.bucket_name}"
  bucket_name = google_storage_bucket.website.name
  enable_cdn  = true
}

# Reserve a static IP address
resource "google_compute_global_address" "website" {
  name = "${var.bucket_name}-ip"
}

# Create an HTTPS certificate
resource "google_compute_managed_ssl_certificate" "website" {
  name = "${var.bucket_name}-cert"

  managed {
    domains = var.domain_names
  }
}

# Create a URL map
resource "google_compute_url_map" "website" {
  name            = "${var.bucket_name}-url-map"
  default_service = google_compute_backend_bucket.website.self_link
}

# Create an HTTPS proxy
resource "google_compute_target_https_proxy" "website" {
  name             = "${var.bucket_name}-https-proxy"
  url_map          = google_compute_url_map.website.self_link
  ssl_certificates = [google_compute_managed_ssl_certificate.website.self_link]
}

# Create a global forwarding rule
resource "google_compute_global_forwarding_rule" "website" {
  name       = "${var.bucket_name}-forwarding-rule"
  target     = google_compute_target_https_proxy.website.self_link
  port_range = "443"
  ip_address = google_compute_global_address.website.address
}

# HTTP to HTTPS redirect
resource "google_compute_url_map" "https_redirect" {
  name = "${var.bucket_name}-https-redirect"

  default_url_redirect {
    https_redirect = true
    strip_query    = false
  }
}

resource "google_compute_target_http_proxy" "https_redirect" {
  name    = "${var.bucket_name}-http-proxy"
  url_map = google_compute_url_map.https_redirect.self_link
}

resource "google_compute_global_forwarding_rule" "https_redirect" {
  name       = "${var.bucket_name}-http-forwarding-rule"
  target     = google_compute_target_http_proxy.https_redirect.self_link
  port_range = "80"
  ip_address = google_compute_global_address.website.address
}
