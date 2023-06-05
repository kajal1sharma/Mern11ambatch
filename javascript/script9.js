//function callback

//fucntional languages
//braces defines the scope of fucntion or any block





function read(ele,i){
    console.log(ele);
}

let arr=[12,122,23,4,62,6,6,7,6]
// function for_each(fun){
//     for(let i=0;i<arr.length;i++){
//         fun(arr[i],i,arr)
//     }    
// }
// for_each(read);


console.log("/////////////////////////////")

arr.forEach(read);

let read2 = function(ele, index,arr){
    console.log(ele, index,arr)
  
}

arr.forEach(read2);
//anonymous function

console.log(result);
