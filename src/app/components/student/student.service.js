export class StudentService {
  constructor() {
    'ngInject';

    this.students = [
      {studentId: 1, groupId: 1, fullName: "Ivan Yarymovych", email: "ivan11yarymovych@gmail.com", age: 23},
      {studentId: 2, groupId: 1, fullName: "Vlad Dzhus", email: "vlad.dzhus@gmail.com", age: 24},
      {studentId: 3, groupId: 1, fullName: "Natali Kovalchuk", email: "nata@gmail.com", age: 22},
      {studentId: 4, groupId: 2, fullName: "Orest Denyshyn", email: "o.d.@gmail.com", age: 21},
      {studentId: 5, groupId: 2, fullName: "Slava Shkilnyi", email: "s.s.@gmail.com", age: 24},
      {studentId: 6, groupId: 2, fullName: "Roma Chychkevych", email: "roma@gmail.com", age: 22}
    ];
  }

  getStudents() {
    return this.students;
  }
}
