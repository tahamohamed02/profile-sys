require("events").EventEmitter.defaultMaxListeners = 200;
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

////بكجات
const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const client = new Client({ disableEveryone: true });
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss");
const fetchVideoInfo = require("youtube-info");
const botversion = require("./package.json").version;
const simpleytapi = require("simple-youtube-api");
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat");
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyAXaeBh837k38o_lwSADet8UTO7X21DGsY"); //تعديل اساسي سوي اي بي اي جديد
const hastebins = require("hastebin-gen");
const getYoutubeID = require("get-youtube-id");
const yt_api_key = "AIzaSyAXaeBh837k38o_lwSADet8UTO7X21DGsY"; ///تعديل اساسي سوي اي بي اي جديد
const pretty = require("pretty-ms");
client.login(process.env.TOKEN);
const queue = new Map();
var table = require("table").table;
const prefix = ".";
const Discord = require("discord.js");
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", message => {
  let args = message.content.split(" ").slice(1);
  if (message.content.split(" ")[0] == prefix + "color") {
    const embedd = new Discord.RichEmbed()
      .setFooter(
        "Requested by " + message.author.username,
        message.author.avatarURL
      )
      .setDescription(`**There's No Color With This Number ** :x: `)
      .setColor(`ff0000`);
    if (!args[0]) return message.channel.sendEmbed(embedd);
    if (isNaN(args[0]))
      return message.channel.sendEmbed(
        embedd.setDescription("Please select a number :x:")
      );
    if (!message.guild.roles.find("name", `${args[0]}`))
      return message.channel.sendEmbed(embedd);

    var a = message.guild.roles.find("name", `${args[0]}`);
    if (!a) return;
    if (a.hasPermission(8))
      return message.channel.send(
        embedd.setDescription("This color has administrator!")
      );
    const embed = new Discord.RichEmbed()

      .setFooter(
        "Requested by " + message.author.username,
        message.author.avatarURL
      )
      .setDescription(`**Color Changed To Successfully** :white_check_mark: `)

      .setColor(`${a.hexColor}`);
    message.channel.sendEmbed(embed);
    if (!args[0]) return;
    setInterval(function() {});
    let count = 0;
    let ecount = 0;
    for (let x = 1; x < 201; x++) {
      message.member.removeRole(message.guild.roles.find("name", `${x}`));
    }
    message.member.addRole(message.guild.roles.find("name", `${args[0]}`));
  }
});






client.on("message", message => {
  if (!message.guild || message.author.bot) return;
  if (message.content == prefix + "colors") {
    var fsn = require("fs-nextra");
    fs.readdir("./colors", async (err, files) => {
      var f = files[Math.floor(Math.random() * files.length)];
      var { Canvas } = require("canvas-constructor");
      var x = 0;
      var y = 0;
      if (message.guild.roles.filter(role => !isNaN(role.name)).size <= 0)
        return;
      message.guild.roles
        .filter(role => !isNaN(role.name))
        .sort((b1, b2) => b1.name - b2.name)
        .forEach(() => {
          x += 100;
          if (x > 100 * 12) {
            x = 100;
            y += 80;
          }
        });
      var image = await fsn.readFile(`./colors/${f}`);
      var xd = new Canvas(100 * 11, y + 350)
        .addBeveledImage(image, 0, 0, 100 * 11, y + 350, 100)
        .setTextBaseline("middle")
        .setColor("white")
        .setTextSize(70)
        .addText(`قائمة ألوان`, 375, 60);
      x = 0;
      y = 150;
      message.guild.roles
        .filter(role => !isNaN(role.name))
        .sort((b1, b2) => b1.name - b2.name)
        .forEach(role => {
          x += 75;
          if (x > 100 * 10) {
            x = 75;
            y += 80;
          }
          xd.setTextBaseline("middle")
            .setTextAlign("center")
            .setColor(role.hexColor)
            .addBeveledRect(x, y, 60, 60, 15)
            .setColor("white");
          if (`${role.name}`.length > 2) {
            xd.setTextSize(30);
          } else if (`${role.name}`.length > 1) {
            xd.setTextSize(40);
          } else {
            xd.setTextSize(50);
          }
          xd.addText(role.name, x + 30, y + 30);
        });
      message.channel.sendFile(xd.toBuffer());
    });
  }
});




const { User, MessageMentions } = require('discord.js') 
const SQLite = require('sqlite');  
 const path = require('path');
const Canvas = require("canvas","canvas-constructor");

const devs = ["554553279003099146"]
const ids = ["554553279003099146"]

SQLite.open(path.join(__dirname, 'profile.db')).then(() => {
SQLite.run(`CREATE TABLE IF NOT EXISTS profileSystem (id VARCHAR(30), credits BIGINT, lastDaily BIGINT, xp BIGINT, level BIGINT, rep BIGINT, lastRep BIGINT,info TEXT)`)}).catch(err => console.error(err))
let funcs = {generateInt: (low, high) => {return Math.floor(Math.random() * (high - low + 1) + low);},getLevelFromExp: (exp) => {let level = 0;
while (exp >= funcs.getLevelExp(level)) {exp -= funcs.getLevelExp(level);level++;}return level;},
getLevelExp: (level) => {return 5 * (Math.pow(level, 2)) + 50 * level + 100;}}
client.on('message', async msg => {
if(!msg.channel.guild) return;
SQLite.get(`SELECT * FROM profileSystem WHERE id = '${msg.author.id}'`).then(res => {var s;let xp = funcs.generateInt(1, 5);
if(!res) s = `INSERT INTO profileSystem VALUES ('${msg.author.id}', 1, 0, ${xp}, 0, 0, 0, "")`
if(res) {xp = res.xp + xp;
let level = funcs.getLevelFromExp(xp);let lvl = res.level;
/*if(res.level != level) {
lvl++;
msg.channel.send('Level UP!, ' + msg.author + ' just reached level ' + level)} */

s = `UPDATE profileSystem SET xp = ${xp}, level = ${lvl} WHERE id = '${msg.author.id}'`}SQLite.run(s);}).catch(err => console.error(err))
if(!msg.content.startsWith(prefix)) return undefined;let args = msg.content.split(' ');
if(args[0].toLowerCase() == `${prefix}coin` || args[0].toLowerCase() === `${prefix}coins`) {let xp = funcs.generateInt(1, 5);
const mention = msg.mentions.users.first() || client.users.get(args[1]) || msg.author;const mentionn = msg.mentions.users.first() || client.users.get(args[1]);
if(blacklist[client.user.id + msg.author.id]) return msg.channel.send(`:disappointed: **You are blacklisted from using this bot . **`)
let res = await SQLite.get(`SELECT * FROM profileSystem WHERE id = '${mention.id}'`)
if(!res) SQLite.run(`INSERT INTO profileSystem VALUES ('${mention.id}', 1, 0, ${xp}, 0, 0, 0, ""`)
let credits;if(!res) credits = 0;else credits = res.credits;
let resOfAuthor = await SQLite.get(`SELECT * FROM profileSystem WHERE id = '${msg.author.id}'`)
if(!resOfAuthor) SQLite.run(`INSERT INTO profileSystem VALUES ('${msg.author.id}', 1, 0, ${xp}, 0, 0, 0, ""`)
let creditsOfAuthor = resOfAuthor.credits;
if(!args[2]){msg.channel.send(`:money_mouth: **${mention.username} Your Current Coins is \`$${credits}\` .**`)}else if(mentionn && args[2]) {
if(args[2] < 1) return msg.channel.send(``);if(mention.bot) return msg.channel.send(`:no_mouth: **you cann'ot give coins to bot . **`);if(mentionn.id === msg.author.id) return msg.channel.send(`:no_mouth: **you cann'ot give coins to yourself . **`);
if(args[2].includes("-")) return msg.channel.send(``);if(args[2].includes(".")) return msg.channel.send(`:no_mouth: **you cann'ot give coins to bot . **`);
let resOfMen = await SQLite.get(`SELECT * FROM profileSystem WHERE id = '${mentionn.id}'`);
if(!resOfMen) SQLite.run(`INSERT INTO profileSystem VALUES ('${mentionn.id}', 1, 0, ${xp}, 0, 0, 0, ""`)
let creditsOfMen = resOfMen.credits;
if(isNaN(args[2])) return msg.channel.send(`:no_mouth: **Please write the right number Of coins to send . **`);if(args[2] > creditsOfAuthor) return msg.channel.send(`:no_mouth: **You do not have this number of coins . **`);
let first = Math.floor(Math.random() * 9);let second = Math.floor(Math.random() * 9);let third = Math.floor(Math.random() * 9);let fourth = Math.floor(Math.random() * 9);let num = `${first}${second}${third}${fourth}`;
let canvas = Canvas.createCanvas(150 , 50)
let ctx = canvas.getContext('2d');
const background = await Canvas.loadImage("https://cdn.discordapp.com/attachments/987806399683776585/1000118272261378128/unknown.png");
ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
let url = msg.author.displayAvatarURL.endsWith(".webp") ? msg.author.displayAvatarURL.slice(5, -20) + ".gif" : msg.author.displayAvatarURL;
jimp.read(url, (err, ava) => {if(err) return console.log(err);ava.getBuffer(jimp.MIME_PNG, (err, buf) => {if(err) return console.log(err);
ctx.font = "20px Arial";ctx.fontSize = "20px";ctx.fillStyle = "#FFFFFF";
msg.channel.send(`**${msg.author.username} ,** If you are ready to send \`$${args[2]}\` coins to **${mentionn}** , write the number below`).then(essss => {
ctx.fillText(num, canvas.width / 3.0, canvas.height / 1.6);
msg.channel.sendFile(canvas.toBuffer()).then(m => {msg.channel.awaitMessages(r => r.author.id === msg.author.id, { max: 1, time: 60000, errors:['time'] }).then(collected => {if(collected.first().content === num) {
client.channels.get("987806399683776585").send(`
ــــــــــــــــــــــــــــــــــــــــــــــــــــ
**The sender : ${msg.author.username} | (\`${msg.author.id}\`)
to : ${mentionn.username} | ( \`${mentionn.id}\`)
the amount : \`$${args[2]}\` **
ــــــــــــــــــــــــــــــــــــــــــــــــــــ`);
msg.channel.send(`**:moneybag: ${msg.author.username},** transferred \`$${args[2]}\` Coins to **${mentionn.username} ( ${mentionn.id} ) .**`);
mention.send(`:moneybag: **Successful Operation .**
**Done transfer for you \`$${args[2]}\` Coins from ${msg.author.username} ( ${msg.author.id} )**`);
m.delete();
let newAuthorCredits = (creditsOfAuthor - parseInt(args[2]));
let newMenCredits = (creditsOfMen + parseInt(args[2]));
SQLite.run(`UPDATE profileSystem SET credits = ${newAuthorCredits} WHERE id = '${msg.author.id}'`);
SQLite.run(`UPDATE profileSystem SET credits = ${newMenCredits} WHERE id = '${mentionn.id}'`);}else{m.delete();
essss.delete();}})})})})})}else{msg.channel.send(``);}}else 
if(msg.content.startsWith(prefix + "daily")){
  if(blacklist[client.user.id + msg.author.id]) return msg.channel.send(`:disappointed: **You are blacklisted from using this bot . **`)
let daily = 86400000;let xp = funcs.generateInt(1, 5);let amount = funcs.generateInt(257,1101);
let res = await SQLite.get(`SELECT * FROM profileSystem WHERE id = '${msg.author.id}'`)
if(!res) SQLite.run(`INSERT INTO profileSystem VALUES ('${msg.author.id}', 1, 0, ${xp}, 0, 0, 0, ""`)
let curDaily = res.lastDaily;let credits = res.credits;if(curDaily != null && daily - (Date.now() - curDaily) > 0) {let timeObj = ms(daily - (Date.now() - curDaily));
msg.channel.send(`** 🕑 You've already get the daily coins , it try again at \`${timeObj.hours} Hours, ${timeObj.minutes} Minutes and ${timeObj.seconds} Seconds.\` **`)}else{msg.channel.send(`** :moneybag: ${msg.author.username} You're got \`\`$${amount}\`\` daily Coins .**`);
SQLite.run(`UPDATE profileSystem SET credits = ${credits + amount}, lastDaily = ${Date.now()} WHERE id = '${msg.author.id}'`);}}
    });

client.on('message',async message => {
   
if(!message.channel.guild) return;
if(message.author.bot || message.channel.type === 'dm' || !message.content.startsWith(prefix)) return;let args = message.content.split(" ").slice(1);let cmd = message.content.split(" ")[0].substring(prefix.length);let xp = funcs.generateInt(1, 5); 
if(cmd === "note") {let december = args.join(" ");if(message.mentions.users.size >= 1) return;
if(blacklist[client.user.id + message.author.id]) return message.channel.send(`:disappointed: **You are blacklisted from using this bot . **`)
if(december.length < 1) return message.channel.send(`:no_mouth: **Write your note before send .**`)
if(december.length > 29) return message.channel.send(`:no_mouth: **You cannot type more than 29 characters .**`)
let res = await SQLite.get(`SELECT * FROM profileSystem WHERE id = '${message.author.id}'`);if(!res) SQLite.run(`INSERT INTO profileSystem VALUES ('${message.author.id}', 1, 0, ${xp}, 0, 0, 0, ""`)
SQLite.run(`UPDATE profileSystem SET info = "${december}" WHERE id = '${message.author.id}'`)
message.react('✅')}})
client.on('message',async msg => {
if(!msg.channel.guild) return;
if(msg.content.startsWith (prefix + "rep"))
  
{let rep = 86400000;let xp = funcs.generateInt(1, 5);let men = msg.mentions.users.first();
  if(blacklist[client.user.id + msg.author.id]) return msg.channel.send(`:disappointed: **You are blacklisted from using this bot . **`)
if(!men) return msg.channel.send(`:no_mouth: **${msg.author.username},** i don't see this member !`);
if(men.id === msg.author.id) return msg.channel.send('😶 **You cann\'ot give Reputation to yourself.**');
if(men.bot) return msg.channel.send('😶 **You cann\'ot give bots Reputation . **')
let resOfMen = await SQLite.get(`SELECT * FROM profileSystem WHERE id = '${men.id}'`);
let resOfAuthor = await SQLite.get(`SELECT * FROM profileSystem WHERE id = '${msg.author.id}'`)
if(!resOfMen) SQLite.run(`INSERT INTO profileSystem VALUES ('${men.id}', 1, 0, 0, 0, 0, 0, "")`)
if(!resOfAuthor) SQLite.run(`INSERT INTO profileSystem VALUES ('${msg.author.id}', 1, 0, ${xp}, 0, 0, 0, ""`)
let curRep = resOfAuthor.lastRep;if(curRep != null && rep - (Date.now() - curRep) > 0) {let timeObj = ms(rep - (Date.now() - curRep));
msg.channel.send(`:clock4: **| You already gived your Reputation point to someone, try again after** \`${timeObj.hours} Hours, ${timeObj.minutes} Minutes and ${timeObj.seconds} Seconds.\` `)}else{
msg.channel.send(`:up: **${msg.author.username} ,** Was given a Reputation point to **${men} ** !`)
SQLite.run(`UPDATE profileSystem SET lastRep = ${Date.now()} WHERE id = '${msg.author.id}'`)
SQLite.run(`UPDATE profileSystem SET rep = ${resOfMen.rep + 1} WHERE id = '${men.id}'`)}}
  
if(msg.content.startsWith ("+coins")) {
if(!ids.includes(msg.author.id)) return;
let men = msg.mentions.users.first() || msg.author;
let args = msg.content.split(" ").slice(1);let res = await SQLite.get(`SELECT * FROM profileSystem WHERE id = '${men.id}'`);
if(!res) SQLite.run(`INSERT INTO profileSystem VALUES ('${men.id}', 200, 0, 0, 0, 0, 0, "")`)
let resu;
if(men.id === msg.author.id && !msg.mentions.users.first()) resu = args[0];
else resu = args[1];
if(!resu || isNaN(resu)) return msg.channel.send(':no_mouth: **Please specify the amount of coins first ,**');
SQLite.run(`UPDATE profileSystem SET credits = ${res.credits + parseInt(resu)} WHERE id = '${men.id}'`)
msg.channel.send(`:slight_smile: **Done Added \`$${args[1]}\` Coins to ${men} , (${men.id})**`)}else 
if(msg.content.startsWith ("+rep")) {
  
let args = msg.content.split(" ").slice(1);
if(!ids.includes(msg.author.id)) return;let men = msg.mentions.users.first() || msg.author;
let res = await SQLite.get(`SELECT * FROM profileSystem WHERE id = '${men.id}'`);
if(!res) SQLite.run(`INSERT INTO profileSystem VALUES ('${men.id}', 200, 0, 0, 0, 0, 0, "")`)
let resu;
if(men.id === msg.author.id && !msg.mentions.users.first()) resu = args[0];
else resu = args[1];
if(!resu || isNaN(resu)) return msg.channel.send(':no_mouth: **Please specify how much you want to add rep , **');
SQLite.run(`UPDATE profileSystem SET rep = ${res.rep + parseInt(resu)} WHERE id = '${men.id}'`)
msg.channel.send(`:slight_smile: ** Done Added \`+${args[1]}\` Reputation to ${men} , (${men.id})**`)}
  });
client.on("message",async message => {let xp = funcs.generateInt(1, 5);
if(!message.channel.guild) return;
let args = message.content.split(' ');
const getvalueof = message.mentions.users.first() || client.users.get(args[1]) || message.author;
if (message.content.startsWith(prefix + "profile")) {
  if(blacklist[client.user.id + message.author.id]) return message.channel.send(`:disappointed: **You are blacklisted from using this bot . **`)
let res = await SQLite.get(`SELECT * FROM profileSystem WHERE id = ${getvalueof.id}`)
if(!res) SQLite.run(`INSERT INTO profileSystem VALUES ('${getvalueof.id}', 1, 0, ${xp}, 0, 0, 0, ""`)
let Image = Canvas.Image,canvas = Canvas.createCanvas(307, 300),ctx = canvas.getContext('2d');
const rg = ["./profile.png", "./1profile.png","./2profile.png","./3profile.png","./4profile.png","./5profile.png","./6profile.png","./7profile.png","./8profile.png"];
fs.readFile(`${rg[Math.floor(Math.random() * rg.length)]}`, function (err, Background) {  
if (err) return console.log(err);let BG = Canvas.Image;let ground = new Image;ground.src = Background;ctx.drawImage(ground, 0, 0, 307, 300);})/// PHOTO SIZE
let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
jimp.read(url, (err, ava) => {if (err) return console.log(err);
ava.getBuffer(jimp.MIME_PNG, async( err, buf) => {if (err) return console.log(err);
ctx.font = 'Arial 23px profile';ctx.fontSize = '62px'; ctx.fillStyle = "#fff";ctx.textAlign = "center"; ctx.fillText(`${getvalueof.username}`, 154, 178)/////USERNAME
let leaderboard = await SQLite.all(`SELECT * FROM profileSystem ORDER BY xp DESC, credits DESC`);
ctx.font = "20px Arial";ctx.fontSize = '20px';ctx.fillStyle = "#FFFFFF";ctx.textAlign = "center";////RANK
for(var i = 0;i<leaderboard.length;i++) {if(leaderboard[i].id == getvalueof.id) {ctx.fillText(`#${i+1}`, 52, 134)}}///RANK
ctx.font = "20px Arial";ctx.fontSize = '20px';ctx.fillStyle = '#FFFFFF'; ctx.textAlign = "center";ctx.fillText(`${res.credits}`, 254 , 134)////credits
ctx.font = "20px Arial";ctx.fontSize = '10px';ctx.fillStyle = "#FFFFFF";ctx.textAlign = "center";ctx.fillText(`${res.level}`, 253, 71)
ctx.font = "20px Arial";ctx.fontSize = "20px";ctx.fillStyle = "#FFFFFF";ctx.textAlign = "center";ctx.fillText(`${res.rep}`, 54,71);///REPS
ctx.font = "18px Arial";ctx.fontSize = "18px";ctx.fillStyle = "#FFFFFF";ctx.textAlign = "center";ctx.fillText(`${res.info}`,151,266)
//  الاكس بي //ctx.font = "15px Arial";ctx.fontSize = '15px'; ctx.fillStyle = "#FFFFFF"; ctx.textAlign = "center";ctx.fillText(`${res.xp}`, 130, 270)////XP
 
                                                  
                               
                                                  
let Avatar = Canvas.Image;let ava = new Avatar;
ava.src = buf;ctx.beginPath(); ctx.arc(153.5, 85.5, 50, 0, Math.PI*2, true); ctx.clip();ctx.drawImage(ava, 100, 34, 110, 110);
message.channel.startTyping();message.channel.sendFile(canvas.toBuffer());message.channel.stopTyping();});});}})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////// Black List Code ////////////////////

const developers = ["554553279003099146"]
const blacklist = JSON.parse(fs.readFileSync('./blacklist.json', 'utf8'));
client.on('message',message=>{
  var prefix = "";
if(message.author.bot)return
if (!developers.includes(message.author.id)) return;
if(message.content.startsWith(prefix + "+black list")) {
let args = message.content.split(" ")[2]
var user = client.users.get(args)
if(!user)return message.channel.send(':no_mouth: **Please write id member . **')
if(user.id == message.author.id || user.id == client.user.id) return message.channel.send(`:no_mouth: You Cann'ot Add **${user} (${user.id}) ,** To the Blacklisted .`)
if(blacklist[client.user.id+user.id]) return message.channel.send(`:no_mouth: **(${user.id})** It is already blacklisted . `)
blacklist[client.user.id+user.id] = {};
message.channel.send("**:slight_smile: Done Add " + `${user}` +" "+ `(${user.id})` +" to Blacklistd .**")
saveblacklist() 
} else if(message.content.startsWith(prefix + "-blacklist all")){
client.users.forEach(m => {
  delete blacklist[client.user.id + m.id];
}) 
message.channel.send(":slight_smile: **All Blacklistd Has Removed ,**")
} else if(message.content.startsWith(prefix + "-black list")) {
  let user = message.content.split(" ")[2]
  if(!user) return message.channel.send(":no_mouth: **Please write id member . **")
  if(!blacklist[client.user.id+user])return message.channel.send(`:no_mouth: i don't see **(${user})** in the blacklist .`)
  delete blacklist[client.user.id+user];
message.channel.send("**:slight_smile: Done Removed " + `<@${user}>` +" Form Blacklistd .**")
  
} else   
  if (message.content.startsWith(prefix + ".blacklist")) {
const blacklistss = [];
client.users.forEach(m => {
if(!blacklist[client.user.id + m.id]) return
blacklistss.push(`<@${m.id}>`);
});
let MS = blacklistss.join("\n")
let embed = new Discord.RichEmbed()
.setAuthor(message.author.tag , message.author.avatarURL)
.setTitle('**People in the blacklist**')
.setDescription(`${MS} `)
.setColor('#ff0303')
message.channel.send(embed) 
  }
  })

function saveblacklist() {
    fs.writeFileSync("./blacklist.json", JSON.stringify(blacklist, null, 4))
}

////////////////// end Black List Code ////////////////////
