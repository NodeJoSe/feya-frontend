#!/bin/bash
docker-compose build
# docker-compose up
docker-compose run web npm install
docker-compose run web npm run build
docker-compose stop
docker-compose rm -f
