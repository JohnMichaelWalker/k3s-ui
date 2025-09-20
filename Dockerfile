FROM node:22-alpine AS builder

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Install dependencies
COPY pnpm-lock.yaml ./
COPY package.json ./
RUN pnpm install --frozen-lockfile

# Copy source and build
COPY . .
RUN pnpm run build

# Stage 2: Serve
FROM nginx:alpine
COPY --from=builder /dist /usr/share/nginx/html

# Expose port
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
