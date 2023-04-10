import { Socket } from "socket.io"

const wsHandler = (socket: Socket) => {
    socket.on("hello", (data) => {
        console.log(data);
    })
}

export default wsHandler