import { stringify } from 'querystring';
import {create} from 'venom-bot';

create('browser')
    .then((client) => start(client))
    .catch((e)=>{
        console.log(e)
    })


function start(client: any){
    client.onMessage((msg: string)=>{
        console.log(msg)
    })
}