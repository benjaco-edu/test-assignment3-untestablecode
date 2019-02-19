FROM node:11

#RUN wget -O /usr/local/bin/dumb-init https://github.com/Yelp/dumb-init/releases/download/v1.2.1/dumb-init_1.2.1_amd64 && \
#chmod 755 /usr/local/bin/dumb-init

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

#USER node

#ENTRYPOINT ["/usr/local/bin/dumb-init", "--"]
CMD  ./node_modules/.bin/eslint untestable_timeOfDay.js ; ./node_modules/.bin/jshint untestable_timeOfDay.js \
 ; /node_modules/.bin/eslint timeOfDay.js ; ./node_modules/.bin/jshint timeOfDay.js ; ./node_modules/.bin/mocha