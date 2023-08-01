FROM node:lts

WORKDIR /usr/src/app

RUN npm i -g yarn

COPY package.json ./

RUN yarn install

COPY . .

EXPOSE 3333

ENV DATABASE_URL ''
ENV PORT 3333
ENV SECRET_KEY ''

CMD [ "yarn", "dev" ]

# docker run -p 3333:3333 .