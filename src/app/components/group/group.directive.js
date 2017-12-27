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
    this.alert = $alert;
    this.groupScope = $scope;
    this.modalParams = {};

    angular.forEach(this.studentsList, (student) => {
      student.group = "";
    });
  }

  selectGroupForCreating() {
    this.eventName = "Creating";
    this.newGroup = {};
    this.modalParams = {
      eventName: this.eventName,
      model: this.newGroup,
      groupsList: this.groupsList,
      validation: this.validation,
      action: this.createNewGroup,
      alert: this.alert,
      alertOpen: this.openGroupAlert,
      buttonName: "Create"
    };
  }

  selectGroupForEditing(group) {
    this.eventName = "Updating";
    this.clickedGroup = group;
    this.editedGroup = Object.assign({}, this.clickedGroup);
    this.modalParams = {
      eventName: this.eventName,
      model: this.editedGroup,
      clickedGroup: this.clickedGroup,
      groupsList: this.groupsList,
      validation: this.validation,
      action: this.updateGroup,
      alert: this.alert,
      alertOpen: this.openGroupAlert,
      buttonName: "Update"
    };
  }

  selectGroupForDeleting(group) {
    this.modalParams = {
      title: "group",
      item: group,
      service: this.groupsList,
      action: this.deleteGroup,
      alert: this.alert,
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

  validation() {
     if (this.model.name && this.model.curatorName) {
        return false;
      }
      return true;
  }

  createNewGroup() {
    this.model.name = this.model.name.replace(/\s+/g, ' ');
    this.model.curatorName = this.model.curatorName.replace(/\s+/g, ' ');
    const groupsListLength = this.groupsList.length;
    const assignGroup = Object.assign({},
      {id: this.groupsList[groupsListLength - 1].id + 1},
      this.model
    );
    this.groupsList.push(assignGroup);
    this.alertOpen(`${messages.createGroup} ${this.model.name}`);
  }

  updateGroup(editedGroup) {
    editedGroup.name = editedGroup.name.replace(/\s+/g, ' ');
    editedGroup.curatorName = editedGroup.curatorName.replace(/\s+/g, ' ');
    this.clickedGroup = Object.assign(this.clickedGroup, editedGroup);
    this.alertOpen(`${messages.updateGroup} ${this.model.name}`);
  }

  deleteGroup(group) {
    this.service.splice(this.service.indexOf(group), 1);
    this.alertOpen(`${messages.deleteGroup} ${group.name}`);
  }
}
