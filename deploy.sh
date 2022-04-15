#!usr/bin/env sh
set -e

npm run build

cd dist
git add -A
git commit -m "new deployment"
git push -f git@github.com:luizAlbuquerqueJr/portifolio.git master:pages

cd -