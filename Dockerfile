FROM node:v18.20.5
WORKDIR /app
ENV PORT 3000
ENV MODEL_URL 'https://storage.googleapis.com/submssionmodel/model.json'
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "npm", "run", "start"]