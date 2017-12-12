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
  constructor(groups, $alert) {
    'ngInject';

    this.groupsList = [];
    this.newGroup = {};
    this.getGroupList(groups);
    this.groupAlert = $alert;
  }

  getGroupList(groups) {
    this.groupsList = groups.getGroups();
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

}
