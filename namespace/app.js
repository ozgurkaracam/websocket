const http=require('http');
const socketio=require('socket.io');
const server=http.createServer((req,res)=>{

});

server.listen(3000);

const io=socketio.listen(server);

const nsp=io.of("/creative93");

nsp.on("connection",(socket)=>{
    console.log("connected");
    socket.on("isimyaz",()=>{
       socket.broadcast.emit("gonder",{isim : "özgür"});
    });

    socket.on("joinRoom",(data)=>{
        socket.join(data.roomName,()=>{
                socket.to(data.roomName).emit('new join',{nickname: data.nickname});
        });
    });
});
