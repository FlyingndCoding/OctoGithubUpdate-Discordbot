const keepAlive = require("./keepAlive.js");
const express = require('express');
const Github = require("gitcord")
// const TOKEN =require('./config')
const Discord = require("discord.js")
const client = new Discord.Client();
const github = new Github("MrVenomYT", { token: "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", gitall: true })
github.setup()

client.on("ready", () => {
  console.log("Connected to the discord, now ready for fight :D")
})

github.on("newEvent", (embed) => {
  client.channels.cache.get("886502300363935744").send({embed})
})
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () =>
	console.log(`Example app listening at http://localhost:${port}`)
);


client.on('ready', () => {
	
    console.log(client.user.tag + " has logged in.");
 client.user
      .setPresence({
        activity: {
          name: `Github Updates`,
          type: "WATCHING",
        },
        status: "online",
      })

      .catch(console.error);
  
});

keepAlive();
client.login(process.env.TOKEN)