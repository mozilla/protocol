#!/bin/bash
cd "$(dirname ${BASH_SOURCE[0]})"/..

docker run --rm --label=node \
    -v $(pwd):/app -w /app\
    node \
    npm run-script build
