import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { GroupController } from '../app/components/group/group.directive';
import { StudentController } from '../app/components/student/student.directive';
import { ModalController } from '../app/components/modal/modal.directive';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { GroupService } from '../app/components/group/group.service';
import { StudentService } from '../app/components/student/student.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { GroupDirective } from '../app/components/group/group.directive';
import { StudentDirective } from '../app/components/student/student.directive';
import { ModalDirective } from '../app/components/modal/modal.directive';

angular.module('groupStudent', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'mgcrea.ngStrap', 'toastr'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('webDevTec', WebDevTecService)
  .service('groups', GroupService)
  .service('students', StudentService)
  .controller('MainController', MainController)
  .controller('GroupController', GroupController)
  .controller('StudentController', StudentController)
  .controller('ModalController', ModalController)
  .directive('navbar', NavbarDirective)
  .directive('group', GroupDirective)
  .directive('student', StudentDirective)
  .directive('modal', ModalDirective);
