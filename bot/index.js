require('dotenv').config({path:__dirname+'/.env'})
const Discord = require('discord.js');
const client = new Discord.Client()
const keepAlive = require("./server");

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.on("voiceStateUpdate",(oldstate,newstate)=>{
  const user = client.users.fetch(newstate.id);
  const member = newstate.member;
  var role= member.guild.roles.cache.find(role => role.name === "FlagShipStedier");
  member.roles.add(role).catch(console.error);
  });

keepAlive()
client.login(process.env.TOKEN);