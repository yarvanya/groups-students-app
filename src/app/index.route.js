export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('techs', {
      url: 'techs',
      templateUrl: 'app/components/webDevTec/tech.html',
      parent: 'home'
    })
    .state('groups', {
      url: 'groups',
      template: '<h1>Here will be list of all groups</h1>',
      parent: 'home'
    })
    .state('students', {
      url: 'students',
      template: '<h1>Here will be list of all students</h1>',
      parent: 'home'
    });

  $urlRouterProvider.otherwise('/');
}
