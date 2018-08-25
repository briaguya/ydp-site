#!/usr/bin/env bash
echo "starting..."

set -o errexit

TAG='janis:local'
echo "building docker image..."
docker build --tag "$TAG" .
echo "running docker image..."
HOST_IP=$(ifconfig en0 | awk '$1 == "inet" {print $2}')

docker run \
    --rm \
    --name yourdadpresents \
    --tty --interactive \
    --publish 3000:80 \
    --volume "$PWD/content:/app/content" \
    --volume "$PWD/src:/app/src" \
    --volume "$PWD/public:/app/public" \
    --volume "$PWD/yarn.lock:/app/yarn.lock" \
    --volume "$PWD/package.json:/app/package.json" \
    --volume "$PWD/static.config.js:/app/static.config.js" \
    --volume "$PWD/.babelrc:/app/.babelrc" \
    "$TAG" "$@"
