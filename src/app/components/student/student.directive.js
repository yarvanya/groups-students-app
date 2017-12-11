export function StudentDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/student/student.html',
    controller: StudentController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

export class StudentController {
  constructor(groups) {
    'ngInject';

    this.groupsList = groups.groups;
  }
}
