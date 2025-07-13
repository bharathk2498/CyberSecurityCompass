FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY server/package*.json ./server/
COPY shared/package*.json ./shared/

# Install dependencies
RUN npm ci --only=production && npm cache clean --force

# Build the application
FROM base AS builder
WORKDIR /app

# Copy all files
COPY . .

# Install all dependencies (including dev dependencies)
RUN npm run install:all

# Build shared package first
RUN cd shared && npm run build

# Build server
RUN cd server && npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=5000

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nodejs

# Copy built application
COPY --from=builder --chown=nodejs:nodejs /app/server/dist ./server/dist
COPY --from=builder --chown=nodejs:nodejs /app/shared/dist ./shared/dist
COPY --from=deps --chown=nodejs:nodejs /app/node_modules ./node_modules
COPY --from=deps --chown=nodejs:nodejs /app/server/node_modules ./server/node_modules

# Copy package.json files
COPY --chown=nodejs:nodejs server/package.json ./server/
COPY --chown=nodejs:nodejs shared/package.json ./shared/

USER nodejs

EXPOSE 5000

CMD ["node", "server/dist/index.js"]