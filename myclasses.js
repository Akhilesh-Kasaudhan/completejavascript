// through classes



class User{
    constructor(username,password,email){
        this.username=username;
        this.password=password;
        this.email=email;
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        // return `${this.username.toUpperCase()}`
        console.log(`${this.username.toUpperCase()}`)
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}
// const chai=new User("chai","chai@gmail.com","123")
// console.log(chai.encryptPassword());//"ch
// console.log(chai.changeUsername()) //CHAI

//through function

// function  createUser(username,passWord,email) {
//     this.username=username
//     this.password=passWord
//     this.email = email
// }
// createUser.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }
// createUser.prototype.changeUsername=function(){
//     return `${this.username.toUpperCase()}`
// }

// const tea=new createUser("tea","123","tea@gmail.com");
// console.log(tea.encryptPassword());// "123abc"
// console.log(tea.changeUsername());//TEA

// inheritancebyclasses

class Admin extends User{
    constructor(username, password, email){
        super(username, password, email);
    }
    addUser(){
        return `Adding new user...${this.username}`;
    }
}

const admin=new Admin ("admin", "456", "admin@gmail.com");
// console.log(admin);
// console.log(admin.addUser());
admin.logMe();

const masalaChai=new User("masalachai");
masalaChai.changeUsername();
console.log(admin===masalaChai);
console.log(Admin === User);
console.log(admin instanceof User);
console.log(admin instanceof Admin);