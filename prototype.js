
//new keyword


// function createUser(username,score){
//     this.username=username;
//     this.score=score;
// }
// createUser.prototype.increment=function(){
//     this.score++;
// }
// createUser.prototype.printMe=function(){
//     console.log(`price is:${this.score}`)
// }
// const chai=new createUser("chai",25);
// const tea= new createUser("tea",250);
// chai.printMe`()`;// price is:25
// console.log(chai)
// tea.increment();
// tea.printMe() //price is:251

//console.log(tea)  // User { username: 'tea', score:  251 }

//prototype
let myName="Akhilesh     ";
// console.log(myName.length);
// if(){
//     let extraChars=myName-"              ".length;
//     myName=myName.slice(0,extraChars)+"...";
// }else{
//     myName=myName+". ".repeat(8-myName.length);
// }
// console.log(myName);

// console.log(myName.truelength)

String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`True length is:${this.trim().length}`);
}

// myName.trueLength();

// "hitesh".trueLength();

let foo=  function parent(){
     function son(){
        console.log(`${this}`)
     }
     son();
}
console.log(foo());

//call keyword
function SetUserName(username){
    this.username=username;
    console.log("called")
}
function createUser(username,email,userId){
     SetUserName.call(this,username)
    this.email=email
    this.userId=userId
    
  
}
let chai=new createUser("chai","chai@fb.com","123")
console.log(chai);


