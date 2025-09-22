# Use Node.js base image
FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm ci

# Copy source code
COPY . .

# Build the Vite app
RUN npm run build

# Expose the port Vite preview uses (default 4173)
EXPOSE 4173

# Run Vite preview server
CMD ["npm", "run", "dev"]
