let linebot = require('linebot')

let bot = linebot({
    channelId: process.env.LINE_CHANNEL_ID,
    channelSecret: process.env.LINE_CHANNEL_SECRET,
    channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN
})

bot.on('message', function (event) {
    const userMsg = event.message.text
    if(userMsg.indexOf('#訂餐') > -1){
        event.reply(`訂餐`)
    }

})

bot.listen('/', process.env.PORT || 5000, function () {
    console.log('全國首家LINE線上機器人上線啦！！')
})


