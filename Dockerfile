FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
ENV PORT=3030
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../ && npm cache clean --force
COPY . .
EXPOSE 3030
RUN chown -R node /usr/src/app
USER node
RUN npx sequelize-cli db:create
RUN npx sequelize-cli db:migrate
CMD ["node", "app.js"]
