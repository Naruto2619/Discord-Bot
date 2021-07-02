require('dotenv').config({path:__dirname+'/.env'})
const Discord = require('discord.js');
const client = new Discord.Client()
const keepAlive = require("./server");

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.on("voiceStateUpdate",(oldstate,newstate)=>{
  if(newstate.channelID === "730133743242575913"){
  const user = client.users.fetch(newstate.id);
  const member = newstate.member;
  member.roles.add("859740424881045504").catch(console.error);
  }
  });

keepAlive()
client.login(process.env.TOKEN);