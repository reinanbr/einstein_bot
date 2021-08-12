import { WAConnection } from '@adiwajshing/baileys'
import { MessageType, MessageOptions, Mimetype } from '@adiwajshing/baileys'
// Sending gifs

import * as fs from 'fs'
async function connectToWhatsApp () {
    const conn = new WAConnection() 
    // called when WA sends chats
    // this can take up to a few minutes if you have thousands of chats!
    conn.on('chats-received', async ({ hasNewChats }) => {
        console.log(`you have ${conn.chats.length} chats, new chats available: ${hasNewChats}`)

        const unread = await conn.loadAllUnreadMessages ()
        console.log ("you have " + unread.length + " unread messages")
    })
    // called when WA sends chats
    // this can take up to a few minutes if you have thousands of contacts!
    conn.on('contacts-received', () => {
        console.log('you have ' + Object.keys(conn.contacts).length + ' contacts')
    })

    // conn.on ('open', () => {
    //     // save credentials whenever updated
    //     console.log (`credentials updated!`)
    //     const authInfo = conn.base64EncodedAuthInfo() // get all the auth info we need to restore this session
    //     fs.writeFileSync('./auth_info.json', JSON.stringify(authInfo, null, '\t')) // save this info to a file
    // })
    conn.loadAuthInfo ('./auth_info.json') // will load JSON credentials from file

    await conn.connect ()
    conn.on('chat-update', chatUpdate => {
        // `chatUpdate` is a partial object, containing the updated properties of the chat
        // received a new message
        
        if (chatUpdate.messages && chatUpdate.count) {
            const message = chatUpdate.messages.all()[0]
            var msgText = message.message.conversation
            var idAuthor = message.key.remoteJid
            
            var args: String = msgText
			console.log(args)
			args.toLowerCase()
			var arg: String[] = args.split(' ') 
			console.log(arg)
			var command: String = args[0]
            console.log(command)
            //creatting command for music
            if(command == '/music')
			{
				
				var music:any = arg.slice(1,args.length)
				music = music.join(' ')
                console.log(`${idAuthor} requiriu a musica ${music}`)
                conn.sendMessage(idAuthor, 'oh hello there', MessageType.text)

            }

            console.log (`mensagem: ${msgText}`)
        } else console.log (chatUpdate) // see updates (can be archived, pinned etc.)
    })

    
}



connectToWhatsApp ()
.catch (err => console.log("unexpected error: " + err) )