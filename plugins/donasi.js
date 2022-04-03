let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `››╭─〘 *Donasi* 〙
╭╡
│┝‷✧ *Pulsa:* 6283136890848
│┝‷✧ *Dana:* 6283136890848
│┝‷✧ *Linkaja:* belum ada
│┝‷✧ *Gopay:* pc owner
│┝‷✧ *Ovo:* belum ada
│╰───···─────
│⁺◛˖ Ingin Donasi? Chat
│wa.me/6283136890848?text=kak+mau+donasi
╰──────────···───╮
▌│█║▌║▌║║▌║▌║█│▌
`.trim(), `${wm}`, 'Owner', '.owner')

module.exports = handler

let wm = global.botwm
