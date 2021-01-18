import io from 'socket.io-client'
let socket = io('https://sezzlecalctl.herokuapp.com/', {transports: ['websocket', 'polling', 'flashsocket']});
export default socket;

