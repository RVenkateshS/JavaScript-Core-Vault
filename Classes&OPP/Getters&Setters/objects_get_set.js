
    const User = {
        _email: 'v@sh.com',
        _password: "abc",


            get email(){
                return this._email.toUpperCase()
            },

        set email(value){
            this._email = value
        }
    }

    const my3 = Object.create(User)
    console.log(my3.email);