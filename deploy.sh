bash#!/usr/bin/env sh

# Arrêt en cas d'erreur
set -e

# Build du projet
npm run build

# Navigation dans le dossier de build
cd dist

# Initialisation d'un repo git dans dist
git init
git checkout -b pages
git add -A
git commit -m 'deploy'

# Push vers la branche gh-pages
git push -f git@github.com:doruo/doruo.github.io.git pages:gh-pages

cd -