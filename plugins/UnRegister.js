import { createHash } from 'crypto'
let handler = async function (m, { args }) {
  if (!args[0]) throw 'Empty serial number'
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw 'Serial Number wrong'
  user.registered = false
  m.reply('```Succes Unreg !```')
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <SN|SERIAL NUMBER>')
handler.tags = ['xp']

handler.command = /^unreg(ister)?$/i
handler.register = true

export default handler