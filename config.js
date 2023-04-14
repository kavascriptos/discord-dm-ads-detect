
module.exports = {
    // don't use a BOT token (i didn't test it to see what happens.)
    userToken: "",
    webhookLink: "",
    statusTexts: ["پدرت!"],
    //Set this false if you want to recive ALL messages sent to this account. (Without links)
    ignoreMessagesWithoutLink: true,

    //Default set to get author name and version from package.json, but if you want a little bit of customization, edit them.
    alertEmbedBody: {
        //if you wanna mention someone when a user reported or simply wanna a description on your embed edit it.
        //? role mention example : <@&ROLE_ID> replace ROLE_ID with your role's id
        messageContent: `\u200b`,
        //you should set a hex color
        embedColor: "RANDOM",
        footer: `Reporter : {botName}`,
        icon: `https://raw.githubusercontent.com/TheKawasaki/discord-dm-ads-detect/main/assets/Defualt_Icon.png`
    },

    webhook: {
        overrideName: `DM Ads Reporters`,
        overrideIcon: `https://raw.githubusercontent.com/TheKawasaki/discord-dm-ads-detect/main/assets/Defualt_Icon.png`
    }
}