import http from 'node:http'
import {WebSocketServer} from 'ws'

const port = proces.env.port ?? 9000 ;

const httpServer = http.createServer(async function (req , res) {
    
});

const wsServer = new WebSocketServer({server : httpServer});

httpServer.listen(port , () => {
    console.log('Server is running on http://localhost:${port}');
});