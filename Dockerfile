# Use Node.js 20 base image (required by Vite)
FROM node:20-alpine

WORKDIR /app

# Accept build-time arguments
ARG VITE_APP_NAME="Mersee"
ARG VITE_API_URL_BASE

# Make them available as environment variables
ENV VITE_APP_NAME=${VITE_APP_NAME}
ENV VITE_API_URL_BASE=${VITE_API_URL_BASE}

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm ci

# Copy source code
COPY . .

# Build the Vite app
RUN npm run build


# Expose the preview port
EXPOSE 5173

# Run Vite preview in production
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
