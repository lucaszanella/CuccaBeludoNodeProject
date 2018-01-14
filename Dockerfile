FROM node:latest
MAINTAINER Lucas Zanella (me@lucaszanella.com)

WORKDIR /home

ARG CONSUMER_KEY=""
ARG CONSUMER_SECRET=""
ARG ACCESS_TOKEN=""
ARG ACCESS_TOKEN_SECRET=""

RUN apt-get update && apt-get install -y git \
    && rm -rf /var/lib/apt/lists/*

RUN npm install twit \
    && git clone https://github.com/lucaszanella/CuccaBeludoNodeProject \
    && touch tokens.txt \
    && echo consumer_key=$CONSUMER_KEY >> tokens.txt \
    && echo consumer_secret=$CONSUMER_SECRET >> tokens.txt \
    && echo access_token=$ACCESS_TOKEN >> tokens.txt \
    && echo access_token_secret=$ACCESS_TOKEN_SECRET >> tokens.txt \\
    && cat tokens.txt

ENTRYPOINT ["node", "CuccaBeludoNodeProject/cucca.js"]
