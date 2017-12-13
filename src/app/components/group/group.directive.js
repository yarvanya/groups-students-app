export function GroupDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/group/group.html',
    controller: GroupController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

export class GroupController {
  constructor(groups, students, $alert) {
    'ngInject';

    this.groupsList = [];
    this.studentsList = [];
    this.newGroup = {};
    this.getGroupList(groups);
    this.getStudentList(students);
    this.groupAlert = $alert;
    this.groupStudents = [];

    angular.forEach(students.students, (student) => {
      angular.forEach(groups.groups, (group) => {

        if (student.groupId === group.id) {
          group.students.push(student.fullName);
        }
      });
    });
  }

  getGroupList(groups) {
    this.groupsList = groups.getGroups();
  }
  getStudentList(students) {
    this.studentsList = students.getStudents();
  }

  selectGroup(group) {
    this.clickedGroup = group;
  }

  openGroupAlert(content) {
    return this.groupAlert({
      title: 'Success!',
      content: content,
      type: 'success',
      duration: 4
    });
  }

  createNewGroup() {
    const groupsListLength = this.groupsList.length;
    const assignGroup = Object.assign({},
      this.newGroup,
      {groupId: this.groupsList[groupsListLength - 1].groupId + 1,students: []}
    );
    this.groupsList.push(assignGroup);
    this.openGroupAlert(`You have just successfully created new group: ${this.newGroup.name}`);
    this.newGroup = {};
  }

  updateGroup(group) {
    this.openGroupAlert(`You have just successfully updated group: ${group.name}`);
  }

  deleteGroup(group) {
    this.groupsList.splice(this.groupsList.indexOf(this.clickedGroup), 1);
    this.openGroupAlert(`You have just successfully deleted group: ${group.name}`);
  }
}
