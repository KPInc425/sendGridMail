FROM node
ENV ASPNETCORE_FORWARDEDHEADERS_ENABLED=true
EXPOSE 5174/tcp
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
ENTRYPOINT [ "node", "server.js" ]
