class User {
    constructor (username){

        this.username = username
    }

    logMe(){
        return ` YOur UserName Is : ${this.username}`
    }
}

const u2 = new User("Daman123")

console.log(u2.logMe());

class Teacher extends User {
    constructor(username,email,password) {
        super(username)
        this.email =email
        this.password = password
        
    }

    addCourse (){
      return  console.log(` A new course was added by ${this.username}`)
    }
}

const T1 = new Teacher("Daman456","xyx@g.com", " qwerty123")
console.log(T1.addCourse());

