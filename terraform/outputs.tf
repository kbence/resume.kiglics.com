output "aws_access_key_id" {
  value = aws_iam_access_key.build.id
}

output "aws_secret_access_key_encrypted" {
  value = aws_iam_access_key.build.encrypted_secret
}
