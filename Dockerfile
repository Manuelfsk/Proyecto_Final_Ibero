# syntax=docker/dockerfile:1
FROM node:20.12.2-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm install -g @angular/cli
CMD ["ng", "serve", "--host", "0.0.0.0"]
EXPOSE 4200