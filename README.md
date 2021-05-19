# Challenge for Rest API using NodeJs with NestJs and MySql, Frontend SPA Angular 12
Starter pack to build API projects with NodeJs and NestJs, running Mysql as database and Frontend with Angular 12.

## Dependencies
- Docker
- Docker Compose
- Makefile

## Features
- Runs with NodeJs v12.22.1 (with alpine Docker image)
- Build with NestJs Framework
- Create Tests Unit e e2e
- MySql (docker image)
- Configuration with .env and config files
- Basic routes for GET, POST and Delete in Category and Device
- Build with Angular 12 Framework
- Create pages Device with List, Delete and Create
- Create pages Category with List, Delete and Create
- Organizarion Tests Unit in Angular

## Cloud Heroku
- Frontend: http://challenge-dm-frontend.herokuapp.com/
- Backend: http://challenge-dm-api.herokuapp.com/

## Setup 
Always check this at the level of the Makefile directory

Install images, dependencies on docker containers for API, Frontend and Mysql:

```bash
$ make build
```

In case of running frontend and backend test install dependencies

```bash
$ make backend-build 
```


```bash
$ make frontend-build
```


## Local deployment
Start containers with command:

```
$ make start
```

#### Ports: 
- dm-api: http://localhost:3000
- dm-frontend: http://localhost:8080


Stop containers with command:

```
$ make stop
```

View logs containers with command:

```
$ make logs
```

## Local Test
### dm-api

Start tests coverage with command:

```
$ make backend-test-coverage
```

Start tests e2e with command:

```
$ make backend-test-e2e
```

### dm-frontend

Start tests jest  with command:

```
$ make frontend-test-jest
```
