locals {
  origin_id = "S3Origin"
}

resource "aws_acm_certificate" "cert" {
  domain_name       = "resume.kiglics.com"
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }

  provider = aws.us-east-1
}

resource "aws_cloudfront_distribution" "main" {
  origin {
    origin_id   = local.origin_id
    domain_name = aws_s3_bucket.main.bucket_regional_domain_name
  }

  aliases = [
    "resume.kiglics.com"
  ]

  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD", "OPTIONS"]
    target_origin_id       = local.origin_id
    viewer_protocol_policy = "redirect-to-https"

    forwarded_values {
      query_string = true

      cookies {
        forward = "none"
      }
    }
  }

  price_class = "PriceClass_100"
  enabled     = true

  default_root_object = "index.html"

  viewer_certificate {
    acm_certificate_arn = aws_acm_certificate.cert.arn
    ssl_support_method  = "sni-only"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
}
