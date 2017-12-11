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
  constructor(groups) {
    'ngInject';

    this.groupsList = [];
    this.newGroup = {};
    this.getGroupList(groups);
  }

  getGroupList(groups) {
    this.groupsList = groups.getGroups();
  }

  createNewGroup() {
    const assignGroup = Object.assign({}, this.newGroup, {students: []});
    this.groupsList.push(assignGroup);
  }

}
