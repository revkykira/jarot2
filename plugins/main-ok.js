let fs = require('fs')
let handler = async (m, { conn }) => {
//FAKEREPLY KONTAK
 const fcon = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "contactMessage": { "title":"sri","h": `haloo`, 'jpegThumbnail': fs.readFileSync('./image/3SBot.jpg')}}
	}
conn.reply(m.chat, diskusi, fcon) 
}
handler.help = ['gc3']
handler.tags = ['info']
handler.command = /^(gc3)$/i

module.exports = handler