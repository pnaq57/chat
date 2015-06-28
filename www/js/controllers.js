'use strict'
angular.module('chatvn.controllers', [])

.controller('MainCtrl', function($scope, $rootScope, $state, $ionicPlatform, LocalStorageService) {
  $ionicPlatform.ready(function() {
      var user = LocalStorageService.getObject('user');
      alert(JSON.stringify(user));
      if  (typeof user !== 'object') {
        $state.go('registration.step1');
      } else {
        $state.go('app.home');
      }
  });  

})

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  $scope.loginData = {};
  $scope.vnChatConfig = vnChatConfig;
  
})

.controller('RegistrationStep1Ctrl', function($scope, LocalStorageService, $state, $ionicPlatform) {
  $ionicPlatform.ready(function() {
    $scope.user = {};
    $scope.save = function() {
      LocalStorageService.setObject('user', $scope.user);
      if ($scope.user.name != undefined) {
        $state.go('app.home');
      }
      $state.go('registration.step2');
    }
  });
})
.controller('RegistrationStep2Ctrl', function($scope, LocalStorageService, $state, $ionicPlatform) {
  $ionicPlatform.ready(function() {
    var savedUser = LocalStorageService.getObject('user');
    $scope.save = function(user) {
      user.language = savedUser.language;
      user.country = savedUser.country;
      LocalStorageService.setObject('user', user);
      if (user.name != undefined) {
        $state.go('app.home');
        return;
      }
      $state.go('registration.step2');
    }
  });
})

.controller('RoomCtrl', function($scope) {
  
})

.controller('FriendlistCtrl', function($scope) {
  
})

.controller('ProfileCtrl', function($scope, LocalStorageService, $ionicPlatform) {
  $ionicPlatform.ready(function() {
    $scope.user = LocalStorageService.getObject('user');
    $scope.save = function(user) {
      LocalStorageService.setObject('user', user);
      if (user.name != undefined) {
        $state.go('app.home');
        return;
      }
      $state.go('registration.step2');
    }

  });
});


