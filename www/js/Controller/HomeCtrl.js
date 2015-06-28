'use strict';
(function() {
	angular.module('chatvn.controllers')
	.controller('HomeCtrl', HomeCtrl);

	HomeCtrl.$inject = ['$scope', '$stateParams', 'ChatService', '$ionicPlatform', '$state'];

	function HomeCtrl($scope, $stateParams, ChatService, $ionicPlatform, $state) {
		$ionicPlatform.ready(function() {
			ChatService.initChat($scope);
		    var chattext = $('#chattext');
		    //ChatService.initChat();
		    $scope.chattexts = [
		      {user: "user1", text: "text1 df ds fsd sd fsdf sd fsd"},
		      {user: "user2", text: "text2"},
		      {user: "user3", text: "text4"},
		      {user: "user4", text: "text1"},
		      {user: "user5", text: "text1"},
		    ];
		    $scope.isFocused = true;
		    $scope.sendText = function() {
		      
		      if (chattext.val().length == 0) {
		        return;
		      }
		      /*
		      if ($scope.chattexts.length > 10) {
		        $scope.chattexts.shift();
		      }
		      */
		      
		      var newTextItem = {user: vnChatConfig.i18n.toi, text: chattext.val()};
		      ChatService.sendChat(newTextItem.text);
		      $scope.chattexts.push(newTextItem);
		      chattext.val('');
		      $scope.chattext = null;
		      $scope.isFocused = !$scope.isFocused;

		      $('#chattext').focus();
		    }
		  });
	}


})();