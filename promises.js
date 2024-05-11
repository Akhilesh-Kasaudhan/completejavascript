// const promiseOne =new Promise(function(resolve,reject){
//     //Do an async task
//     //DB Calls.cryptography,Network Calls
//     setTimeout(function(){
//         console.log("Async task is completed");
//         resolve();
//     },1000)
// });

// promiseOne.then(function(){
//     console.log("Promise One is resolved")
// })






// new  Promise((resolve, reject)=>{
//     setTimeout(function() {
//         console.log( "Resolving the second promise");
//         resolve()
//     },1000)
// }).then(function(){
// console.log("I am inside then of Second Promise ");
// })

// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"chai",email:"chai@example.com"})
//     },1000)
// })
// promiseThree.then(function(user){
//     console.log(user)
// })





//Chaining Promises
// const promiseFour=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         let error=false;
//         if(!error){
//             resolve({username:"adarsh",password:"123"})
//             }else{
//                 reject('Invalid Credentials')
//             }
//     },1000)
   
// })

// promiseFour
// .then(function(data){
//     console.log(`User Logged in `)
//     return data.username;
// })
// .then((username)=>{
//     console.log(username)
// }) 
// .catch(function(err){
//     console.log(`Error:${err}`);
// }).finally(()=>{
//     console.log("the promise is either resolved or rejected")
// })




// const promiseFive= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//           let error=true;
//           if(!error){
//             resolve({username:"adarsh",password:"123"})
//           }else{
//             reject("Username does not exist");
//           }
//     },1000)
// })

//     async function consumePromiseFive(){
// try{
//     const response=await promiseFive
//     console.log(response)
// } catch (error) {
// console.log(error) 
// }
//     }
//    consumePromiseFive();


   async function getAllUsers(){
    try{
        const response =await fetch('https://jsonplaceholder.typicode.com/users')
        console.log(response.statusText);
        // const data=await response.json();

        // console.log(data);
    }catch(error){
        console.log("E:",error)
    }
   }
// getAllUsers();
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>console.log(data))
.catch((error)=>{
    console.log(`Error in fetch ${error}`)
})