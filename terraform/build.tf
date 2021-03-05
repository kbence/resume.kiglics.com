resource aws_iam_user build {
    name = "resume-kiglics-com-uploader"
}

resource aws_iam_access_key build {
  user    = aws_iam_user.build.name
  pgp_key = "keybase:bnc"
}

data aws_iam_policy_document s3-upload {
    statement {
        actions = [
            "s3:GetObject*",
            "s3:PutObject*",
            "s3:DeleteObject",
        ]
        resources = [
            "${aws_s3_bucket.main.arn}/*",
        ]
    }

    statement {
        actions = [
            "s3:ListObjects",
        ]
        resources = [
            aws_s3_bucket.main.arn,
        ]
    }
}

resource aws_iam_policy s3-upload {
    name = "resume-kiglics-com-uploader"
    policy = data.aws_iam_policy_document.s3-upload.json
}

resource aws_iam_policy_attachment s3-upload {
    name = "resume-kiglics-com-uploader"
    policy_arn = aws_iam_policy.s3-upload.arn
    users = [aws_iam_user.build.name]
}
