all: start

start:
	@docker-compose build
	@docker-compose up