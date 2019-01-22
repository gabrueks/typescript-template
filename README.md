Olá!

Para rodar o projeto, você pode rodar localmente ou em containers docker, para facilitar o inicio da aplicação, eu usei docker-compose.

Para rodar localmente você precisa rodar uma instância do mongodb na sua máquina e rodar os seguintes comandos:
npm i
npm start

e acessar a url http://localhost:8080 no seu browser para ver funcionando.

Para rodar em docker, você tem duas opções

1: por Makefile (Sistemas Unix)
Rodar o comando:
make

2: Por docker compose, rodar os comandos:
docker-compose build
docker-compose up

E, nos dois casos, acessar http://localhost:8080
