
<h1>Hello!</h1><h3>~~English~~</h3>

This is a repository made for helping the start of **Node.js** with **Typescript** and **MongoDB** projects.

The **Typescript** helps in your .js projects to be more organized and easily readable, wich helps with code maintenance. The **MongoDB** is a non-relational database that gave **Node.js** a huge partner in crime because it manipulates data as Javascript Objects (JSON).

To start, you should clone the repository using the following command: <br>
``` git clone https://github.com/gabrueks/typescript-template.git ```
<br>

<h3>Now that we have the code on our machines</h3>
There are two options on running the template, locally or in containers docker (wich is also locally, but it's different, you know). I used docker-compose to run a **MongoDB** instance and a **Node.js** server without problems.

<h3>Now, go to your project folder</h3>

To run in docker, you have two options

1: by Makefile (Unix systems)
Run the command:
```
make
```

2: By docker-compose, run the command:
```
docker-compose build
docker-compose up
```

To run locally, you need to run **MongoDB** on your machine an run the commands:
```
npm install
npm start
```

<h2>And in both cases, go to your browser and type http://localhost:8080</h2> 

<h1>Olá!</h1><h3>~~Português~~</h3>

Este é um repositório criado para auxiliar o inicio de projetos de **Node.js** com **Typescript** e **MongoDB**. Este stack está ganhando muita força no mercado atualmente e tende a crescer cada vez mais.

O **Typescript** ajuda seus projetos .js a serem mais organizados e facilmente visualizados e por consequência, ajuda na manutenção do código. O **MongoDB** é um banco não relacional que deu muita força ao **Node.js** por tratar os dados como objetos Javascript (JSON).

Para começar o projeto, você deve clonar este repositório com o comando:<br>
``` git clone https://github.com/gabrueks/typescript-template.git ```
<br>

<h3>Agora que temos o projeto em "mãos" (haha funny joke)</h3>
Eu disponibilizei alguns jeitos para que você rodasse o projeto template, localmente ou em containers docker(que também é local, mas é diferente, você sabe). Eu utilizei o docker-compose para rodar o **MongoDB** e o servidor **Node.js** sem maiores problemas.

<h3>Agora, vá para a para a pasta do seu projeto.</h3>

Para rodar em docker, você tem duas opções

1: por Makefile (Sistemas Unix)
Rodar o comando:
```
make
```

2: Por docker-compose, rodar os comandos:
```
docker-compose build
docker-compose up
```


Para rodar localmente você precisa rodar uma instância do **MongoDB** na sua máquina e rodar os seguintes comandos:
```
npm install
npm start
```

<h2>E, nos dois casos, acessar http://localhost:8080</h2>
