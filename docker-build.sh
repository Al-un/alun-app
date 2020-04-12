#!/bin/sh

docker build --file Dockerfile --tag alunsng/alun:app .
docker push alunsng/alun:app