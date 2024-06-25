FROM node:latest
WORKDIR /home/node/api
COPY . .
COPY ./.env.production ./.env
RUN npm install --quiet --no-optional --no-fund --loglevel=error
RUN npx prisma generate
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start:prod"]


#FROM node:19-slim
#RUN npm install -g @nestjs/cli
#WORKDIR /home/node/app
#CMD ["tail","-f", "/dev/null"]
