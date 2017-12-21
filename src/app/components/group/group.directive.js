import messages from '../../helper/messages';

export function GroupDirective() {
  'ngInject';

  let directive = {
    restrict: 'EA',
    templateUrl: 'app/components/group/group.html',
    controller: GroupController,
    controllerAs: 'groupCntr',
    bindToController: true
  };

  return directive;
}

export class GroupController {
  constructor(groups, students, $alert, $scope) {
    'ngInject';

    this.groupsList = groups;
    this.studentsList = students;
    this.newGroup = {};
    this.editedGroup = {};
    this.groupAlert = $alert;
    this.groupScope = $scope;
    this.modalParams = {};
  }

  selectGroupForEditing(group) {
    this.clickedGroup = group;
    this.editedGroup = Object.assign({}, this.clickedGroup);
  }

  selectGroupForDeleting(group) {
    this.modalParams = {
      title: "group",
      item: group,
      service: this.groupsList,
      action: this.deleteGroup,
      alert: this.groupAlert,
      alertOpen: this.openGroupAlert
    };
    this.groupScope.$broadcast('pleaseOpenDeleteModal');
  }

  openGroupAlert(content) {
    return this.alert({
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
    this.service.splice(this.service.indexOf(group), 1);
    this.alertOpen(`${messages.deleteGroup} ${group.name}`);
  }

}
