output "website_ip_address" {
  value       = google_compute_global_address.website.address
  description = "The IP address of the website"
}
