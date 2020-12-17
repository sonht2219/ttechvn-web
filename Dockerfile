FROM node:14

## Create app directory
#RUN mkdir -p /usr/src/app
#WORKDIR /usr/src/app

ARG WORKDIR=/var/www/html
WORKDIR $WORKDIR
## Install app dependencies
COPY package.json $WORKDIR
COPY package-lock.json $WORKDIR
#RUN yarn install

RUN npm install
# Set environment variables
#ENV NODE_ENV production
#ENV NUXT_HOST 0.0.0.0
#ENV NUXT_PORT 3000

# Bundle app source
COPY . $WORKDIR
RUN npm run build

# Clear the cache
#RUN yarn cache clean

#EXPOSE 3000
ENTRYPOINT [ "npm", "start" ]
