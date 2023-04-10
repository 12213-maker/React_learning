//静态成员：可以直接通过class来访问，class.time

class Student {
  static time: string = '20:00';
  static getTime() {
    console.log(this.time);

  }
}

console.log(Student.time);
Student.getTime();
