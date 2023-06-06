//function callback

//fucntional languages
//braces defines the scope of fucntion or any block





// function read(ele,i){
//     console.log(ele);
// }

// let arr=[12,122,23,4,62,6,6,7,6]
// function for_each(fun){
//     for(let i=0;i<arr.length;i++){
//         fun(arr[i],i,arr)
//     }    
// }
// for_each(read);


// console.log("/////////////////////////////")

// arr.forEach(read);

// let read2 = function(ele, index,arr){ 
//     console.log(ele+"==>");
// }

// arr.forEach(read2);
// //anonymous function



// function read(ele, index, arr){
//     console.log(ele,index)
// }

// read(12,2);
// read(14,34);
// read(15,34);

// let arr=[1,2,3,4,5,6];

// arr.forEach(read);


// function for_each(read){
//     for(let i=0;i<arr.length;i=i+1){
//         read(arr[i],i, arr);
//     }
// }
// for_each(read);

// let arr = [12,13,16,18];

// function every_imp(fnc)
// {
//     for(let i=0;i<arr.length;i++){
//         let bool=fnc(arr[i], i, arr);
//         if(bool===false){
//             return false;
//         }
//     }
//     return true;
// }
// let result = every_imp(function read(ele, index, arr){
//     if(ele%2==0){
//       return true;
//     }
//     else{
//       return false;
//     }
// })




let result = arr.every(function read(ele, index, arr){
      if(ele%2==0){
        return true;
      }
      else{
        return false;
      }
})

console.log(result);








function print(index , ele, str){
    console.log(index, ele, str);
    if(index>5){
        return ele;
    }
    else{
        return str;
    }
}


//let result  = print(12,34,"hellow world");//fucntion call is an expression 
console.log(print(12,34,"hellow world"));











