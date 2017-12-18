import messages from '../../helper/messages';

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

    this.groupsList = groups;
    this.studentsList = students;
    this.newGroup = {};
    this.editedGroup = {};
    this.groupAlert = $alert;
  }

  selectGroup(group) {
    this.clickedGroup = group;
    this.editedGroup = Object.assign({}, this.clickedGroup);
  }

  openGroupAlert(content) {
    return this.groupAlert({
      title: 'Success!',
      content: content,
      type: 'success',
      duration: 4
    });
  }

  createGroupFieldValidation() {
    if (this.newGroup.name && this.newGroup.curatorName) {
      return false;
    }
    return true;
  }

  updateGroupFieldValidation(editedGroup) {
    this.clickedGroupForValidate = Object.assign({}, this.clickedGroup, editedGroup);
    if (this.clickedGroupForValidate.name && this.clickedGroupForValidate.curatorName) {
      return false;
    }
    return true;
  }

  createNewGroup() {
    const groupsListLength = this.groupsList.length;
    const assignGroup = Object.assign({},
      {id: this.groupsList[groupsListLength - 1].id + 1},
      this.newGroup
    );
    this.groupsList.push(assignGroup);
    this.openGroupAlert(`${messages.createGroup} ${this.newGroup.name}`);
    this.newGroup = {};
  }

  updateGroup(editedGroup) {
    this.clickedGroup = Object.assign(this.clickedGroup, editedGroup);
    this.openGroupAlert(`${messages.updateGroup} ${this.clickedGroup.name}`);
  }

  deleteGroup(group) {
    this.groupsList.splice(this.groupsList.indexOf(this.clickedGroup), 1);
    this.openGroupAlert(`${messages.deleteGroup} ${group.name}`);
  }
}
