export class StudentService {
  constructor() {
    'ngInject';

    return this.students = [
      {id: 1, groupId: 1, name: "Ivan Yarymovych", email: "ivan11yarymovych@gmail.com", age: 23},
      {id: 2, groupId: 1, name: "Vlad Dzhus", email: "vlad.dzhus@gmail.com", age: 24},
      {id: 3, groupId: 1, name: "Natali Kovalchuk", email: "nata@gmail.com", age: 22},
      {id: 4, groupId: 2, name: "Orest Denyshyn", email: "o.d.@gmail.com", age: 21},
      {id: 5, groupId: 2, name: "Slava Shkilnyi", email: "s.s.@gmail.com", age: 24},
      {id: 6, groupId: 2, name: "Roma Chychkevych", email: "roma@gmail.com", age: 22},
      {id: 7, groupId: 1, name: "Anna Karnasevych", email: "annakar@gmail.com", age: 22}
    ];
  }
}
