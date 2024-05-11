const emptyobj={};

if(Object.keys(emptyobj).length===0){
     console.log("object is empty");
}
// Nullish coalescing Operator(??)



// The nullish coalescing operator is written as two question marks ??.

// As it treats null and undefined similarly, we’ll use a 
// special term here, in this article. For brevity, we’ll say that a value is “defined” when it’s neither null nor undefined.

// The result of a ?? b is:

// if a is defined, then a,
// if a isn’t defined, then b.
// In other words, ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.


// let a=12;
// let b="hello";
// console.log(a??b);//12
// let a=null;
// let b="hello";
// console.log(a??b);//hello 

// The nullish coalescing operator isn’t anything completely new. It’s just a nice syntax to get the first “defined” value of the two.

// We can rewrite result = a ?? b using the operators that we already know, like this:

// result = (a !== null && a !== undefined) ? a : b;
const iceTeaPrice=100;
// iceTeaPrice<=80?console.log("less than 80"):console.log("more than 80");

// ternaryoperator



// const userEmail=[];
// if(userEmail){
//     console.log("Got  user email",userEmail);
// }else{
//    console.log("No User Email")
// }