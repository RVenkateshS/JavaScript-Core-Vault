
class User {
    constructor (username,email,password)
    {
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword (){
        return `${this.password}abc`

    }
    
    toUp() {
        return `${this.username.toUpperCase()}`
    }

}

const user1 = new User("Daman","XYZ@gmail.com","123DamanXYZ")
console.log( user1.encryptPassword());
console.log( user1.toUp());


// Behind The Scene:

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());


