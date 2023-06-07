console.log("day 11 javascript")

// function print(){
//     console.log("hello world")
// }
// let result = print()
// console.log(result);

let arr4 = [32,89,90,76,65,36,30,28,92]
let total = arr4.reduce((prev, ele)=>{
    if(ele>40){
        return prev+1;
    }
    return prev;
},acc=0)


console.log(total)


let arr2 =["sad@gmail.com","sdf@yahoo.mail","gh","pggf"]





//let resultstr= arr2.splice(3,1,"trtrtrt","tdrrdd");
//console.log(resultstr)
let arr=[1,2,4,5,5,3,2]
let result =arr.reduce((previousValue,ele, index)=>{
    return ele+previousValue
},acc=10)

let arrresult = arr.map((ele, i)=>{
    return ele>2
})
console.log(arr)
console.log(arrresult)


// let arrresult= arr.splice(4);
// arr.splice(2,4,3,4,5,5)
// arr.splice(2,5,23,34,23,4,4,3,2,3,2,32)
// console.log(arr);
// console.log(arrresult)

// let resultarr = arr.slice(2,4);
// console.log(arr)
// console.log(resultarr);

// let resultarr = arr.slice(-4,-2);
// console.log(arr)
// console.log(resultarr);

// let resultarr = arr.slice();
// console.log(arr)
// console.log(resultarr);





