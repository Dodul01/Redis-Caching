# Step 1: Use official Node.js image as base
FROM node:16

# Step 2: Set working directory in container
WORKDIR /usr/src/app

# Step 3: Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy all app files to container
COPY . .

# Step 5: Expose the port your app is running on
EXPOSE 5001

# Step 6: Run the app
# Step 6: Run the app
CMD ["npm", "run", "start:dev"]
