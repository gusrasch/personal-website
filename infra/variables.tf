variable "project_id" {
  description = "The ID of the GCP project"
}

variable "region" {
  description = "The region to deploy resources"
  default     = "us-east1"
}

variable "bucket_name" {
  description = "The name of the GCS bucket"
}

variable "domain_name" {
  description = "The domain name for the website"
}
