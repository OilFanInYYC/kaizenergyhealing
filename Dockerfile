FROM node:22

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY * ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 5000

CMD [ "npm", "start" ]