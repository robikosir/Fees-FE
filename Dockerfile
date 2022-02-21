FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN node -v
RUN npm -v
run npm cache clean -f
RUN npm install --verbose
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage

COPY --from=build-stage . /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./deploy/nginx/prod.conf /etc/nginx/conf.d

ENV PORT = 8080
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
