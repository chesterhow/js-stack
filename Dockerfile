FROM node:8-alpine

WORKDIR /app
COPY package.json .
RUN yarn install

COPY . .
RUN yarn build:prod

FROM nginx:1-alpine
EXPOSE 80
COPY --from=0 /app/dist /usr/share/nginx/html
