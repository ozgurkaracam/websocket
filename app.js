const http=require('http');
const socketio=require('socket.io');
const server=http.createServer((req,res)=>{
    res.end('hii');
});

server.listen(3000);

const io=socketio.listen(server);



io.sockets.on('connection',(socket)=>{
    console.log('kullanıcı bağlandı.');
    socket.on('disconnect',(socket)=>{
        console.log("kullanıcı ayrıldı");

    });
    socket.on('selamVer',()=>{
        console.log("selam");
    });

    socket.on("new-user",(data)=>{
       socket.broadcast.emit("baglandi",{newuser:data.user});
    });

    /*setInterval(()=>{

        socket.emit("merhaba");
    },1000);*/

});