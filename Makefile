build:
	docker-compose build

start:
	docker-compose up -d

stop:
	docker-compose down

logs:
	docker-compose logs -f


backend-build: 
	cd ./dm-api && npm i

backend-test-coverage:
	cd ./dm-api && npm run test:cov

backend-test-e2e:
	cd ./dm-api && npm run test:e2e

frontend-build: 
	cd ./dm-frontend && npm i

frontend-test-jest:
	cd ./dm-frontend && npm run test