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
    this.getGroupList(groups);
  }

  getGroupList(groups) {
    this.groupsList = groups.getGroups();
  }
}
