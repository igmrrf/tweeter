// listen on port so now.sh likes it
const { createServer } = require("http");

// bot features
// due to the Twitter ToS automation of likes
// is no longer allowed, so:
const Twit = require("twit");
const config = require("./config");
const consoleLol = require("console.lol");

const bot = new Twit(config.twitterKeys);

const retweet = require("./api/retweet");
const reply = require("./api/reply");

console.rofl("Bot starting...");

// retweet on keywords
retweet();
setInterval(retweet, config.twitterConfig.retweet);

// reply to new follower
var userStream = bot.stream("statuses/filter", { track: "@igmrrf" });
userStream.on("follow", reply);

// This will allow the bot to run on now.sh
const server = createServer((req, res) => {
    res.writeHead(302, {
        Location: `https://twitter.com/${config.twitterConfig.username}`,
    });
    res.end();
});
const PORT = process.env.PORT || 3000;
server.listen(PORT);
