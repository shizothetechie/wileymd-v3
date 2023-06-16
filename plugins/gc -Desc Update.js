let handler = async (m, { conn, args }) => {
await conn.groupUpdateDescription(m.chat, `${args.join(" ")}`);
m.reply(`Description has been update ✅`)
}
handler.help = ['Setdesc <text>']
handler.tags = ['group']
handler.command = /^setdesk|setdesc|updatedesc$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
