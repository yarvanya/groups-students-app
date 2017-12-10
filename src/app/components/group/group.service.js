export class GroupService {
  constructor() {
    'ngInject';

    this.groups = [
      {
        name: "КТ-5",
        curatorName: "Strepko Ihor",
        students: [
          {fullName: "Ivan Yarymovych", email: "ivan11yarymovych@gmail.com", age: 23},
          {fullName: "Vlad Dzhus", email: "vlad.dzhus@gmail.com", age: 24},
          {fullName: "Natali Kovalchuk", email: "nata@gmail.com", age: 22}
        ]
      },
      {
        name: "АУ-5",
        curatorName: "Phedyna Bohdana",
        students: [
          {fullName: "Orest Denyshyn", email: "o.d.@gmail.com", age: 21},
          {fullName: "Slava Shkilnyi", email: "s.s.@gmail.com", age: 24},
          {fullName: "Roma Chychkevych", email: "roma@gmail.com", age: 22}
        ]
      }
    ];
  }

  getGroups() {
    return this.groups;
  }
}
