const delay = time => new Promise(res => setTimeout(res, time))

let handler = m => m

handler.all = async function (m) {

	if (!m.chat.endsWith('@s.whatsapp.net')) return !0;

	this.menfess = this.menfess ? this.menfess : {}

	let mf = Object.values(this.menfess).find(v => v.status === false && v.penerima == m.sender)

	if (!mf) return !0

	console.log({ text: m.text })

	if ((m.text === 'BALAS PESAN' || m.text === '') && m.quoted.mtype == 'buttonMessage') return m.reply("Silahkan Ketik Pesan Balasan Mu");

	

	let txt = `๐๐ข๐ช ๐๐ข๐ฌ@${mf.dari.split('@')[0]}, ๐๐ข๐ฎ๐ถ ๐๐ฆ๐ฏ๐ฆ๐ณ๐ช๐ฎ๐ข ๐๐ฆ๐ด๐ข๐ฏ ๐๐ข๐ญ๐ข๐ด๐ข๐ฏ ๐๐ช๐ฉ\n\n๐๐ฆ๐ด๐ข๐ฏ ๐ ๐ข๐ฏ๐จ ๐๐ข๐ฎ๐ถ ๐๐ช๐ณ๐ช๐ฎ ๐๐ฆ๐ฃ๐ฆ๐ญ๐ถ๐ฎ ๐๐บ๐ข โคต๏ธ\n${mf.pesan}\n\n๐๐ฆ๐ด๐ข๐ฏ ๐๐ข๐ญ๐ข๐ด๐ข๐ฏ๐ฏ๐บ๐ข โคต๏ธ\n${m.text}\n`.trim();

	await this.reply(mf.dari, txt, null).then(() => {

		m.reply('โ๏ธ Berhasil mengirim balasan.')

		delay(2000)

		delete this.menfess[mf.id]

		return !0

		})

	return !0

}



module.exports = handler