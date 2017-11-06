export class Router {
  static configure (app) {
    app.config(($stateProvider, $urlRouterProvider) => {
      'ngInject'

      $urlRouterProvider.otherwise('/home')

      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'components/home/home.view.html',
          controller: 'HomeController as ctrl'
        })
        .state('play', {
          url: '/play',
          templateUrl: 'components/play/play.view.html',
          controller: 'PlayController as ctrl'
        })
        .state('help', {
          url: '/help',
          templateUrl: 'components/help/help.view.html',
          controller: 'HelpController as ctrl'
        })
    })
  }
}
