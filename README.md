## 😃 About this source

<strong>A selfbot for detecting who sends invite links to your users</strong>


### Requirements :
- latest [Node.js](https://nodejs.org)
- little knowledge about javascript
- a Discord USER token. (tutorial [below](#get-token-))



<strong>I don't take any responsibility for blocked/banned Discord accounts that used this source.</strong>
<strong>Using this on a user account is prohibited by the [Discord TOS](https://discord.com/terms) and can lead to the account block.
</strong>

⚠️ Highly recommended to use on a new discord user.





## Get Token ?

<strong>Run code (Discord Console - [Ctrl + Shift + I])</strong>

```js
window.webpackChunkdiscord_app.push([
  [Math.random()],
  {},
  req => {
    for (const m of Object.keys(req.c)
      .map(x => req.c[x].exports)
      .filter(x => x)) {
      if (m.default && m.default.getToken !== undefined) {
        return copy(m.default.getToken());
      }
      if (m.getToken !== undefined) {
        return copy(m.getToken());
      }
    }
  },
]);
console.log('%cWorked!', 'font-size: 50px');
console.log(`%cYou now have your token in the clipboard!`, 'font-size: 16px');
```

Credit: <img src="https://cdn.discordapp.com/emojis/889092230063734795.png" alt="." width="16" height="16"/> [<strong>hxr404</strong>](https://github.com/hxr404/Discord-Console-hacks)



## Installation

**Node.js 16.6.0 or newer is required**

> Recommended Node.js version: 18 (LTS)

Complete `config.js` before running otherwise it'll crash!


Then run these commands and enjoy!
```sh-session
npm install
node .
```






# By Thekawasaki. Feel free to copy, paste, use and change.
## ⭐ Don't forget to star!