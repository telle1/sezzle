import io from 'socket.io-client'
let socket = io('http://localhost:5000', {transports: ['websocket', 'polling', 'flashsocket']});
export default socket;

