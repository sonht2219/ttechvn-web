FROM node:14

## Create app directory
#RUN mkdir -p /usr/src/app
#WORKDIR /usr/src/app

ARG WORKDIR=/var/www/html
WORKDIR $WORKDIR
## Install app dependencies
#COPY package.json /usr/src/app/
#COPY yarn.lock /usr/src/app/
#RUN yarn install

RUN npm install
# Set environment variables
#ENV NODE_ENV production
#ENV NUXT_HOST 0.0.0.0
#ENV NUXT_PORT 3000

# Bundle app source
#COPY . /usr/src/app
RUN npm run build

# Clear the cache
#RUN yarn cache clean

EXPOSE 3000
CMD [ "npm", "start" ]
