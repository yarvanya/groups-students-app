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
  constructor(groups, students, $alert) {
    'ngInject';

    this.disabledUpdateButton = true;
    this.groupsList = groups.groups;
    this.studentsList = students.students;
    angular.forEach(students.students, (student) => {
      angular.forEach(groups.groups, (group) => {
        if (student.groupId === group.id) {
          student.group = group.name;
        }
      });
    });
    this.newStudent = {};
    this.studentAlert = $alert;
  }

  selectStudent(student) {
    this.clickedStudent = student;
  }

  editStudentFieldValidation(student) {
    if (student.fullName && student.email && student.age) {
      this.clickedStudent = student;
      this.disabledUpdateButton = false;
    } else {
      this.disabledUpdateButton = true;
    }
  }

  openStudentAlert(content) {
    this.studentAlert({
      title: 'Success!',
      content: content,
      type: 'success',
      duration: 4
    });
  }

  createStudentFieldValidation(group) {
    if (this.newStudent.fullName && this.newStudent.email && this.newStudent.age && group) {
      return false;
    }
    return true;
  }

  createStudent(group) {
    const studentListLength = this.studentsList.length;
    console.log("group: ", group);
    const assignStudent = Object.assign({}, this.newStudent, {studentId: this.studentsList[studentListLength - 1].studentId + 1, groupId: group.groupId, })
    console.log("assignStudent: ", assignStudent);
    this.studentsList.push(assignStudent);
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
