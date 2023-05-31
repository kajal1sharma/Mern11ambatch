// //function declaration
// function print(){
//     let a=90;
//     let b=80;
//     console.log( "output of print fucntion",a+b);
// }

// print();


// //fucntion expression
// let str="asfdsadf";
// let read = function(){
//     let c=89;
//     let d=34;
//     console.log("output of read function",c*d);
// }

// read();


//arrow function 

// let printIt = ()=>{
//     let r=23;
//     let m=56;
//     console.log("arrow fucntion out put is ", r-m)
// }


// printIt()


// let printIt  =  ()=>{
//     let a=90;
//     let b=45;
//     return a+b;
// }
// let result =printIt();
// console.log(result)

// let ans2 =()=>{
//     return "this an arrow fucntion"
// }

// let ans = ()=>"this is an arrow fucntion";

// let str= ans()
// console.log(str)

//single argumnet
// let doIT = num=>{
    
//     return num
// };
// let res= doIT(78);
// console.log(res)

// let doIt2 =(num, num2)=>{
//     let x=num+num2
//     return x;

// }

// let res2= doIt2();

// function sumArr(arr){

//     let sum=0;
//     for(let i=0;i<arr.length;i=i+1){
//         sum=sum+arr[i];
//     }

//     return sum;
// }
// let arr=[1,2,3,4,5,5]
// let sum =sumArr(arr)
// console.log(sum);


function add(a,b){
    let c=a+b
    return c;
}

function print(fn){

    let result =fn(45,66);
    console.log(result);

}

print(add)















