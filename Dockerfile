# ---------- Building stage
FROM node:13.7.0 AS builder

WORKDIR /usr/src/app

ENV HOST 0.0.0.0

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:13.7.0-alpine AS runner

WORKDIR /usr/src/app

ENV HOST 0.0.0.0

COPY --from=builder /usr/src/app .
CMD ["npm", "run", "start"]