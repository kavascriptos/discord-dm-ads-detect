const { Client, MessageEmbed, WebhookClient } = require('discord.js-selfbot-v13');
const { userToken, webhookLink, statusTexts, ignoreMessagesWithoutLink, alertEmbedBody } = require('./config');
const package = require('./package.json');
const bot = new Client();


const webhook = new WebhookClient({url: webhookLink});

const linkRegex = /(https?:\/\/[^\s]+)/gi;

bot.on('ready', async () => {
  console.log(`
  Discord DM Ads Detector
  Author : ${package.author}
  Version : ${package.version}

  There's no need to do something. invite a user, get its "token" by this tutorial :

  then put it in config.json.
  also include a valid webhook link in that file.
  `)
  console.log(`${bot.user.username}#${bot.user.discriminator} is Online, make sure nobody knows this is a selfbot!`);

  //! DO NOT ADD SOMETHING TO THIS ARRAY
  const statuses = ["dnd", "online", "idle"];

  bot.user.setPresence({ 
    activities: [{name: statusTexts[Math.floor(Math.random() * statusTexts.length)], type: "PLAYING"}],
    status: statuses[Math.floor(Math.random() * statuses.length)] 
  });



});

bot.on("messageCreate", async (message) => {
    
    if(message.author.bot) return;
    if(message.channel.type !== "DM") return;
    if(linkRegex.test(message.content) && ignoreMessagesWithoutLink === true) return;

    const embedFields = [
        { name: `☠️ | **User Info**`, value: `Fullname: **${message.author.username}#${message.author.discriminator}**\nUser ID : **${message.author.id}**\n Message sent <t:${message.createdTimestamp}:R>`, inline: false },
        { name: `💬 | **Message Content**`, value: `${message.content}`, inline: false },
    ];

    if(linkRegex.test(message.content) === true) embedFields.push(
        { name: `🪝 | **Includes Links?**`, value: `\`TRUE\``, inline: false },
        { name: `💢 | **Links Info**`, value: `Message includes **${message.content.match(linkRegex).length}** links.\nList of links: ${message.content.match(linkRegex).join('\n')}`, inline: false },
    )

    const alertEmbed = new MessageEmbed()
    .setColor(alertEmbedBody.embedColor)
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    .setDescription(`Source Version : **${package.version}**`)
    .setAuthor({name: package.author, iconURL: alertEmbedBody.icon, url: webhookLink})
    .addFields(...embedFields)
    .setFooter({ name: alertEmbedBody.footer.replace(/{botName}/gi, `${bot.user.username}#${bot.user.discriminator}`), iconURL: alertEmbedBody.icon });

    webhook.send({content: alertEmbedBody.messageContent, embeds: [alertEmbed]}).catch((e) => {
        console.log(`ERROR at sending webhook : ${e}`)
    });


})



try {
    bot.login(userToken);
} catch (error) {
    console.log(`ERROR at login : ${error}`)
}