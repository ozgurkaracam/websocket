const http=require('http');
const socketio=require('socket.io');
const server=http.createServer((req,res)=>{

});

server.listen(3000);

const io=socketio.listen(server);

io.on("connection",(socket)=>{
    console.log("connected");
    socket.on("isimyaz",()=>{
        socket.broadcast.emit("gonder",{isim : "özgür"});
    });

    socket.on("joinRoom",(data)=>{
        let cnt=getCount(io,data.roomName);
        socket.join(data.roomName,()=>{
            io.to(data.roomName).emit('new join',{nickname:data.nickname});
        });
    });

    socket.on("leaveRoom",(data)=>{
        socket.leave(data.roomName,()=>{
            io.to(data.roomName).emit("leavedRoom",{nickname:data.nickname});
        });
    });
});
