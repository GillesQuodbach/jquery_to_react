# WORK FINE WITH SERVE
# ==== CONFIGURE ====
# # Use a Node 16 image as builder
# FROM node:18-alpine
# # Set the working directory to /app inside the container
# WORKDIR /app
# # Copy app files
# COPY . .
# # ==== BUILD ====
# # Install dependencies 
# # (npm ci makes sure the exact versions in the lockfile gets installed)
# RUN npm ci
# # Build the app
# RUN npm run build

# # ==== RUN ====
# # Set the env to "production"
# ENV NODE_ENV production
# # Expose the port on wich the app will be running (3000 is the default that 'serve' uses)
# EXPOSE 3000
# # Start the app
# CMD ["npx", "serve", "build"]

# Dockerfile
# Pull the base image
FROM node:13.12.0-alpine
# Set the working directory
WORKDIR /react-docker
# Copy app dependencies to container
COPY ./package*.json ./
# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# Install dependencies
RUN npm install
# Deploy app for local development
CMD npm start --host 0.0.0.0 --port 3000 --disableHostCheck true