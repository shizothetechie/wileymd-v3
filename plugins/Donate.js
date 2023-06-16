
let handler = async (m, { conn, isOwner, isAdmin, isROwner }) => {
 let wiley = `Support owner ${ownername} of the bot ${botname}
 
*Official Groups:* ${grouplink}
*Follow Instagram:* ${instalink}
*Owner Number:* ${ownernumber}
*Bot Number:* ${botnumber}

*Script Link:* https://github.com/shizothetechie/wileymd-v3
Thank You ❤️✨
 `
 conn.reply(m.chat, wiley, m)
}
handler.help = ['donate', 'support', 'thanks']
handler.tags = ['support']
handler.command = ['donate', 'support', 'thanks'] 
handler.owner = true
export default handler