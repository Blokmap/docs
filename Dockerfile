FROM node:slim

WORKDIR /blokmap-docs

COPY package.json package-lock.json ./

RUN npm install -g npm
RUN npm install

COPY . .

CMD [ "npm", "run", "docs:build" ]
