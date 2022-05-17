<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://desarrolloweb.com/media/350/typeorm-nest.jpg" width="620" alt="Nest & TypeOrm" /></a>
</p>

  <p align="center">This project is an implementation of the NestJs framework using the typeorm library, mysql database and applying some concepts of SOLID and hexagonal architecture.</p>
    <p align="center">

## Description

For the development of this project, [hexagonal architecture](https://apiumhub.com/es/tech-blog-barcelona/arquitectura-hexagonal/) was implemented in order to strengthen greater knowledge on this topic and put the [SOLID](https://profile.es/blog/principios-solid-desarrollo-software-calidad/) principles into practice.

The database is hosted on an RDS in AWS, you will also find within the [utils/bd-scripts](https://github.com/antpon007/nest-typeorm/tree/main/utils/bd-scripts) folder the script to import it locally if you wish, taking into account making the change in the configuration file of the database module.

To make use of the postman collection, you need to look for it in the folder [utils]

## Bank of Dreams

At the end of the development of this API, the following characteristics are available:

1. Login.
2. List of my bank accounts.
3. List of transactions associated with a specific account.
4. Transaction detail
5. Average amount of transactions in an account, given a range of
   weather.
6. Application for new products (swift credit, credit card, bank account)
   savings, home leasing).

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Support

## Using Docker-Compose

https://www.docker.com/get-started/

### Initializing a instance mysqldb

For this occasion we will use a root user password in a txt file [db_password.txt](https://github.com/antpon007/nest-typeorm/tree/main), which will be used by docker when creating the database instance.

```bash
$ docker-compose up -d
```

### Restoring Database

A volume is currently configured for mysql at location: [utils/storage-docker](https://github.com/antpon007/nest-typeorm/tree/main/utils/storage-docker). modify it if you think it is necessary

- ./utils/storage-docker:/var/lib/mysql

```bash

# local volumen

$ docker exec <NAME-CONTAINER> sh -c 'exec /var/lib/mysql -r -uroot -p"$MYSQL_ROOT_PASSWORD_FILE" database-dreambank' > ./utils/bd-scripts/bankofdreamsbd.sql

# example

$ docker exec nest-js-typeorm_db_1 sh -c 'exec /var/lib/mysql -r -uroot -p"$MYSQL_ROOT_PASSWORD_FILE" database-dreambank' > ./utils/bd-scripts/bankofdreamsbd.sql
```

## Stay in touch

- Author - [Antonio Luis Ponce Rondón](https://www.linkedin.com/in/antpon-dev/)
