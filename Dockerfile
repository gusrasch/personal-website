# Use an official Node runtime as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# I don't think this COPY is necessary, can't we just COPY . . here instead?
# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app
RUN npm run build

# Use a lightweight server to serve the static files
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
