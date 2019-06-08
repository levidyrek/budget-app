FROM node:8.15.0-jessie

WORKDIR /home/node/app
RUN chown -R node:node .

USER node

COPY --chown=node:node package.json package-lock.json ./
RUN npm install

COPY --chown=node:node . ./

EXPOSE 3000
