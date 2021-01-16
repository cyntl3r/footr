FROM node:alpine AS builder
WORKDIR /app
COPY . .
RUN npm i && npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]