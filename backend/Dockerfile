# Backend Dockerfile

# 1️⃣ Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY . .

# 2️⃣ Runtime stage
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 5000
CMD ["node", "server.js"]


