bash#!/usr/bin/env sh

# Error handling
set -e

# Build
rm -rf dist
npm run build
cd dist

# Staging
git init
git checkout -b pages
git add -A
git commit -m 'deploy'

# Deploy
git push -f git@github.com:doruo/doruo.github.io.git pages:gh-pages

cd -