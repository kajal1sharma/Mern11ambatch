
function print(fn){
    console.log(fn)
    fn()
}

function read2(){
    console.log("inside read function ")
}
//read2()
let a =function (){
    console.log("inside a function")
}
console.log(a);
a();
print(read2);




// function doSomethingEvenMore(){
//     console.log("Line 4")
//     console.log("Line 5")
//     return 10;
// } 

// function doSomethingMore(){
//     console.log("Line 2");
//     let a=doSomethingEvenMore();
//     console.log(a);
//     return a;
// }
// function doSomething(){
//     let a=doSomethingMore()
//     console.log(a+30);
// }

// doSomething();





// function totalPercentage(sub1 , sub2, sub3, sub4, sub5){

//     let sum =sub1+sub2+sub3+sub4+sub5;
//     let perc = sum/500*100;

//     return perc;

// }
// // function totalSum(sub1 , sub2, sub3, sub4, sub5){

// //     let sum =sub1+sub2+sub3+sub4+sub5;
  

// //     return sum;

// // }

// let result = totalPercentage(34,56,76,65,54);
// let student2= totalPercentage(89,78,98,67,89);

// console.log(student1)
// console.log(student2)

// function printInfo(name, surname, sub1, sub2){
//     let totalMarks = sub1+sub2;

//     let percentage =totalMarks/200*100;

//     console.log(`${name} ${surname} has got ${percentage} %`);


// }

// let result =printInfo("nita","kumari",78,45);
// console.log("result is :",result)
// printInfo("saurabh","verma", 98,78);


// 6 subjects => marks => average (name , 6 sub )=> person has 67 as average 




//console.log("this is script 7")


//let arr = [1, "first string ", true,false, 'c', null, undefined];


//DRY => do repeat yourself

//defining the fucntion
// function sum (){
//     let a =10;
//     let b=20;
//     let c=a+b
//     console.log(c)
// }

//calling the fucntion
// sum();

// function sum (a , b){
//     let c=a+b;
//     console.log(c);
// }

// sum(34,6);
// sum(45,5);
// sum(7,33);
// sum(34,46);
// sum(34,36);

// a=67;
// b=98;
// c=a+b;
// console.log(c)

// a=34;
// b=12;
// c=a+b;
// console.log(c)