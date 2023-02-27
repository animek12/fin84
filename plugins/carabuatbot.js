let fs = require('fs')
let handler = async (m, { conn }) => {
let jarot = 'https://telegra.ph/file/040c3853bd9aa310915d4.jpg'
let os = `┌─── 〔 TUTORIAL JADIBOT 〕 ───
✘.SILAHKAN KE BERANDA WHATSAPP 
✘.CARI TULISAN PERANGKAT TAUTAN 
✘.PENCET PERANGKAT TAUTAN 
✘.SILAHKAN MINTA KODE QR KE WA BOT
✘.KALO UDAH DAPET SILAHKAN SCAN
✘.TUNGGU SAMPAI PERANGKAT MASUK
✘.KALO UDAH MASUK KETIK LAGI JADIBOT
✘.CONNECT 

❍ TUTOR DAPETIN KODE QR ❍

✘.JOIN GROUP
https://chat.whatsapp.com/BGyvKG4b0Qz2DnGXZTXuAX
✘.JANGAN LUPA TAG OWNER
✘.BIAR DI ACC KALO UDAH DI ACC
✘.KETIK .jadibot DI NOMER BOT INI
✘.SILAHKAN SCAN  
✘.JANGAN LUPA DI BACA SEMUA
`
  conn.send3ButtonImg(m.chat, jarot, os, "📮 Silahkan pilih Salah Satu dibawah ini", 'Sosialmedia', '.sosialmedia', 'Sewa', '.sewa', 'Menu', '.menu', m) 
}
handler.help = ['carabuatbot']
handler.tags = ['main']
handler.command = /^(cbb|carabuatbot)$/i

module.exports = handler
