for(let i=0;i<=10;i++){
    // console.log(`Outer loop value:${i}`);
    for(let j=0;j<=10;j++){
        // console.log(i+'*'+j+"="+(i*j));  
    }
}

// for (let index = 0; index <= 20; index++) {
//     if(index==5){
//         console.log("5 is didected");
//         break
//     }
//     console.log(index);
    
// }
// for (let index = 0; index <= 20; index++) {
//     if(index==5){
//         console.log("5 is didected");
//         continue
//     }
//     console.log(index);
    
// }

// let index=0;
// while(index<=10) {
//     console.log('Loop Value:'+index);
//     index=index+2;
// }

let arr1=[1,3,4,6];
let arr=0;
while(arr<arr1.length){
    // console.log(arr1[arr]);
    arr++;
}

// forofloop-------------------------------------------------------------

for (const num of arr1) {
    // console.log(num);
    
}

// it prints each char of  the string using a loop
let greetings="hello world!";
for (const greets of greetings) {
    if(greets==" ")
    continue;
    // console.log(greets);
    
}

// maps in js-----------------------------------------------------

const map=new Map();
map.set('IN',"india");
map.set('USA',"United States Of America");
map.set('UAE',"united arab emirate");
map.set('FR',"france");
// map.set('FR',"france");
// console.log(map);
for (const [key, value] of map) {
    // console.log(key+':-'+value); 
    
}

// forinloop----------------------------------------------------

const myobj={
    js:"javascript",
    cpp: "c++ programming language",
    rb:"ruby",

}
// for (const key in myobj) {
//     console.log(key);
// }
// for (const key in myobj) {
//    console.log(`${key}: ${myobj[key]}`);
// }

const programming=["js",'cpp','java'];
for (const key in programming) {
    // console.log(programming[key]);
}

// forEachloop-----------------------------------------------------


const coding=["js","ruby","java","cpp"];
// coding.forEach(function(val){
// //  console.log(val);
// })
// coding.forEach((item)=>{
//     console.log(item)
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })
const myCoding=[
    {lang:'python',version:'3.8'},
    {lang:'java',version:'14'},

];
myCoding.forEach((key)=>{
//    console.log(key.lang);
})


const values=coding.forEach((item)=>{
    // console.log(item);
    return item;
})
// console.log(values);

// filter method ---------------

// const myNums=[1,2,3,4,5,6,7,8,9]
// let evenNums = myNums.filter((num)=> num%2===0 )
// let evenNums = myNums.filter((nums)=>{
//     nums%2===0
// })
// console.log(evenNums);

// withforEachloop 
// let evenNums=[]
// myNums.forEach((num)=>{
//     if (num%2===0) evenNums.push(num)
// })
// console.log(evenNums);


// map() method--------------------------------------------
// const myNums=[1,2,3,4,5,6,7,8];
// const newNums=myNums.map((num)=>num+10)
// const newNums=myNums.map((num)=>{return num+10});
// const  newNums=myNums
//                .map((num)=>num*10)
//                .map((num)=>num+1).filter((num)=>num/10<5 );
// console.log(newNums);



// reduce() method-------------------------------------------

// const myNums=[1,2,3,4,5,6,7,8];
// const myTotal=myNums.reduce(function(acc,currval){
//     console.log(`acc:${acc} currval:${currval}`)
//       return acc+currval;
// },0)

// const myTotal=myNums.reduce((acc,currval)=>acc+currval,2)
// console.log(myTotal);

const shoppingCart=[
    {
        itemName:"js course",
        price:3999
    }, {
        itemName:"mobile dev course",
        price:5999
    },
    {
        itemName:"DS course",
        price:12999
    },
]
let totalPrice = shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log("total Price is : ",totalPrice);

// sortmethod----------------------------------------------

const score=[100,330,2,70];
// score.sort();---[ 100, 2, 330, 70 ]
// score.sort((a,b)=>a-b);---->[ 2, 70,  100, 330 ]
// score.sort((a,b)=> b - a);----- [ 330, 100, 70, 2 ];
// console.log(score);
// ------------------------------------------------------------------
// const number=21;
// // console.log(number.toString());
// console.log(number.toString(2));

// console.log(typeof (number));
const words = ["apple", "banana", "orange", "grapefruit"];

const longWords = words.filter((word) => word.length > 6);

console.log(longWords);