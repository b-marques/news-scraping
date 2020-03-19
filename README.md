# bruno-marques-fullstack

Code related to the junior challenge at Cheesecake Labs. Structured as:

- Fronted
- Backend
- Nginx

All of these structures are inside containers that will be deployed at Amazon EC2 machine with `docker`.

All containers' images used are based on the alpine version, aiming the minimum container size and resources consumption at the final deploy.

## Backend:

The core is based in `Django` and `Django REST Framework` communicating with a `postgresql database` (on Amazon RDS). In the top of it we have `gunicorn` a Python WSGI HTTP Server that will receive and process the requests from a `nginx` web server.

Django and gunicorn will run inside a container named `backend`, listening at port 8000 exposed only locally inside docker network.

While the nginx web server will run inside a container named `nginx`, and will listen in port 8080 in its container and binded to the host (Amazon EC2 machine) port 8080.

<!--- There is also a `background_task` running a `crawler` builded with `scrapy` to crawl news from [TechCrunch](https://techcrunch.com) and [FoxNews](https://foxnews.com) periodically.-->

## Frontend

Use React and Atomic Design architecture, requesting data from `backend` to perform client side rendering of it.

Running inside a container named `frontend` and listening at port 80 binded to host port 80.

This container is a nginx container that serves files generated with `yarn build` command.

## Database

Running database on Amazon RDS. Uses PostgreSQL 11.6.

## Development mode

To run in development mode is needed to have `git`, `docker` and `docker-compose` installed and follow these steps:

```
git clone https://github.com/cheesecakelabs-challenges/bruno-marques-fullstack

cd bruno-marques-fullstack

mv frontend/.example.env frontend/.env

Set API_URL=http://localhost:8000/v1/ in frontend/.env

mv backend/src/app/local.example.env backend/src/app/local.env

Set DJANGO_DEBUG=True, ENV=development and CORS_ORIGIN_WHITELIST=http://localhost:4000 in backend/src/app/local.env

docker-compose -f backend/docker-compose.yml build
docker-compose -f backend/docker-compose.yml run

Open another terminal and navigate to bruno-marques-fullstack folder and run

yarn --cwd frontend dev
```

Done.

## Production Deploy

To run this project is needed to have `git` and `docker` installed and follow these steps:

```
git clone https://github.com/cheesecakelabs-challenges/bruno-marques-fullstack

cd bruno-marques-fullstack

mv frontend/.example.env frontend/.env

mv backend/src/app/local.example.env backend/src/app/local.env

chmod +x deploy.sh

./deploy.sh
```

### IMPORTANT: Is needed to config the database connection at `backend/src/app/local.env`.

If you want to run a local database for test porpouses, you can run

```
docker run -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres
 -e POSTGRES_DB=app -p 5432:5432 library/postgres
```

and set:

`DATABASE_URL=postgres://postgres:postgres@localhost:5432/app`
