# Optimisation:
#   https://speakerdeck.com/po3rin/optimize-nuxt-dot-js-v2-dot-0-0-and-docker-using-multi-stage-build-c40788dc-24b9-49a7-b694-6d2fa7f92958
#   https://qiita.com/arthur_foreign/items/6a0227e6f53cc3104d74

# ---------- Building stage
# Alpine cannot be used as node-gyp is somewhere required
FROM node:13.7.0 AS builder

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .
# Workaround: https://github.com/nuxt-community/dotenv-module/issues/46#issuecomment-558621787
COPY .env.prod .env 
RUN npm run build

# ---------- Runner stage
FROM node:13.7.0-alpine AS runner

WORKDIR /usr/src/app

# COPY --from=builder /usr/src/app .

# Re-install only production dependencies: https://docs.npmjs.com/cli/install
COPY package*.json ./
RUN npm install --production

# Copy only required files
COPY --from=builder /usr/src/app/.nuxt ./.nuxt/
COPY --from=builder /usr/src/app/static ./static/
COPY nuxt.config.ts .
COPY tsconfig.json .
COPY vue-shim.d.ts .

EXPOSE 3000
CMD ["npm", "run", "start"]