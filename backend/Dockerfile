FROM python:3.8-alpine

RUN apk update && apk add build-base postgresql-dev jpeg-dev zlib-dev

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ADD requirements/base.txt ./requirements.txt
# RUN  python -m pip install -U pip && pip install -r requirements.txt
RUN apk add --no-cache \
  # Pillow
  jpeg-dev \
  zlib-dev \
  # Psycopg
  postgresql-dev \
  # Lxml
  libxslt-dev \
  libxml2-dev \
  # Pipenv (not needed after install)
  && apk add --no-cache --virtual .build-deps \
  gcc \
  musl-dev \
  openssl-dev \
  libffi-dev \
  libressl-dev \
  mariadb-dev \
  && python -m pip install -U pip \
  && pip install -r requirements.txt \
  && apk del .build-deps
COPY . /usr/src/app

ENTRYPOINT ["sh", "docker-entrypoint.sh"]
