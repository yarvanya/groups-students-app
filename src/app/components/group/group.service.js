export class GroupService {
  constructor() {
    'ngInject';

    this.groups = [
      {
        groupId: 1,
        name: "КТ-5",
        curatorName: "Strepko Ihor",
        students: [
          {studentId: 1, fullName: "Ivan Yarymovych", email: "ivan11yarymovych@gmail.com", age: 23},
          {studentId: 2, fullName: "Vlad Dzhus", email: "vlad.dzhus@gmail.com", age: 24},
          {studentId: 3, fullName: "Natali Kovalchuk", email: "nata@gmail.com", age: 22}
        ]
      },
      {
        groupId: 2,
        name: "АУ-5",
        curatorName: "Phedyna Bohdana",
        students: [
          {studentId: 1, fullName: "Orest Denyshyn", email: "o.d.@gmail.com", age: 21},
          {studentId: 2, fullName: "Slava Shkilnyi", email: "s.s.@gmail.com", age: 24},
          {studentId: 3, fullName: "Roma Chychkevych", email: "roma@gmail.com", age: 22}
        ]
      }
    ];
  }

  getGroups() {
    return this.groups;
  }
}
