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
    this.newStudent = {};
  }

  selectStudent(student) {
    this.clickedStudent = student;
  }

  createStudent(group) {
    group.students.push(this.newStudent);
    this.newStudent = {};
  }

  deleteStudent(group) {
    group.students.splice(group.students.indexOf(this.clickedStudent), 1);
  }
}
