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
      templateUrl: 'app/components/group/group.html',
      controller: 'GroupController',
      controllerAs: 'group',
      parent: 'home'
    })
    .state('students', {
      url: 'students',
      templateUrl: 'app/components/student/student.html',
      controller: 'StudentController',
      controllerAs: 'student',
      parent: 'home'
    });

  $urlRouterProvider.otherwise('/');
}
