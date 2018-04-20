# About

This is a funny nodejs project that makes it easy for people to send
tweets in the name of a fake twitter account with a funny
name that can only be understandable when pronounced, so
live TV shows will often pronounce the name of the account
together with its sent opinion. 

# How it works

People just DM the profile with the exact message it wants it
to tweet and the profile will tweet it. For example, sending
the DM:

@TVnews that's a very tragic accident and I feel sorry for the 
family

will tweet the exact text above. 

# Usage (with docker)
First clone and edit the dockerfile and edit
```
ARG CONSUMER_KEY=""
ARG CONSUMER_SECRET=""
ARG ACCESS_TOKEN=""
ARG ACCESS_TOKEN_SECRET=""
ARG BOT_OWN_ID=""
```
According to your bot configurations. You can get the id of your bot here: http://mytwitterid.com/. I know that I could get with the API but this project is just a joke and it was written years ago and I'm lazy. Your bot id is extremely necessary otherwise the bot will answer to itself in a loop.

So:

```
git clone https://github.com/lucaszanella/CuccaBeludoNodeProject
cd CuccaBeludoProject
nano Dockerfile
```

Build:

```
sudo docker build -t cuccabeludo .
```

Run

```
sudo docker run --restart unless-stopped cuccabeludo

```

You can even log out of the ssh session or your terminal because `--restart unless-stopped` will guarantee that it runs again because you didn't explicitly run `docker stop`


# Usage (no docker)
Make sure you have `npm` and `twit`(for nodejs) installed. If not, just 

```
sudo apt install npm
npm install twit
```


Just do the following (before doing it, please read below)

```
git clone https://github.com/lucaszanella/CuccaBeludoProject
cd CuccaBeludoProject
nano tokens.txt
nodejs cucca.js
```

You must have a file named tokens.txt with this configuration:

```
consumer_key = "your consumer key"
consumer_secret = "your consumer secret"
access_token = "your token"
access_token_secret = "your token secret"
bot_own_id = "your bot id"
```

PS: spaces and double quotes aren't necessary, they'll be ignored,
but you can keep them.
Remember that once you create the twitter app, it may be setted to 
no direct messages permission as default. Once you change that,
you need to renew the 'access token' and 'access token secret'.


