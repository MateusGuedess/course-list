FROM node:20

WORKDIR /app

COPY package*.json .

COPY . .

RUN yarn install

EXPOSE 3030

CMD ["yarn", "dev"]
