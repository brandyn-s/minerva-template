#!/bin/sh
set -eu

if ! command -v gitleaks >/dev/null 2>&1; then
  printf '%s\n' \
    'scan-secrets: gitleaks is required on PATH but was not found.' \
    'Install gitleaks 8.30.1 (for example `brew install gitleaks`, or a release from' \
    'https://github.com/gitleaks/gitleaks/releases), then rerun `npm run check`.' >&2
  exit 127
fi

ignored_tracked=$(git ls-files --cached --ignored --exclude-standard)
if [ -n "$ignored_tracked" ]; then
  printf '%s\n' "$ignored_tracked" >&2
  exit 1
fi

gitleaks git --redact --no-banner --no-color
gitleaks git --staged --redact --no-banner --no-color

scan_root=$(mktemp -d "${TMPDIR:-/tmp}/minerva-secret-scan.XXXXXX")
trap 'rm -rf "$scan_root"' EXIT HUP INT TERM
objects_directory="$scan_root/objects"
files_directory="$scan_root/files"
paths_file="$scan_root/paths"
mkdir -p "$objects_directory" "$files_directory"

GIT_INDEX_FILE="$scan_root/index" GIT_OBJECT_DIRECTORY="$objects_directory" \
  git read-tree --empty
git ls-files -z --cached --others --exclude-standard > "$paths_file"
GIT_INDEX_FILE="$scan_root/index" GIT_OBJECT_DIRECTORY="$objects_directory" \
  git update-index --add --remove -z --stdin < "$paths_file"
GIT_INDEX_FILE="$scan_root/index" GIT_OBJECT_DIRECTORY="$objects_directory" \
  git checkout-index --all --force --prefix="$files_directory/"

gitleaks dir "$files_directory" --redact --no-banner --no-color
