const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.xyz', //apabila link api eror, segera laporkan le owner
}

// Free apikey
global.APIKeys = {
	'https://api.zeeoneofc.xyz': 'your apikey',  // login https://api.zeeoneofc.xyz to get apikey || https://api-alphabot.herokuapp.com
}

// setting 
global.autoread = false // auto read pesan / message
//global.autorecording = true //status auto merekam ( auto record )
//global.autoketik = false //status auto mengetik (auto typing)
//global.available = false //status online (online)

// Other
global.botname = "Vihanga - Md🥀" //namabot kalian
global.ownername= "Vihanga Yt" //nama kalian
global.myweb ="https://api.zeeoneofc.xyz" //bebas asal jan hapus
global.youtube = "https://youtube.com/c/VIHANGAYT0" //bebas asal jan hapus
global.github = "https://vihangabot.github.io/" //bebas
global.email = "pissupusa12@gmail.com" //bebas
global.region = "Sri Lanka" //bebas
global.ownernomer = "+94703631506" // nomor wa kalian
global.ownernomerr = "+94703631506" //nmr wa kalian
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome="https://telegra.ph/file/90a931648de597820bc08.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.owner = ["+94703631506"] //ganti agar fitur owner bisa di gunakan
global.packname = '©Vihanga - Md🥀' //sticker wm ubah
global.author = '៚ᴠɪʜͥᴀɴͣɢͫᴀ ʏᴛ͢⁸⁵⁴¹⃟✦⃝̮̮〽️' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '🤗නිමයි, හරි සාර්ථකයි~',
    admin: 'මෙම විධානය භාවිතා කල හැක්කේ Admin ට පමණි !',
    botAdmin: 'මෙම විධානය භාවිතා කිරීමට Bot, Admin කෙනෙකු විය යුතුය !',
    owner: 'මෙම විධානය භාවිතා කල හැක්කේ හිමිකරුට පමණී !',
    group: 'මෙම විධානය භාවිතා කල හැක්කේ Group එකක් තුල පමණි !',
    private: 'මෙම විධානය භාවිතා කල හැක්කේ Private Chat එකක් තුල පමණි !',
	bot: 'මෙම විධානය භාවිතා කල හැක්කේ Bot අංකයෙන් පමණී ',
    errtoimg: 'සමාවන්න දැනට Sticker Gif සඳහා සහය නොදක්වයි !',
    wait: '⏳ සැකසෙමින් පවතී',
	lockCmd: 'පරිපාලකා විසින් සක්‍රීය කර නැත!',
	example1: 'ආයුබෝවන් @user අපේ Group එකට සාදරයෙන් පිලිගන්නවා @subject අපේ Group එක Share කරන්න අමතක කරන්න එපා @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
