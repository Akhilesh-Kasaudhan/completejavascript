// console.log(10+"5")
// console.log("5"+10)
// console.log(" "+0)
// console.log(true+true);
// console.log(true+false);
// console.log(true-false);
// console.log(false-true);

// console.log(null + undefined);
// console.log(NaN===NaN);
// console.log(isNaN(undefined));
// console.log(isNaN({}));
// var obj = {a: 1};
// console.log(obj == "object");
// console.log(obj === "object");

//------------------------------
// var x = 10;
// var y = "20";
// console.log(x + y); //1020
// console.log("" + x + y); //"1020"
// console.log(y + x); //2010
// console.log("" + y + x); //"2010"
// //-----------------------------
// var arr = [1, 2 ,3];
// console.log(Array.isArray(arr));//undefined
// console.log(arr[4]); //undefined
// console.log(typeof arr[4]); //undefined
// console.log(Object.prototype.toString.call(arr[4])); //[object Undefined]
// //-------------------------------
// function sum (a, b){
//     return a + b;
// }
// console.log(sum(5,  7)); //12
// console.log(sum(5, "7")); //57
// console.log("5" + sum(5,"7")); //"557"
// console.log(10-"5");

// Map()---------------------------------

// let arr=[25,36,49,64,81];

// let newArr=arr.map((elem)=>{
//     return Math.sqrt(elem);
// })
// console.log(newArr);

// let arr=[2,3,4,6,8];
// let newArr=arr.map((elem)=>{
//     return elem*2
// }).filter((val)=>{
//     return val>10
// })
// console.log(newArr);
// -------------------------------------------------------
// reduce method---------------
// let arr=[1,2,3,4,5];
// console.log(arr.reduce((accumulator,currentValue) => accumulator* currentValue)) //120

//---------------------------
// const arr=[
//         ['zon1','zone2'],
//         ['zone3','zone3'],
//         ['zone5','zone6']
// ];
// let flattened = arr.reduce((accum,currentVal)=>{
//            return accum.concat(currentVal);
// })
// console.log(flattened);

// Date---------------------------
// let today=new Date();
// console.log(today);
// console.log(new Date());
// let birthday=new Date('1995/08/15');
// console.log(birthday);
// // console.log(today-birthday);
// var timeDiff=Math.abs(today-birthday);
// // console.log(timeDiff);
// // console.log(timeDiff/(1000*3600*24))
// var diffDays=Math.ceil(timeDiff/(1000*3600*24));  
// console.log("age is "+diffDays+" days");
// console.log(new Date().toLocaleString());
// console.log(new Date().toString());

// console.log(Date.now())

// let currD=new Date(2024, 04, 04, 15, 38,00,00)
// console.log(currD.toLocaleString());

// var d=new Date(dateString);
// var d=new Date("October 19,2024 11:30:00")
// // console.log((d.getDay()+ " " +d.getMonth()+" "+ d.getDate() + ", " + d.getFullYear().toString()));
// console.log(d);
// console.log(d.toLocaleString());
// console.log(d.toString());

// var d=new Date()
// // var d = new Date(86400000*365);
// console.log(d.toLocaleDateString());
// console.log(d.toLocaleTimeString());
// console.log(d.toLocaleString());

// math--------------------
// console.log(Math.floor(-4.7));//5
// console.log(Math.trunc(99.9))//99
// console.log(Math.ceil(-99.9));//99
// var x=-10;
// console.log(x==-10 && -10===x);//true
// console.log(x!=9 &&  9!==x);//true
// console.log(x<9 && 9>x)//true
// console.log(!(x<=9 || 9>=x));//false

// //random number--------------
// console.log(Math.round(Math.random()))//between 0 and 1
// console.log(Math.round(Math.random()) * 10)// between 0 and 10
// console.log(Math.round(Math.random()) % 2 == 0 ? 'even' : 'odd') // even or odd

// //max min---------------------
// var nums=[1,2,3,4,5];
// console.log(Math.min(...nums));//1
// console.log(Math.max(...nums));//5

// //clamping a value-----------
// function clamp(val, minVal, maxVal){
//     return Math.min(Math.max(val, minVal), maxVal);
// }

// console.log(clamp(10,-5,15));//10
// console.log(clamp(-10,-5,15));//-5
// console.log(clamp(16,-5,15));//15
