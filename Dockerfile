FROM node:latest

WORKDIR /usr/src/app/typescript-template

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]