'use strict';
angular.module('chatvn.service')

.factory('ChatService', function() {
	var socket = null;

	var url = vnChatConfig.hosts.host2.protocol 
		+ '://' + vnChatConfig.hosts.host2.hostname 
		+ ':' + vnChatConfig.hosts.host2.port;


	var initChat = function(scope) {
		socket = io.connect(url);

	    socket.emit('chat message', 'asdasd');

	    socket.on('updateRooms', function () {
	    	console.log(JSON.stringify(arguments));
    	});
	    socket.emit('add:user', {name: "Quan"});

    	socket.on('updateChat', function (user, msg) {
    		console.log(JSON.stringify(user));
    		console.log(JSON.stringify(msg));
    		var newTextItem = {user: user.name, text: msg};
    		scope.chattexts.push(newTextItem);
    		scope.$apply();
    	});
	}

	var updateChat = function(scope) {
		if (socket == null || socket == undefined) {
			initChat();
		}

		socket.on('updateRooms', function () {
	    	console.log(JSON.stringify(arguments));
    	});


	}

	var sendChat = function(msg) {
		if (socket == null || socket == undefined) {
			initChat();
		}
		socket.emit('sendChat', msg);
	}
	
	return {
		initChat: initChat,
		updateChat: updateChat,
		sendChat: sendChat
	};
});