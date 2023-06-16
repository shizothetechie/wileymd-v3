
let handler = async (m, { conn, isOwner, isAdmin, isROwner }) => {
    global.db.data.chats[m.chat].isBanned = true
    m.reply('✅ The bot was deactivated in this group')
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = ['banchat', 'chatoff'] 
handler.owner = true
export default handler
 
