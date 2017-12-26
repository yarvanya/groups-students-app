import messages from '../../helper/messages';

export function StudentDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/student/student.html',
    controller: StudentController,
    controllerAs: 'studentCntr',
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

  selectStudentForCreating() {
    this.eventName = "Creating";
    this.newStudent = {};
    this.modalParams = {
      eventName: this.eventName,
      model: this.newStudent,
      studentsList: this.studentsList,
      groupsList: this.groupsList,
      validation: this.createStudentFieldValidation,
      action: this.createStudent,
      renderStudentsData: this.renderStudentsData,
      alert: this.alert,
      alertOpen: this.openStudentAlert,
      buttonName: "Create"
    };
  }

  selectStudentForEditing(student) {
    this.eventName = "Editing";
    this.clickedStudent = student;
    this.editedStudent = Object.assign({}, this.clickedStudent);
    this.modalParams = {
      eventName: this.eventName,
      model: this.editedStudent,
      clickedStudent: this.clickedStudent,
      studentsList: this.studentsList,
      groupsList: this.groupsList,
      validation: this.editStudentFieldValidation,
      action: this.updateStudent,
      renderStudentsData: this.renderStudentsData,
      alert: this.alert,
      alertOpen: this.openStudentAlert,
      buttonName: "Update"
    };
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

  createStudentFieldValidation(student, group) {
    if (this.model.name && this.model.email && this.model.age && group) {
      return false;
    }
    return true;
  }

  editStudentFieldValidation(student) {
    this.studentForValidate = Object.assign({}, this.clickedStudent, student);
    if (this.studentForValidate.name
      && this.studentForValidate.email
      && this.studentForValidate.age
      && this.studentForValidate.group) {
      return false;
    }
    return true;
  }

  createStudent(student, group) {
    const studentListLength = this.studentsList.length;
    const assignStudent = Object.assign({}, {id: this.studentsList[studentListLength - 1].id + 1, groupId: group.id }, this.model);
    this.studentsList.push(assignStudent);
    this.renderStudentsData();
    this.alertOpen(`${messages.createStudent} ${this.model.name}`);
    this.model = {};
  }

  updateStudent(editedStudent, group) {
    if (group) {
      editedStudent.groupId = group.id;
    }
    this.clickedStudent = Object.assign(this.clickedStudent, editedStudent);
    this.renderStudentsData();
    this.alertOpen(`${messages.updateStudent} ${this.model.name}`);
  }

  deleteStudent(student) {
    this.service.splice(this.service.indexOf(student), 1);
    this.alertOpen(`${messages.deleteStudent} ${student.name}`);
  }
}
