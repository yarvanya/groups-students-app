import { StudentController } from '../app/components/student/student.directive';
let expect = chai.expect;

describe('StudentController', () => {
  let groups = [
    {id: 1, name: "PM-5", curatorName: "J R"},
    {id: 2, name: "TM-5", curatorName: "F B"}
  ];

  let students = [
    {id: 1, groupId: 1, fullName: "John Doe", email: "jd@gmail.com", age: 25},
    {id: 2, groupId: 1, fullName: "Ivan Ivanov", email: "ii@gmail.com", age: 25},
    {id: 3, groupId: 1, fullName: "Harry Potter", email: "hp@gmail.com", age: 25}
  ];

  let $alert = () => {};

  let studentCtrl = new StudentController(groups, students, $alert);

  it('Loads data correctly', () => {
    expect(studentCtrl).to.not.be.undefined;
  });

  it('Should groupsList be an array', () => {
    expect(studentCtrl.groupsList).to.be.an('array');
  });

  it('Should studentsList be an array', () => {
    expect(studentCtrl.studentsList).to.be.an('array');
  });

});
