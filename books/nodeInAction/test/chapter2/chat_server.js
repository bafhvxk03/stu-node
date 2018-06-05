var sockerio = require('socket.io');
var io;
var guestNumber = 1;
var nickname = {};
var nameUsed = [];
var currentRoom = {};

exports.listen = function(server){
	io = sockerio.listen(server);
	io.set('log level',1);
	io.sockets.on('connection',function(socket){
		guestNumber = assignGuest(soctet,guestNumber,nickname,nameUsed);
	})
}










