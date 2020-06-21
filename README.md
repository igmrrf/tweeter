# Twitter bot

Before starting the clock you'll need to set up some accounts if you don't have them already.

## What you'll need

-   Twitter account
-   Enable Twitter Developer
-   Development environment with Node.js and npm
-   [Text Editor](https://vscode.com) or [Cloud9 Account](https://c9.io/login)
-   [Zeit account](https://zeit.co/login) or [Heroku Account](https://heroku.com/login)

## Setup twitter

Set up an application on the Twitter account you want to retweet from via: [https://apps.twitter.com/app/new](https://apps.twitter.com/app/new)

Straight forward enough for the twitter application, make sure you add your phone number to your Twitter account before clicking the **Create your Twitter application** button.

After creating a developer's account and created an application we move on

### For Development Environment and Deployment we will use either of these

1. [Cloud9](https://c9.io/) with [Zeit](https://zeit.co/login)
2. [Text Editor](https://vscode.com) with [Heroku](https://heroku.com/login)

## Setup development environment

## Using Cloud9 and Zeit

If you don't already have a dev environment with node installed then for a quick-start I'd suggest using [Cloud9](https://c9.io/) you can be up and running in minutes with one of the pre made Node.js environments.

Note that in some regions you will be prompted to enter credit card information to use Cloud9 you will not be charged, there are other options to use like [Glitch](https://glitch.com) if you don't have a credit card.

## Node 13

If you're using a c9 environment then you'll need to upgrade `node` which I think comes pre-installed at version 10 which will cause some errors with the code in this repository, so we're going to go with version 13 for this, so, in the terminal:

```shell
nvm install 13 # install node 13
nvm use 13 # set it to use node 13
nvm alias default 13 # default to 13 so version persists after reboots
```

`nvm` stands for Node Version Manager which comes installed by default on c9 machines :+1:

## Set up the bot

In the project tree for the default c9 node application delete the example project files of `client`, `node_modules`, `package.json`, `README.md` and `server.js`. You won't need them, but you can leave them there if you so desire.

In your new Node.js c9 environment go to the terminal and enter:

```shell
git clone https://github.com/igmrrf/tweeter
```

## Project structure

The environment project tree will look something like this:

```text
tweeter/
├─ node_modules/
├─ src/
│  ├─ api
│  │  ├─ reply.js
│  │  └─ retweet.js
│  ├─ bot.js
│  ├─ config.js
│  └─ rando.js
├─ .env
├─ .gitignore
├─ LICENSE
├─ README.md
├─ index.js
├─ package-lock.json
└─ package.json
```

## Node dependencies

Before configuring the bot we'll need to install the dependencies, cd into the project folder with `cd tw*` in the terminal this will move you to `:~/workspace/tweeter (master) $` from the terminal enter:

```shell
npm install
```

This will install all the dependencies listed in the `package.json` file.

If you get an errors then I suggest installing the dependencies one by one from the `package.json` file with the same command and the package name at the end:

Here is an example of the `dependencies` in the `package,json` file:

```json
  "dependencies": {
    "console.lol": "0.1.2",
    "dotenv": "8.2.0",
    "twit": "2.2.11",
    "unique-random-array": "2.0.0"
  }
```

The npm command to install them all:

```shell
npm install --save dotenv twit unique-random-array snyk
```

Now you can configure the bot. From the terminal enter:

```shell
npm init
```

This will configure the `package.json` file with your details as desired. Just keep hitting return if you're happy with the defaults.

**Make a `.env` file:** make a file named `.env` do it with the terminal with the following command:

```shell
touch .env
```

This should be at the root of your project directory.

Now you'll need to add your Twitter keys to the `.env` file. Just input the keys in their corresponding fields and save the file.

The file structure should look as follows:

```
TWITTER_CONSUMER_KEY=
TWITTER_CONSUMER_SECRET=
TWITTER_ACCESS_TOKEN=
TWITTER_ACCESS_TOKEN_SECRET=

QUERY_STRING=my super awesome query string!,google,android

RANDOM_REPLY=Hi @${screenName} thanks for the follow! What are you working on today?|@${screenName} thanks for following! What are you working on today?

RESULT_TYPE=mixed
TWITTER_LANG=en

TWITTER_RETWEET_RATE=.1
TWITTER_SEARCH_COUNT=20
```

Note that `RANDOM_REPLY` is split with a pipe `|` and the `QUERY_STRING` is split by a comma `,` this is so that `RANDOM_REPLY` can have a comma in the reply text.

If you can not find the `.env` file in the file structure of your c9 project then you will need to enable the **`Show Hidden Files`** option. In the file view select the settings cog then tick the `Show Hidden Files` option if it is not already checked.

Add your API keys to the `.env` file :key:

The `.env` file is where we can configure our bot, here we set what we want to search on.

`QUERY_STRING` should be what you want to retweet tweets on with the search terms separated with commas. `RANDOM_REPLY` again is comma separated replies with the \${ScreenName} which is replaced when replying to the follower. `TWITTER_RETWEET_RATE` is in minutes.

> NOTE none of the `.env` items have quotes `''` round them or spaces between the key and the value `KEY=value`

```text
TWITTER_CONSUMER_KEY=Fw***********P9
TWITTER_CONSUMER_SECRET=TD************Cq
TWITTER_ACCESS_TOKEN=31**************UC
TWITTER_ACCESS_TOKEN_SECRET=r0************S2

QUERY_STRING=mango,horses,"donald -trump -duck"
RANDOM_REPLY=Hi @${screenName} thanks for the follow! What are you working on today?,@${screenName} thanks for following! What are you working on today?

RESULT_TYPE=mixed
TWITTER_LANG=en

TWITTER_RETWEET_RATE=120
TWITTER_SEARCH_COUNT=20
```

That should be it. Go to the terminal, enter `npm start` and you should get some output:

ROFL:ROFL:ROFL:ROFL
\_^**\_
L **/ [] \
LOL===** \ Bot starting...
L \_**\_\*\*\*\*]
I I
--------/

Check the Twitter account after the bot has successfully ran for a minute or two

You now have a tweet bot, if you want to have this deployed so it's not just running from your machine or from the c9 machine [which is against their terms of service] then we can go over that next.

## Deploy with now

Got your [Zeit account](https://zeit.co/login) set up? Now is the time if not, then install `now` from the terminal:

```shell
npm i -g now
```

Then `now` from the terminal and you will be prompted to enter your email, you will be sent a confirmation email, click the link and you're ready to go!

If you take a look at the `package.json` file in the `"scripts"` section you see there is one for `"deploy"` this is the command to deploy the bot to `now`, so from the terminal:

```shell
npm run deploy:now
```

This will use all our environment variables we defined within our `.env` file for use on the now servers.

You will get terminal output with a URL for where your bot is located, click the link and you can watch it get built.

## Handy tip

If you want to add this to your own GitHub repo and don't want to share your API keys :key: with the world then you should turn off tracking on the `.env` file. From the terminal enter this git command:

```shell
git update-index --assume-unchanged .env
```

## Using Text Editor and Heroku

If you already have a dev environment with node installed then just open your favourite Text editor which are [VsCode](https://vscode.com) or [Atom](https://atom.io).

## Node 13

Check your Node version if its up to 13 or greater. If it's lower then we are going to update it to version 13. For this, in the terminal run:

```shell
nvm install 13 // installs node 13

```

## Set up the bot

Go to your desire directory and in your terminal run:

```shell
git clone https://github.com/igmrrf/tweeter
```

## Project structure

The environment project tree will look something like this:

```text
tweeter/
├─ node_modules/
├─ src/
│  ├─ api
│  │  ├─ reply.js
│  │  └─ retweet.js
│  ├─ bot.js
│  ├─ config.js
│  └─ rando.js
├─ .env
├─ .gitignore
├─ LICENSE
├─ README.md
├─ index.js
├─ package-lock.json
└─ package.json
```

## Node dependencies

Before configuring the bot we'll need to install the dependencies, cd into the project folder with `cd tweeter` then run:

```shell
npm install
```

This will install all the dependencies listed in the `package.json` file.

If you get an errors then I suggest installing the dependencies one by one from the `package.json` file with the same command and the package name at the end:

Here is an example of the `dependencies` in the `package,json` file:

```json
  "dependencies": {
    "console.lol": "0.1.2",
    "dotenv": "8.2.0",
    "twit": "2.2.11",
    "unique-random-array": "2.0.0"
  }
```

The npm command to install them all:

```shell
npm install --save dotenv twit unique-random-array snyk
```

Now you can configure the bot. If you're experienced enough, edit the package.json file to fit your preference or from the terminal enter:

```shell
npm init
```

This will configure the `package.json` file with your details as desired. Just keep hitting return if you're happy with the defaults.

**Make a `.env` file:** make a file named `.env` do it with the terminal with the following command:

```shell
touch .env
```

This should be at the root of your project directory.

Now you'll need to add your Twitter keys to the `.env` file. Just input the keys in their corresponding fields and save the file.

The file structure should look as follows:

```
TWITTER_CONSUMER_KEY=
TWITTER_CONSUMER_SECRET=
TWITTER_ACCESS_TOKEN=
TWITTER_ACCESS_TOKEN_SECRET=

QUERY_STRING=my super awesome query string!,google,android

RANDOM_REPLY=Hi @${screenName} thanks for the follow! What are you working on today?|@${screenName} thanks for following! What are you working on today?

RESULT_TYPE=mixed
TWITTER_LANG=en

TWITTER_RETWEET_RATE=.1
TWITTER_SEARCH_COUNT=20
```

Note that `RANDOM_REPLY` is split with a pipe `|` and the `QUERY_STRING` is split by a comma `,` this is so that `RANDOM_REPLY` can have a comma in the reply text.

If you can not find the `.env` file in the file structure of your c9 project then you will need to enable the **`Show Hidden Files`** option. In the file view select the settings cog then tick the `Show Hidden Files` option if it is not already checked.

Add your API keys to the `.env` file :key:

The `.env` file is where we can configure our bot, here we set what we want to search on.

`QUERY_STRING` should be what you want to retweet tweets on with the search terms separated with commas. `RANDOM_REPLY` again is comma separated replies with the \${ScreenName} which is replaced when replying to the follower. `TWITTER_RETWEET_RATE` is in minutes.

> NOTE none of the `.env` items have quotes `''` round them or spaces between the key and the value `KEY=value`

```text
TWITTER_CONSUMER_KEY=Fw***********P9
TWITTER_CONSUMER_SECRET=TD************Cq
TWITTER_ACCESS_TOKEN=31**************UC
TWITTER_ACCESS_TOKEN_SECRET=r0************S2

QUERY_STRING=mango,horses,"donald -trump -duck"
RANDOM_REPLY=Hi @${screenName} thanks for the follow! What are you working on today?,@${screenName} thanks for following! What are you working on today?

RESULT_TYPE=mixed
TWITTER_LANG=en

TWITTER_RETWEET_RATE=120
TWITTER_SEARCH_COUNT=20
```

That should be it. Go to the terminal, enter `npm start` and you should get some output:

ROFL:ROFL:ROFL:ROFL
\_^**\_
L **/ [] \
LOL===** \ Bot starting...
L \_**\_\*\*\*\*]
I I
--------/

Check the Twitter account after the bot has successfully ran for a minute or two

## Deploy with Heroku

Got your [Heroku Account](https://heroku.com/login) set up? Now is the time, install `heroku-cli` from the terminal:

```shell
npm i -g heroku-cli
```

Then `heroku login` from the terminal and you will be prompted to enter your email and password, or a new window will pop up from your browser where you'll login and be redirected back to yur Text editor or Terminal.

Then `heroku create`, it'll create an heroku app for you with a random name like catfish-streams

To move ahead create a new git repository by running:

```shell
git init
heroku git:remote -a catfish-streams //replace the catfish-streams with your app name
git add . // dot means it should add all new files
git commit -m "Initial Deploy"
```

If you take a look at the `package.json` file in the `"scripts"` section you see there is one for `"deploy:heroku"` this is the command to deploy the bot to `heroku`, so from the terminal:

```shell
npm run deploy:heroku
```

This will use all our environment variables we defined within our `.env` file for use on the now servers.

You will get terminal output with a URL for where your bot is located, click the link and you can watch it get built.

## Handy tip

If you want to add this to your own GitHub repo and don't want to share your API keys :key: with the world then you should turn off tracking on the `.env` file. From the terminal enter this git command:

```shell
git update-index --assume-unchanged .env
```

## License

MIT License

Copyright (c) 2020, The Lazy Dev Otaku. All rights reserved.

### The Original Author: [Scott Spencer](https://github.com/spences10/)

[cheetsheets]: https://github.com/spences10/cheat-sheets/blob/master/git.md
