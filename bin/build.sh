#!/bin/bash
cd "$(dirname ${BASH_SOURCE[0]})"/..

docker run --rm --label=node \
    -v $(pwd):/app -w /app\
    node:10-alpine \
    npm run-script build
