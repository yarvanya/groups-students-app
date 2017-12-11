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
  constructor(groups, $modal) {
    'ngInject';

    this.groupsList = [];
    this.newGroup = {};
    this.getGroupList(groups);
    this.groupModal = $modal;
  }

  openGroupModal() {
    return this.groupModal({
      "title": "Create new group",
      "content": "Hello Modal"
    });
  }

  getGroupList(groups) {
    this.groupsList = groups.getGroups();
  }
}
