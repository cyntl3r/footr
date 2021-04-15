FROM node:alpine
WORKDIR /app
COPY . .
RUN npm i && npm run build
