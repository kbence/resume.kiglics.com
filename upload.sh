#!/usr/bin/env bash

cd "$(dirname "${BASH_SOURCE[0]:-$0}")"

set -euo pipefail

npm run build
npm run export

env | cut -d = -f 1

aws s3 sync --acl public-read --delete ./out s3://resume.kiglics.com/
