FROM cypress/included:7.7.0

COPY . /app
RUN npm install

WORKDIR /app
