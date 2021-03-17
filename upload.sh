#!/usr/bin/env bash

cd "$(dirname "${BASH_SOURCE[0]:-$0}")"

set -euo pipefail

yarn run build
yarn run export

# Ugly hack since something puts /usr/local/bin earlier to PATH
# than /usr/bin, and there's a buggy version of awscli there.
export PATH="/usr/bin:$PATH"

aws s3 sync --acl public-read --delete ./out s3://resume.kiglics.com/
