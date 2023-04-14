
module.exports = {
    userToken: "MTA3MDI2NTI5ODc5NzcyNzc4NQ.G85uB3.mX3mtb0PoXhpdLVaGVdsu-v14o02wPtAgR3lho",
    webhookLink: "https://discord.com/api/webhooks/1096468885991075890/-BgV_ybsyUBnFiNU6mjdQYrYVe6sFCbkAx_U4ZQKBPlhBVpgRvyrY9wBfhA_g75Y1tpF",
    statusTexts: ["پدرت!"],
    //Set this false if you want to recive ALL messages sent to this account. (Without links)
    ignoreMessagesWithoutLink: true,

    //Default set to get author name and version from package.json, but if you want a little bit of customization, edit them.
    alertEmbedBody: {
        //if you wanna mention someone when a user reported or simply wanna a description on your embed edit it;
        //? role mention example : <@&ROLE_ID> replace ROLE_ID with your role's id
        //* also you can use {userId} for user id, {userFull} for user fullname and {timestamp} for message sent relative time
        messageContent: `\u200b`,
        //you should set a hex color
        embedColor: "RANDOM",
        footer: `Reporter : {botName}`,
        icon: ``
    },

    webhook: {
        overrideName: `DM Ads Reporters`,
        overrideIcon: ``
    }
}