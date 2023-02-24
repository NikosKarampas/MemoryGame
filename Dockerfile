FROM node:17-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

# Build the app
RUN npm run build

# ==== RUN =======
# Set the env to "production"
ENV NODE_ENV production
ENV PORT=8080

# Expose the port on which the app will be running (3000 is the default that `serve` uses)
EXPOSE 8080

# Start the app
CMD [ "npx", "serve", "build" ]