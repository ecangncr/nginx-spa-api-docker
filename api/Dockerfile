FROM node:18.8.0-alpine3.15
WORKDIR /usr/src/
COPY . .
 
RUN npm install 

ENV NODE_PATH=/usr/src/node_modules
 
 
CMD ["node", "server.js"]
