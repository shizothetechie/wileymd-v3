import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	
 let name = conn.getName(m.sender)
  if (!text) throw `Hii *${name}* want to talk? \nrespond *${usedPrefix + command}* (your message) \n\n📌 Exemplo : *${usedPrefix + command}* Hii bot`
  m.react('🔮') 
  let res = await fetch(`https://api.simsimi.net/v2/?text=${text}&lc=en`)
  let json = await res.json()
  if (json.success) m.reply(json.success.replace('simsimi', 'Wiley-MD').replace('Simsimi', 'Wiley-MD').replace('sim simi', 'Wiley-MD'))
  else throw json
}
handler.help = ['bot']
handler.tags = ['fun']
handler.command = ['bot', 'alexa'] 

export default handler
