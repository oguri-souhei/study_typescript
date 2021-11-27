enum School {
  junior = 'junior',
  juniorHigh = 'juniorHigh',
  high = 'high'
}

interface Human {
  name: string
  print(): void
}

class Person implements Human {
  name: string = 'no-name'
  mail: string
  age: number

  constructor(name: string, mail: string = 'no-mail', age: number = -1) {
    this.name = name
    this.mail = mail
    this.age = age
  }

  print():void {
    console.log(this.name)
    console.log(this.mail)
    console.log(this.age)
  }
}

class Student implements Human {
  name: string = 'no-name'
  school: School
  grade?: number

  constructor(name: string, school?: School, grade?: number) {
    this.name = name
    this.school = school
    this.grade = grade
  }

  print():void {
    console.log(this.name)
    console.log(this.school)
    console.log(this.grade)
  }
}