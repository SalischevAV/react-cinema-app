provider "aws" {
  region = "eu-west-3"
}

terraform {
  backend "s3" {
    bucket  = "app-cinema-terraform-state-bucket"
    key     = "app-cinema.tfstate"
    region  = "eu-west-3"
    encrypt = true
  }
}

locals {
  prefix = "${var.prefix}-${terraform.workspace}"
  common_tags = {
    Environment = terraform.workspace
    Project     = var.project
    ManageBy    = "Terraform"
    Owner       = "devorer77@gmail.com"
  }
}
