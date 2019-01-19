FROM node:8.15.0-jessie

WORKDIR /home/node/app
COPY package.json package-lock.json /home/node/app/
RUN npm install

COPY . /home/node/app/

EXPOSE 3000
