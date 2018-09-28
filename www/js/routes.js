angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('page1', {
    url: '/index',
    templateUrl: 'templates/page1.html',
    controller: 'page1Ctrl'
  })

  .state('login', {
    url: '/page1',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('forgetPassword', {
    url: '/page2',
        templateUrl: 'templates/forgetPassword.html',
        controller: 'forgetPasswordCtrl'
  })

  .state('menu.systemsVisitHomeOnline', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/systemsVisitHomeOnline.html',
        controller: 'systemsVisitHomeOnlineCtrl'
      }
    }
  })

  .state('menu.page2', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page2.html',
        controller: 'page2Ctrl'
      }
    }
  })

  .state('menu.page3', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page3.html',
        controller: 'page3Ctrl'
      }
    }
  })

  .state('menu.about', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/about.html',
        controller: 'aboutCtrl'
      }
    }
  })

  .state('logOut', {
    url: '/page7',
    templateUrl: 'templates/logOut.html',
    controller: 'logOutCtrl'
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

$urlRouterProvider.otherwise('/index')


});