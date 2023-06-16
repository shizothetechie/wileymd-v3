//import db from '../lib/database.js'

import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `✳️ You are already registered\n\n¿Want to re-register?\n\n 📌 Use this command to remove your record \n*${usedPrefix}unreg* <Serial number>`
  if (!Reg.test(text)) throw `⚠️ Formato incorrecto\n\n 🎃 Using the command: *${usedPrefix + command} name.Age*\n📌Example : *${usedPrefix + command}* ${ownername}.16`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '🙀 The name cannot be empty'
  if (!age) throw '🤡 Age cannot be empty'
  if (name.length >= 30) throw '✳️ The name is too long' 
  age = parseInt(age)
  if (age > 100) throw '👴🏻 Wow grandfather want to use bot'
  if (age < 5) throw '🚼  hay grandfather'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
┌─「 *REGISTERED* 」─
▢ *Name:* ${name}
▢ *Age* : ${age} years
▢ *Serial number* : ${sn}
└──────────────

 *${usedPrefix}help* type to see Menu
`.trim())
}
handler.help = ['reg'].map(v => v + ' <name.age>')
handler.tags = ['rg']

handler.command = ['verify', 'reg', 'register', 'registrar'] 

export default handler

