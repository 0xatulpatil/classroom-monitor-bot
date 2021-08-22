
const { meme } = require('memejs');

module.exports = {
    name: 'meme',
    desc: 'send a programmer humor meme',
    execute(message) {
        
        if (message.author.bot) return;

        meme('programmerhumor')
        .then(m => {
            if (m.title)
                message.channel.send(m.title)
            message.channel.send(m.url)
        })
        .catch(e => {
            console.log(e)
            message.channel.send("I had an error :(")
        })

    },
}