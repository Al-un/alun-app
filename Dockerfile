# ---------- Building stage
FROM node:13.7.0 AS builder

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .
COPY .env.prod .env
RUN npm run build

FROM node:13.7.0-alpine AS runner

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app .
CMD ["npm", "run", "start"]