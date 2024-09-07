// listen on port so now.sh likes it
import { createServer } from "node:http";

// bot features
// due to the Twitter ToS automation of likes
// is no longer allowed, so:
import Twit from "twit";
import config from "./config";

const bot = new Twit(config.twitterKeys);

import retweet from "./api/retweet";
const reply = require("./api/reply");

console.log("Bot starting...");

// retweet on keywords
retweet();
setInterval(retweet, config.twitterConfig.retweet);

// reply to new follower
const userStream = bot.stream("statuses/filter", { track: "@igmrrf" });
userStream.on("follow", reply);

// This will allow the bot to run on now.sh
const server = createServer((req: Request, res: Response) => {
	res.writeHead(302, {
		Location: `https://twitter.com/${config.twitterConfig.username}`,
	});
	res.end();
});
const PORT = process.env.PORT || 3000;

server.listen(PORT);
