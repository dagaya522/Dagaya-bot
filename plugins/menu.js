const { readEnv } = require("../lib/database");
const { cmd, commands } = require("../command");

cmd(
  {
    pattern: "menu",
    alise: ["getmenu"],
    desc: "get cmd list",
    category: "main",
    filename: __filename,
  },
  async (
    robin,
    mek,
    m,
    {
      from,
      quoted,
      body,
      isCmd,
      command,
      args,
      q,
      isGroup,
      sender,
      senderNumber,
      botNumber2,
      botNumber,
      pushname,
      isMe,
      isOwner,
      groupMetadata,
      groupName,
      participants,
      groupAdmins,
      isBotAdmins,
      isAdmins,
      reply,
    }
  ) => {
    try {
      const config = await readEnv();
      let menu = {
        main: "",
        download: "",
        group: "",
        owner: "",
        convert: "",
        search: "",
      };

      for (let i = 0; i < commands.length; i++) {
        if (commands[i].pattern && !commands[i].dontAddCommandList) {
          menu[
            commands[i].category
          ] += `${config.PREFIX}${commands[i].pattern}\n`;
        }
      }

      let madeMenu = `👋 *Hello  ${pushname}*


| *MAIN COMMANDS* |
    ▫️.alive
    ▫️.menu
    ▫️.ai <text>
    ▫️.system
    ▫️.owner
「| *LOGO MENU* |
*┋*.𝗅𝗈𝗀𝗈
*┋*.hacker
*┋*.𝖻𝗅𝖺𝖼𝗄𝗉𝗂𝗇𝗄
*┋*.𝗀𝗈𝗌𝗌𝗒𝗌𝗂𝗅𝗏𝖾𝗋
*┋*.𝗇𝖺𝗋𝗎𝗋𝗈
*┋*.𝖽𝗂𝗀𝗂𝗍𝖺𝗅𝗀𝗅𝗂𝗍𝖼𝗁
*┋*.𝗉𝗂𝗑𝖾𝗅𝗀𝗅𝗂𝗍𝖼𝗁
*┋*.𝗌𝗍𝖺𝗋
*┋*.𝗌𝗆𝗈𝗄𝖾
*┋*.𝖻𝖾𝖺𝗋
*┋*.𝗇𝖾𝗈𝗇𝖽𝖾𝗏𝗂𝗅
*┋*.𝗌𝖼𝗋𝖾𝖾𝗇
*┋*.𝗇𝖺𝗍𝗎𝗋𝖾
*┋*.𝖽𝗋𝖺𝗀𝗈𝗇𝖻𝖺𝗅𝗅
*┋*.𝖿𝗈𝗀𝗀𝗒𝗀𝗅𝖺𝗌𝗌
*┋*.𝗇𝖾𝗈𝗇𝗅𝗂𝗀𝗁𝗍
*┋*.𝖼𝖺𝗌𝗍𝗅𝖾𝗉𝗈𝗉
*┋*.𝖿𝗋𝗈𝗓𝖾𝗇𝖼𝗁𝗋𝗂𝗌𝗍𝗆𝖺𝗌
*┋*.𝖿𝗈𝗂𝗅𝖻𝖺𝗅𝗅𝗈𝗈𝗇
*┋*.𝖼𝗈𝗅𝗈𝗋𝖿𝗎𝗅𝗉𝖺𝗂𝗇𝗍
*┋*.𝖺𝗆𝖾𝗋𝗂𝖼𝖺𝗇𝖿𝗅𝖺𝗀
*┋*.water
*┋*.𝗇𝖾𝗈𝗇𝖽𝖾𝗏𝗂𝗅
*┋*.underwater
*┋*.dragonfire
*┋*.bokeh
*┋*.snow
*┋*.sand3d
*┋*.pubg
*┋*.horror
*┋*.blood
*┋*.bulb
*┋*.graffiti
*┋*.thunder
*┋*.thunder1
*┋*.womensday
*┋*.Valentine
*┋*.graffiti2
*┋*.queencard
*┋*.galaxy
*┋*.pentakill 
*┋*.birthdayflower
*┋*.zodiac 
*┋*.water3D 
*┋*.textlight 
*┋*.wall
*┋*.gold
*┋*.glow
*┋*.team
*┋*.rotation
*┋*.paint
*┋*.avatar
*┋*.typography
*┋*.tattoo
*┋*.luxury
*┋*.logo
*╭┈───────────────•*
| *DOWNLOAD COMMANDS* |
*╭┈───────────────•*
*┋*.ғʙ
*┋*.ɪɴꜱᴛᴀ
*┋*.ᴠɪᴅᴇᴏ
*┋*.ɢᴅʀɪᴠᴇ
*┋*.ᴛᴡɪᴛᴛᴇʀ
*┋*.𝚝𝚒𝚔𝚝𝚘𝚔
*┋*.ᴍᴇᴅɪᴀғɪʀᴇ
*┋*.ꜱᴏɴɢ
*┋*.ᴠɪᴅᴇᴏ
*┋*.ᴀᴘᴋ
*┋*.𝚃𝚃𝙰𝚄𝙳𝙸𝙾*
*╰┈───────────────•*
| *GROUP COMMANDS* |
*╭┈──────────────•*
*┋*.ᴅᴇʟ <ʀᴇᴘʟʏ ғᴏʀ ᴅᴇʟᴇᴛᴇ sᴍs>
*┋*.ᴀᴅᴅ
*┋*.ᴋɪᴄᴋ
*┋*.ᴡᴇʟᴄᴏᴍᴇ 𝚘𝚗
*┋*.ᴡᴇʟᴄᴏᴍᴇ 𝚘𝚏𝚏
*┋*.ᴘʀᴏᴍᴏᴛᴇ
*┋*.ᴅᴇᴍᴏᴛᴇ
*┋*.ᴛᴀɢᴀʟʟ
*┋*.𝚑𝚒𝚍𝚎𝚝𝚊𝚐
*┋*.ɪɴᴠɪᴛᴇ
*┋*.ᴍᴜᴛᴇ
*┋*.ᴜɴᴍᴜᴛᴇ
*┋*.ɢʀᴏᴜᴘᴏᴘᴇɴ
*┋*.ɢʀᴏᴜᴘᴄʟᴏsᴇ
*┋*.ɢʀᴏᴜᴘɪɴғᴏ
*┋*.ᴅᴇʟ
*┋*.ᴍᴜᴛᴇ
*┋*.ᴜɴᴍᴜᴛᴇ
*┋*.ᴘᴏʟʟ
*┋*.ᴅᴇ
*╰┈───────────────•*
${menu.group}
| *OWNER COMMANDS* |
*╭┈───────────────•*
*┋*.𝙱𝙻𝙾𝙲𝙺
*┋*.𝚄𝙽𝙱𝙻𝙾𝙲𝙺
*┋*.𝙹𝙾𝙸𝙽
*┋*.𝙻𝙴𝙰𝚅𝙴
*┋*.𝚂𝙴𝚃𝚅𝙰𝚁
*┋*.𝚁𝙴𝚂𝚃𝙰𝚁𝚃
*┋*.𝙿𝙿
*┋*.𝚁𝚎𝚜𝚝𝚊𝚛𝚝
*┋*.𝙾𝚠𝚗𝚎𝚛𝚁𝚎𝚊𝚌𝚝
*┋*.𝙷𝚎𝚊𝚛𝚝𝚁𝚎𝚊𝚌𝚝
*┋*.𝙹𝚘𝚒𝚗
*┋*.𝙻𝚎𝚏𝚝 
*┋*.𝙱𝚛𝚘𝚊𝚍𝚌𝚊𝚜𝚝 
*┋*.𝚅𝚟  
*┋*.𝚅𝚟2
*┋*.𝙳𝚎𝗅
*┋*.𝚂𝚊𝚟𝚎
*┋*.ʀᴇᴘᴏʀᴛ
*┋*.ᴊɪᴅ  
*┋*.
*┋*.𝙳𝚎𝗅
*┋*.𝚂𝚊𝚟𝚎
*╰┈───────────────•*
| *CONVERT COMMANDS* |
*
*┃* .𝙰𝚃𝚃𝙿
*┃* .ᴜʀʟ
*┃* .𝙰𝚃𝚃𝙿3
*┃* .𝙴𝙱𝙸𝙽𝙰𝚁𝚈
*┃* .𝙳𝙱𝙸𝙽𝙰𝚁𝚈
*┃* .𝙴𝙼𝙾𝙹𝙸𝙼𝙸𝚇
*┃* .𝙼𝙿3
*╰━━━━━━━━━━━━━━━⪼*
| *SEARCH COMMANDS* |
*╭┈───────────────•*
*┋*.𝚈𝚃𝚂
*┋*.𝙶𝙾𝙾𝙶𝙻𝙴
*┋*.𝙸𝙼𝙳
*┋*.𝙸𝙼𝙶
*┋*.𝚆𝙴𝙰𝚃𝙷𝙴𝚁
*┋*.𝙿𝙻𝙰𝚈𝚂𝚃𝙾𝚁𝙴
*┋*.𝙽𝙴𝚆𝚂
*╰┈───────────────•*
${menu.search}


🥶𝐌𝐚𝐝𝐞 𝐛𝐲 🧚‍♂️𝗗𝗔𝗚𝗔𝗬𝗔-𝗠𝗗✨

> DAGAYA MENU MSG
`;
      await robin.sendMessage(
        from,
        {
          image: {
            url: "https://raw.githubusercontent.com/dagaya254/Bot-4to/refs/heads/main/20250303_055414.jpg",
          },
          caption: madeMenu,
        },
        { quoted: mek }
      );
    } catch (e) {
      console.log(e);
      reply(`${e}`);
    }
  }
);
