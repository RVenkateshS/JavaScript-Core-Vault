class User {
    constructor(email,password) {
        this.email = email;
        this.password = password;

        
    }

    get password (){
        return this._password.toUpperCase()
    }

    set  password (val) {
         this._password = val
    }

    get email (){
        return this._email.toUpperCase()
    }

    set  email (val) {
         this._email = val        // We never return setters
    }
}


const my1 = new User("my@123.ai","abc")
console.log(my1.password);
console.log(my1.email);

