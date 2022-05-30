const express = require('express')
const app = express()
const path = require('path')

const http = require('http')
const { dirname } = require('path')
const server = http.createServer(app)

const {Server} =require ('socket.io')
const io = new Server(server)

io.on('connection', (socket)=>{
      console.log('un usuario se ah conectado')


     socket.on('disconnect', ()=>{
         console.log('Un ususario se ah desconectado')
     })

    socket.on('chat', (msg)=>{
        console.log('Mensaje: ' +msg )
    })

    socket.on('chat', (msg) =>{
        io.emit('chat', msg)
    })
})

app.get('/', (req, res) =>{
    // res.send('<h2>Aplicacion de mensajeria</h2>')
    res.sendFile(`${__dirname}/cliente/index.html`)
} )

server.listen(3000, ()=> {
    console.log('servidor escuchando en http://localhost:3000')
});