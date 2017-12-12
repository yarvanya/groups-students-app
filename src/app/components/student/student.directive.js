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
  constructor(groups, $alert) {
    'ngInject';

    this.groupsList = groups.groups;
    this.newStudent = {};
    this.studentAlert = $alert;
  }

  selectStudent(student) {
    this.clickedStudent = student;
  }

  openStudentAlert(content) {
    return this.studentAlert({
      title: 'Success!',
      content: content,
      type: 'success',
      duration: 4
    });
  }

  createStudent(group) {
    const studentListLength = group.students.length;
    const assignStudent = Object.assign({}, this.newStudent, {studentId: group.students[studentListLength - 1].studentId + 1});
    group.students.push(assignStudent);
    this.openStudentAlert(`You have just successfully created new student: ${this.newStudent.fullName}`);
    this.newStudent = {};
  }

  updateStudent(student) {
    this.openStudentAlert(`You have just successfully updated student: ${student.fullName}`);
  }

  deleteStudent(group) {
    group.students.splice(group.students.indexOf(this.clickedStudent), 1);
    this.openStudentAlert(`You have just successfully deleted student: ${this.clickedStudent.fullName}`);
  }
}
