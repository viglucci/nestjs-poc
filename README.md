# nestjs-poc
A proof of concept implementation of a simple webapp using nestjs

# Getting Started

```
npm install
npm run start
```

# Using Authentication Via Passport

## Blizzard Battle.net

Register for a Blizzard Battlenet developer account on dev.battle.net.

Set env variables
```bash
export NESTPOC_HOST= https://mysubdomain.ngrok.io
export NESTPOC_AUTH_BATTLENET_ID= <your_client_id>
export NESTPOC_AUTH_BATTLENET_SECRET= <your_client_secret>
export NESTPOC_AUTH_BATTLENET_REGION= "us"
```
