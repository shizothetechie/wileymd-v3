import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'


//Numbers
global.botnumber = '919637987574'
global.ownernumber = '919172389527'

//Names
global.ownername = 'TeDevelopers'
global.botname = 'Wiley-md v3'
global.bname = 'Wiley-MD'

//Links
global.grouplink = 'https://instagram.com/error.mods'
global.instalink = 'https://instagram.com/error.mods'


//Apikeys 
global.shizokeys = 'shizo'


//Reactions
global.clock = '⏱️'


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright('Main Infos Updated just Now\nRestart Bot if changes not showing'))
  import(`${file}?update=${Date.now()}`)
})
