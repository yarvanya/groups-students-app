import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';

angular.module('groupStudent', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'mgcrea.ngStrap', 'toastr'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('webDevTec', WebDevTecService)
  .controller('MainController', MainController)
  .directive('navbar', NavbarDirective)
