resource "aws_s3_bucket" "main" {
  bucket = "resume.kiglics.com"
  acl    = "public-read"

  website {
    index_document = "index.html"
    error_document = "/404.html"
  }
}
