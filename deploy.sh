#!/bin/sh
docker container prune -f
docker image prune -f
docker network prune -f

docker build backend --tag ckl_backend
docker build nginx --tag ckl_nginx
docker build frontend --tag ckl_frontend
mkdir -p backend/src/media
mkdir -p backend/src/static

# Create docker network
docker network create backend-net
# Start containers
docker run -d --network=backend-net \
              --network-alias=backend \
              -v /home/turner/Documents/ckl/bruno-marques-fullstack/backend/src/static:/usr/src/app/src/static \
              -v /home/turner/Documents/ckl/bruno-marques-fullstack/backend/src/media:/usr/src/app/src/media \
              ckl_backend
docker run -d --network=backend-net \
              --network-alias=nginx \
              -p 8080:8080 \
              -v /home/turner/Documents/ckl/bruno-marques-fullstack/backend/src/static:/usr/src/app/src/static \
              -v /home/turner/Documents/ckl/bruno-marques-fullstack/backend/src/media:/usr/src/app/src/media \
              ckl_nginx
docker run -d -p 80:80 ckl_frontend

