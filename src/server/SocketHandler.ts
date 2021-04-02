import { Server, Socket } from 'socket.io'

import App from './App'

class SocketHandler {

    constructor(io: Server ) {
        io.on('connect', (socket: Socket) => {
            console.log(`Connection ID: ${socket.id}`)
            this.msg(socket)
        })
    }

    private msg (socket: Socket) {
        socket.on('msg', (msg: any) => {
            console.log(msg)
        })
    }

}

export default new SocketHandler(App.socketioServer)
