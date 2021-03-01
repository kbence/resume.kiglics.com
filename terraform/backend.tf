terraform {
  backend "s3" {
    bucket = "bnc-data"
    key    = "terraform-states/cv.kiglics.com/main.tfstate"
    region = "eu-west-1"
  }
}
