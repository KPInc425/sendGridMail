FROM node
ENV ASPNETCORE_FORWARDEDHEADERS_ENABLED=true
EXPOSE 5174/tcp
WORKDIR /app
COPY package.json .
#COPY ./creds/copy.env /.env
RUN npm i
COPY . .
ENTRYPOINT [ "node", "server.js" ]
