
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
if (!text) throw `😤 Enter the number to which you want to send a group invite\n\n📌 Example :\n*${usedPrefix + command}* 919172××××××`
if (text.includes('+')) throw  `💅 Enter the number all together without the *+*`
if (isNaN(text)) throw ' 📌 Enter only numbers plus your country code with no spaces'
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
 
      await conn.reply(text+'@s.whatsapp.net', `≡ *GROUP INVITATION*\n\nUn user invited you to join this group \n\n${link}`, m, {mentions: [m.sender]})
        m.reply(`🥳 An invitation link was sent to the user`) 

}
handler.help = ['invite <919172389xxx>']
handler.tags = ['group']
handler.command = ['invite','invitar'] 
handler.group = true
handler.admin = false
handler.botAdmin = true
handler.rowner = true

export default handler
