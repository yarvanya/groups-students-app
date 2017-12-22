import messages from '../../helper/messages';

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
  constructor(groups, students, $alert, $scope) {
    'ngInject';

    this.groupsList = groups;
    this.studentsList = students;
    this.renderStudentsData();
    this.newStudent = {};
    this.editedStudent = {};
    this.alert = $alert;
    this.studentScope = $scope;
  }

  renderStudentsData() {
    angular.forEach(this.studentsList, (student) => {
      angular.forEach(this.groupsList, (group) => {
        if (student.groupId === group.id) {
          student.group = group.name;
        }
      });
    });
  }

  selectStudentForEditing(student) {
    this.clickedStudent = student;
    this.editedStudent = Object.assign({}, this.clickedStudent);
  }

  selectStudentForDeleting(student) {
    this.modalParams = {
      title: "student",
      item: student,
      service: this.studentsList,
      action: this.deleteStudent,
      alert: this.alert,
      alertOpen: this.openStudentAlert
    };
    this.studentScope.$broadcast('pleaseOpenDeleteModal');
  }

  openStudentAlert(content) {
    this.alert({
      title: 'Success!',
      content: content,
      type: 'success',
      duration: 4
    });
  }

  createStudentFieldValidation(group) {
    if (this.newStudent.name && this.newStudent.email && this.newStudent.age && group) {
      return false;
    }
    return true;
  }

  updateStudentFieldValidation(editedStudent) {
    this.clickedStudentForValidate = Object.assign({}, this.clickedStudent, editedStudent);
    if (this.clickedStudentForValidate.name && this.clickedStudentForValidate.email && this.clickedStudentForValidate.age) {
      return false;
    }
    return true;
  }

  createStudent(group) {
    const studentListLength = this.studentsList.length;
    const assignStudent = Object.assign({}, {id: this.studentsList[studentListLength - 1].id + 1, groupId: group.id }, this.newStudent);
    this.studentsList.push(assignStudent);
    this.renderStudentsData();
    this.openStudentAlert(`${messages.createStudent} ${this.newStudent.fullName}`);
    this.newStudent = {};
  }

  updateStudent(editedStudent) {
    this.clickedStudent = Object.assign(this.clickedStudent, editedStudent);
    this.openStudentAlert(`${messages.updateStudent} ${this.clickedStudent.fullName}`);
  }

  deleteStudent(student) {
    if (this.service) {
      this.service.splice(this.service.indexOf(student), 1);
      this.alertOpen(`${messages.deleteStudent} ${student.name}`);
    } else {
      this.studentsList.splice(this.studentsList.indexOf(student), 1);
      this.openStudentAlert(`${messages.deleteStudent} ${student.name}`);
    }
  }
}
