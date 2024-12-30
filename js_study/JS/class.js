class User {
    userName;
    password;
    name;
    email;

    constructor(userName = null, password = null, name = null, email = null) {

        this.userName = userName;
        this.password = password;
        this.name = name;
        this.email = email;
    }

    toString() {

        return `User = {userName: ${this.userName}, password: ${this.password}}`;
    }
}

const user = new User("aaa", "1234");
console.log(user.toString());   // User = {userName: aaa, password: 1234}