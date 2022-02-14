const {Composer,Telegraf} = require('micro-bot')
const mongoose = require('mongoose')

const dbModel = require('./postSchema')
const postId = "620a06c78bd4602c4806804f"

const bot = new Composer()

//DB mail gejaho3293@rubygon.com pass: rps
mongoose.connect('mongodb+srv://rasedul20:rasedul20@telegramproject.6rm9z.mongodb.net/telegramDB?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true}).catch((e)=>{
        console.log(e)
}).then((d)=>console.log('Database connected')).catch((e)=>console.log(e))


bot.start(ctx=>{
    ctx.telegram.sendMessage(ctx.chat.id , "-----------------------------" , {
        reply_markup: {
            keyboard: [
                [{text: "💰 Buy"}],
                [{text: "🌎 Website"},{text: "🚀 RoadMap"}],
                [{text: "💵 Tax"},{text: "📝 WhitePaper"}],
                [{text: "⚙️ Tokenomics"},{text: "📜 Contract"}]
            ],
            resize_keyboard: true
        }
    } ).catch("Somthing is wrong").then(()=>{ctx.reply("Hello "+ctx.from.first_name+`\nWelcome in Gravity Metaverse!
🚀Are you ready to go to the moon?🚀` )})
})

bot.on("new_chat_members",ctx=>{
    ctx.telegram.sendMessage(ctx.chat.id , "-----------------------------" , {
        reply_markup: {
            keyboard: [
                [{text: "💰 Buy"}],
                [{text: "🌎 Website"},{text: "🚀 RoadMap"}],
                [{text: "💵 Tax"},{text: "📝 WhitePaper"}],
                [{text: "⚙️ Tokenomics"},{text: "📜 Contract"}]
            ],
            resize_keyboard: true
        }
    } ).catch("Somthing is wrong").then(()=>{ctx.reply("Hello "+ctx.from.first_name+`\nWelcome in Gravity Metaverse!
🚀Are you ready to go to the moon?🚀` )})
})


bot.hears('💰 Buy',ctx=>{

    const findQuery = {
        id : postId
    }
    dbModel.find(findQuery, (e,data)=>{
        if (e) {
            console.log(e)
        } else {
            ctx.telegram.sendMessage(ctx.chat.id , data.buy ).catch('Something is wrong')
        }
    })

})

bot.command('buy',ctx=>{

    const findQuery = {
        id : postId
    }
    dbModel.find(findQuery, (e,data)=>{
        if (e) {
            console.log(e)
        } else {
            ctx.telegram.sendMessage(ctx.chat.id , data.buy ).catch('Something is wrong')
        }
    })

})


bot.hears('⚙️ Tokenomics',ctx=>{
    
    const findQuery = {
        id : postId
    }
    dbModel.find(findQuery, (e,data)=>{
        if (e) {
            console.log(e)
        } else {
            ctx.telegram.sendMessage(ctx.chat.id , data.token ).catch('Something is wrong')
        }
    })

})

bot.command('tokenomics',ctx=>{

    const findQuery = {
        id : postId
    }
    dbModel.find(findQuery, (e,data)=>{
        if (e) {
            console.log(e)
        } else {
            ctx.telegram.sendMessage(ctx.chat.id , data.token ).catch('Something is wrong')
        }
    })

})


bot.hears('🌎 Website',ctx=>{

    const findQuery = {
        id : postId
    }
    dbModel.find(findQuery, (e,data)=>{
        if (e) {
            console.log(e)
        } else {
            ctx.telegram.sendMessage(ctx.chat.id , data.web , {
                reply_markup:{
                    inline_keyboard:[
                        [{text: "Visit our website", url: "https://gravitymetaverse.io"}]
                    ]
                },
                parse_mode: "HTML"
            }).catch("Something is wrong")
        }
    })


})

bot.command('website',ctx=>{

    const findQuery = {
        id : postId
    }
    dbModel.find(findQuery, (e,data)=>{
        if (e) {
            console.log(e)
        } else {
            ctx.telegram.sendMessage(ctx.chat.id , data.web , {
                reply_markup:{
                    inline_keyboard:[
                        [{text: "Visit our website", url: "https://gravitymetaverse.io"}]
                    ]
                },
                parse_mode: "HTML"
            }).catch("Something is wrong")
        }
    })

})

bot.hears('🚀 RoadMap',ctx=>{

    const findQuery = {
        id : postId
    }
    dbModel.find(findQuery, (e,data)=>{
        if (e) {
            console.log(e)
        } else {
            ctx.telegram.sendMessage(ctx.chat.id , data.road ).catch('Something is wrong')
        }
    })

})

bot.command('roadmap',ctx=>{
    
    const findQuery = {
        id : postId
    }
    dbModel.find(findQuery, (e,data)=>{
        if (e) {
            console.log(e)
        } else {
            ctx.telegram.sendMessage(ctx.chat.id , data.road ).catch('Something is wrong')
        }
    })

})


bot.hears('💵 Tax',ctx=>{

    const findQuery = {
        id : postId
    }
    dbModel.find(findQuery, (e,data)=>{
        if (e) {
            console.log(e)
        } else {
            ctx.telegram.sendMessage(ctx.chat.id , data.tax ).catch('Something is wrong')
        }
    })

})

bot.command('tax',ctx=>{
    
    const findQuery = {
        id : postId
    }
    dbModel.find(findQuery, (e,data)=>{
        if (e) {
            console.log(e)
        } else {
            ctx.telegram.sendMessage(ctx.chat.id , data.tax ).catch('Something is wrong')
        }
    })

})

bot.hears('📝 WhitePaper',ctx=>{
    
    const findQuery = {
        id : postId
    }
    dbModel.find(findQuery, (e,data)=>{
        if (e) {
            console.log(e)
        } else {
            ctx.telegram.sendMessage(ctx.chat.id , data.white ).catch('Something is wrong')
        }
    })

})

bot.command('whitepaper',ctx=>{
    
    const findQuery = {
        id : postId
    }
    dbModel.find(findQuery, (e,data)=>{
        if (e) {
            console.log(e)
        } else {
            ctx.telegram.sendMessage(ctx.chat.id , data.white ).catch('Something is wrong')
        }
    })

})

bot.hears('📜 Contract',ctx=>{
    ctx.replyWithHTML(`<b>Contract Us:</b> \nWebsite: https://gravitymetaverse.io/\nInstagram: gravitymetaverse\nFacebook: Gravity Metaverse`).catch("Somthing is wrong")
})

bot.command('contract',ctx=>{
    ctx.replyWithHTML(`<b>Contract Us:</b> \nWebsite: https://gravitymetaverse.io/\nInstagram: gravitymetaverse\nFacebook: Gravity Metaverse`).catch("Somthing is wrong")
})



bot.hears(/settaxmessage/gi,(ctx)=>{
    const text = ctx.update.message.text
    const finaltext = text.replace(/settaxmessage/gi,"")
    const textForSaved = finaltext.trim()

    const updateQuery = {
        id: postId
    }

    const inputData = {
        tax: textForSaved
    }

    dbModel.updateOne(updateQuery,inputData,(e)=>{
        if (e) {
            console.log(e)
        } else {
            ctx.reply("Your message sucessfully set").catch("Something is wrong")
        }
    })

})


bot.hears(/setbuymessage/gi,(ctx)=>{
    const text = ctx.update.message.text
    const finaltext = text.replace(/setbuymessage/gi,"")
    const textForSaved = finaltext.trim()

    const updateQuery = {
        id: postId
    }

    const inputData = {
        buy: textForSaved
    }

    dbModel.updateOne(updateQuery,inputData,(e)=>{
        if (e) {
            console.log(e)
        } else {
            ctx.reply("Your message sucessfully set").catch("Something is wrong")
        }
    })
})


bot.hears(/setroadmapmessage/gi,(ctx)=>{
    const text = ctx.update.message.text
    const finaltext = text.replace(/setroadmapmessage/gi,"")
    const textForSaved = finaltext.trim()

    const updateQuery = {
        id: postId
    }

    const inputData = {
        road: textForSaved
    }

    dbModel.updateOne(updateQuery,inputData,(e)=>{
        if (e) {
            console.log(e)
        } else {
            ctx.reply("Your message sucessfully set").catch("Something is wrong")
        }
    })

})

bot.hears(/setwhitepapermessage/gi,(ctx)=>{
    const text = ctx.update.message.text
    const finaltext = text.replace(/setwhitepapermessage/gi,"")
    const textForSaved = finaltext.trim()

    const updateQuery = {
        id: postId
    }

    const inputData = {
        white: textForSaved
    }

    dbModel.updateOne(updateQuery,inputData,(e)=>{
        if (e) {
            console.log(e)
        } else {
            ctx.reply("Your message sucessfully set").catch("Something is wrong")
        }
    })

})

bot.hears(/settokenomicsmessage/gi,(ctx)=>{
    const text = ctx.update.message.text
    const finaltext = text.replace(/Settokenomicsmessage/gi,"")
    const textForSaved = finaltext.trim()

    const updateQuery = {
        id: postId
    }

    const inputData = {
        token: textForSaved
    }

    dbModel.updateOne(updateQuery,inputData,(e)=>{
        if (e) {
            console.log(e)
        } else {
            ctx.reply("Your message sucessfully set").catch("Something is wrong")
        }
    })

})

bot.hears(/setwebsitemessage/gi,(ctx)=>{
    const text = ctx.update.message.text
    const finaltext = text.replace(/setwebsitemessage/gi,"")
    const textForSaved = finaltext.trim()

    const updateQuery = {
        id: postId
    }

    const inputData = {
        web: textForSaved
    }

    dbModel.updateOne(updateQuery,inputData,(e)=>{
        if (e) {
            console.log(e)
        } else {
            ctx.reply("Your message sucessfully set").catch("Something is wrong")
        }
    })

})




module.exports = bot