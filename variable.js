// let str="Hey JS YOU R amazing";
// let vowels =  ['a', 'e', 'i','o' ,'u'];
// function countVowels(data) {
//     let count =0;
    
//     data.toLowerCase().split("").forEach((ch)=>{
//           vowels.includes(ch) && count++;
//     })

//     return count;
    
// }
// const numOfVowels=countVowels(str);
// console.log(`The number of Vowels in the string is ${numOfVowels}`);


// string intipulation using array methods
// const name ="Akhilesh";
// const accId = 123;
// console.log(`hello my name is ${name} and my account ID is ${accId}.`);

// const str =new String("Rohit is my nick name");
// console.log(typeof str);
// console.log(String(str));
// console.log(str.length);
// console.log(str.charAt(7))
// console.log(str.__proto__);
// console.log(str.toUpperCase());
// console.log(str.includes( "is"));
// console.log(str.substring(4,10));
// console.log(String(str));
// console.log(str.slice(5,-6));
// console.log(str.indexOf( "y")) ;
// console.log(str.trim());
// console.log(str.replace('Rohit','KD'));

// const text= "how are you doing today?";
// const myArr=text.split(" ");
// console.log(myArr);
// console.log(str.substr(0,5));


// arraytuits

let num =["Rohit","Nikhil","akash","vikas","adarsh"];
// console.log(num.length);
// num.push("Saurabh");
// console.log(num);
// num.pop();
// console.log(num);
// num.unshift("naveen");
// console.log(num);
// num.shift();
// console.log(num);
//  var num2=num.slice(1,3);
// console.log(num2);
//  var num3=num.splice(1,3);
//  console.log(num3)
//  console.log(num);
// let num4 =num.slice(4,1);
// console.log(num4);

let marvel_heros=["thor","hulk","ironman"];
let dc_heros=["batman","superman","wonder woman"];
// marvel_heros.push(dc_heros);
// console.log(marvel_heros.push(dc_heros));
// console.log(marvel_heros);
// super_heros=marvel_heros.concat(dc_heros);
// console.log(super_heros);
// console.log(...marvel_heros,...dc_heros);

const another_array=[1,2,3,[4,5],6,[7,8,[9,0]]];
const flattened_array=another_array.flat(Infinity);
// console.log(flattened_array);
// console.log(Array.isArray("Akhilesh"));
// console.log(Array.from("Akhilesh"));
 

let score1=100;
let score2=200;
let score3=300;

// console.log(Array.of(score1,score2,score3));

// console.log(Array.from({name:"Akhilesh"}));//interesting

// objecttuits

// const mySym= Symbol("key1");
// console.log(mySym);

// let obj ={
//     name:"Akhilesh",
//     age:20,
//     location:"gurugram",
//     email:"akhilesh@gmail.com",
//     isLoggedIn:false,
//     LastLoginDays:["Monday","Saturday"],
//     "full name":"Akhilesh Kasaudhan",
//     [mySym]:"myKey1"

// }

// console.log(obj.name);
// console.log(obj[email]);
// console.log(obj["email"]);
// // console.log(obj.full name)
// console.log(obj["full name"]);
// console.log(obj.LastLoginDays[0]);
// console.log(obj["LastLoginDays"][1]);
// console.log(obj[mySym]);
// delete obj.age;
// console.log(obj.age);
// obj.email="akhil@google.com";
// console.log(obj["email"]);
// Object.freeze(obj);
// obj.name="Rohit";
// console.log(obj);
// obj.greeting=function(){
//     console.log("Hello!");
// }
// console.log(obj.greeting());
// obj.greetingTwo=function(){
//     console.log(`hello!${this.name}`);
// }
// obj.greetingTwo();


const tinderObject= new Object();
// console.log(tinderObject);
tinderObject.id="123ert";
tinderObject.name="John Doe";
tinderObject.gender="male";
tinderObject.height = 5.6;
// console.log(tinderObject);
const target={a:1,b:2};
const source={
    b:4,c:5
};
const returnedTarget=Object.assign(target,source);
// console.log(returnedTarget);
// console.log(returnedTarget === target);
const user=[
    {
        id: "user_987",
        name:"Akhil Reddy",
        age : 25,
    },
    {
        id: "user_987",
        name:"Akhil Reddy",
        age : 25,
    },
    {
        id: "user_987",
        name:"Akhil Reddy",
        age : 25,
    }
]
    
// console.log(user[1].name);

const corse={
    course:"js in hindi",
    courseFee:"999",
    corseInstructor:"Mr. Hitesh",
    courseContent:{
        dataType:"object",
        content:{
            topic:"Variables and Data types"
        }
        }
};
// course.corseInstructor
// const {corseInstructor}=course;
// console.log(corseInstructor);
// const {corseInstructor:instructor}=course;
// console.log("Instructor Name is "+ instructor);
const {course,courseFee:fee,corseInstructor}=corse;
// console.log(fee);
// const {courseId}=corse;
// console.log(courseId);//undefined
const {courseId=['defaultValue'] }=corse;
// console.log(courseId);
// console.log(corse);
const {courseContent:{content:topic}}=corse;
// console.log(topic);


