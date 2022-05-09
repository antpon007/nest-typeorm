<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://desarrolloweb.com/media/350/typeorm-nest.jpg" width="620" alt="Nest & TypeOrm" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
  <p align="center">This project is an implementation of the NestJs framework using the typeorm library, mysql database and applying some concepts of SOLID and hexagonal architecture.</p>
    <p align="center">

## Description

For the development of this project, [hexagonal architecture](https://apiumhub.com/es/tech-blog-barcelona/arquitectura-hexagonal/) was implemented in order to strengthen greater knowledge on this topic and put the [SOLID](https://profile.es/blog/principios-solid-desarrollo-software-calidad/) principles into practice.

The database is hosted on an RDS in AWS, you will also find within the [bd-scripts](https://github.com/antpon007/nest-typeorm/tree/main/bd-scripts) folder the script to import it locally if you wish, taking into account making the change in the configuration file of the database module.

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



## Stay in touch

- Author - [Antonio Luis Ponce Rondón](https://www.linkedin.com/in/antpon-dev/)

