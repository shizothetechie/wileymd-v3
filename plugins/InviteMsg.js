
export async function all(m) {
	
    // when someone sends a group link to the bot's dm
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('open this link')) && !m.isBaileys && !m.isGroup) {
    let reply = `To Add bot Contact my owner ${ownername} \nHere\'s my Owner number 👇`
    conn.reply(m.chat, reply, m)
    this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
   
        m.react('🥺')
  } 
  
   return !0
}
