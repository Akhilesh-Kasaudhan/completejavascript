// function userLogedIn(username){
//     return`${username} just logged in`
// }
// console.log(userLogedIn("adarsh"));
// console.log(userLogedIn());
// function userLogedIn(username){
//     if(!username){
//         console.log("Enter a valid username")
//     }
//     return `${username} just logged in`
// }
// console.log(userLogedIn("adarsh"));
// console.log(userLogedIn());
// function userLogedIn(username="sam"){
//     if(!username){
//         console.log("Enter a valid username")
//     }
//     return `${username} just logged in`
// }
// console.log(userLogedIn());


// restoperater
// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200,2,33,45,21,2135));
// const user={
//     product:"Pickel",
//     price:122
// }

// function handleObject(anyobject) {
//     console.log(`product is ${anyobject.product} and price is ${anyobject.price}`); 
    
// }
// handleObject(user);
// const myNewArray=[400,699,467];
// function returnValue(getarray){

//     return getarray[1]
// }
// console.log(returnValue(myNewArray));


let a=100;
if(true){
    let a=10;
    let b=20;
    var c=30;
    console.log("inner value:"+a)
}
console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username="Akash";

    function two(){
        const website="youtube";
        console.log(username +" loves " +website);
    }
    two();

}
one();
// console.log(username)

// const person={
//     name : "akash",
//     age: 25,
//     welcomemessage: function(){
//         console.log(`${this.name},welcome to the world`);
//         // console.log(this);
//     }
// }
// person.welcomemessage();
// person.name="vikash"
// person.welcomemessage();
// console.log(this); 

// function chai(){
//     console.log(this)
// }
// chai();


// const tea= ()=>{
//     return`you are inside a arrow function`
// }
// console.log(tea());
// // implicit return type arrow function

// const addTwoNum=(num1,num2)=>num1+num2;
// console.log(addTwoNum(3,5));

// explicit return type arrow function
// const multiply = (x , y ) => {return x *y;}
// no need to write inside curly braces  and semi colon because if there is only one statement then we don't have to use curly and the return keyword
// const multiply=(x,y)=>(x*y)
// console.log(multiply(4,6));
// // parameter less arrow function
// const showTime=()=>({username:"Vishal"})
// console.log(showTime());


// iife
// named iife
(function chai(){

    console.log("hello")
})();
((name)=>{
    console.log("code error "+name)
})("akhil");
