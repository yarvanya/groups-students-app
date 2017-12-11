import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { GroupController } from '../app/components/group/group.directive';
import { StudentController } from '../app/components/student/student.directive';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { GroupService } from '../app/components/group/group.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { GroupDirective } from '../app/components/group/group.directive';
import { StudentDirective } from '../app/components/student/student.directive';

angular.module('groupStudent', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'mgcrea.ngStrap', 'toastr'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('webDevTec', WebDevTecService)
  .service('groups', GroupService)
  .controller('MainController', MainController)
  .controller('GroupController', GroupController)
  .controller('StudentController', StudentController)
  .directive('navbar', NavbarDirective)
  .directive('group', GroupDirective)
  .directive('student', StudentDirective);
