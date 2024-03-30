# Specify the base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json into the working directory
COPY package*.json ./

# Install any dependencies
RUN npm install

# Copy the rest of your application code into the container
COPY . .

# Expose the port on which the application runs
EXPOSE 8080

# Specify the command to run the application
CMD [ "node", "app.js" ]