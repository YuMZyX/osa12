FROM node:18.17.1
ENV NODE_ENV production

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci --only=production

ENV DEBUG=bloglist-backend:*

USER node
CMD npm start