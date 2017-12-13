export class GroupService {
  constructor() {
    'ngInject';

    this.groups = [
      {
        id: 1,
        name: "КТ-5",
        curatorName: "Strepko Ihor"
      },
      {
        id: 2,
        name: "АУ-5",
        curatorName: "Phedyna Bohdana"
      }
    ];
  }

  getGroups() {
    return this.groups;
  }
}
