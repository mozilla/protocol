#!/bin/bash
cd "$(dirname ${BASH_SOURCE[0]})"/..
mkdir -p .npm .config

docker run --rm --label=node \
    -u $(id -u) \
    -v $(pwd)/.config:/.config \
    -v $(pwd)/.npm:/.npm \
    -v $(pwd):/app -w /app\
    node:10-alpine \
    npm run-script build
