# Primera etapa: Build
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Segunda etapa: Runtime
FROM node:20-alpine

WORKDIR /app
COPY --from=builder /app/.next /app/.next
COPY --from=builder /app/public /app/public
COPY package*.json ./
RUN npm install --production

ENV PORT=3000
CMD ["npm", "start"]