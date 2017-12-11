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

  openGroupAlert() {
    return this.groupAlert({
      title: 'Success!',
      content: 'You have just successfully created new group!',
      type: 'success',
      duration: 5
    });
  }

  createNewGroup() {
    const assignGroup = Object.assign({}, this.newGroup, {students: []});
    this.groupsList.push(assignGroup);
    this.openGroupAlert();
  }

}
