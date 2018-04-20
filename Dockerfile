FROM node:latest
MAINTAINER Lucas Zanella (me@lucaszanella.com)

WORKDIR /home

ARG CONSUMER_KEY=""
ARG CONSUMER_SECRET=""
ARG ACCESS_TOKEN=""
ARG ACCESS_TOKEN_SECRET=""
ARG BOT_OWN_ID=""

RUN apt-get update && apt-get install -y git \
    && rm -rf /var/lib/apt/lists/*

COPY cucca.js cucca.js

RUN npm install twit \
    && touch tokens.txt \
    && echo consumer_key=$CONSUMER_KEY >> tokens.txt \
    && echo consumer_secret=$CONSUMER_SECRET >> tokens.txt \
    && echo access_token=$ACCESS_TOKEN >> tokens.txt \
    && echo access_token_secret=$ACCESS_TOKEN_SECRET >> tokens.txt \\
    && echo bot_own_id=$BOT_OWN_ID >> tokens.txt \\
    && cat tokens.txt

ENTRYPOINT ["node", "cucca.js"]
