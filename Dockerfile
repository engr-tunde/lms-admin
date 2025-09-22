# Use Node.js base image
FROM node:18-alpine

WORKDIR /app

# Accept build-time arguments
ARG VITE_APP_NAME="Mersee"
ARG VITE_API_URL_BASE

# Make them available as environment variables
ENV VITE_APP_NAME=$VITE_APP_NAME
ENV VITE_API_URL_BASE=$VITE_API_URL_BASE

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm ci

# Copy source code
COPY . .

# Build the Vite app (env vars baked into build)
RUN npm run build

# Expose the Vite dev/preview port
EXPOSE 5173

# Run Vite (preview is correct for production, dev is for hot-reload)
CMD ["npm", "run", "dev"]
