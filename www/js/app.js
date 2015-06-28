angular.module(
  'chatvn', [
    'ionic',
    'chatvn.controllers',
    'chatvn.service'
  ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: "/home",
    views: {
      'menuContent': {
        templateUrl: "templates/home.html",
        controller: 'HomeCtrl'
      }
    }
  })

  .state('app.friendlist', {
    url: "/friendlist",
    views: {
      'menuContent': {
        templateUrl: "templates/friendlist.html",
        controller: 'FriendlistCtrl'
      }
    }
  })

  .state('app.profile', {
    url: "/profile",
    views: {
      'menuContent': {
        templateUrl: "templates/profile.html",
        controller: 'ProfileCtrl'
      }
    }
  })

  .state('app.room', {
    url: "/room/:roomId",
    views: {
      'menuContent': {
        templateUrl: "templates/room.html",
        controller: 'RoomCtrl'
      }
    }
  })
  .state('registration', {
    url: "/registration",
    abstract: true,
    templateUrl: "templates/registration/registration.html",
  })

  .state('registration.step1', {
    url: "/step1",
    cache: false,
    templateUrl: "templates/registration/step1.html",
    controller: 'RegistrationStep1Ctrl'
  })

  .state('registration.step2', {
    url: "/step2",
    cache: false,
    templateUrl: "templates/registration/step2.html",
    controller: 'RegistrationStep2Ctrl'
  })


  .state('main', {
    url: "/main",
    abstract: true,
    cache: false,
    templateUrl: "templates/main/main.html"
  })

  .state('main.start', {
    url: '/start',
    cache: false,
    templateUrl: 'templates/main/start.html',
    controller: 'MainCtrl',
  });
    
  $urlRouterProvider.otherwise("/main/start");
})
.directive('schrollBottom', function () {
  return {
    scope: {
      schrollBottom: "="
    },
    link: function (scope, element) {
      scope.$watchCollection('schrollBottom', function (newValue) {
        if (newValue) {
          $(element).scrollTop($(element)[0].scrollHeight);
        }
      });
    }
  }
})
.directive('syncFocusWith', function($timeout, $rootScope) {
    return {
        restrict: 'A',
        scope: {
            focusValue: "=syncFocusWith"
        },
        link: function($scope, element, attrs) {
            $scope.$watch("focusValue", function(currentValue, previousValue) {
              return;
                if (currentValue === true && !previousValue) {
                    $(element[0]).focus();
                } else if (currentValue === false && previousValue) {
                    $(element[0]).blur();
                }
            })
        }
    }
});
