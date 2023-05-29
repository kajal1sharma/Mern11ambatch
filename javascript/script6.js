
console.log("hello script6")


//data is changing  logic remains the same

//collection of similar data

let marks1 =12;
let marks2 =34;
let marks3= 45;
//manageability complicated


let marks = [1,2,3,4,5,6,7];

//array is 0 indexed

// console.log(marks[0]);
// console.log(marks[1]);
// console.log(marks[2]);
// console.log(marks[3]);
// console.log(marks[4]);



for(let i = 0; i<7; i++){
    console.log(marks[i]);
}

//sum of all the elements inside array

let sum=0;
for(let i=0 ; i< marks.length; i=i+1){
    sum =sum + marks[i];
}

console.log("sum of all the elements is = ",sum)

//there is one array in which only one element is repeated 
//twice . find that element;

let arr =[3,2,5,4,8,6,9,16,6];


for(let i =0 ;i <arr.length ; i=i+1){//one by one select each element
    // let ele=arr[i];
    for(let j=i+1 ; j<arr.length ;j=j+1){

        if(arr[i]===arr[j]){
            console.log("ele is : ", arr[i]);
        
        }
    }
}

//there is one element that is repeated threee times find that element
let arr2 =[3,2,6,4,8,6,9,16,6];

for ( let i=0 ;i<arr2.length ; i++ ){

    for(let j=i+1;j<arr2.length ; j++){

        for(let k=j+1;k<arr2.length ;k++){

            if(arr2[i]===arr2[j] && arr2[j]===arr2[k]){
                console.log(arr2[i]);
            }
        }
    }
}

//find the smallest element in the array
let num =[3,2,6,4,8,6,9,16,6];

let min = num[0];
for(let i=0 ; i< num.length;i++){

    if(min>num[i]){
        min=num[i];
    }
}

console.log(min);

//Ques 1 :find the second largest element in the array .given all the elements are distint\

let numarr = [56, 73, 55, 79,76,21,57];

//Ques 2 sort this array in ascending order
//[56, 73, 55, 79,76,21,57] =>answer [21, 55, 56,57,73, 76, 79]

//ques 3 : [12 ,3 ,4 ,5 ,6 ,6 ,76 ,7] =>ans  [6,76,7,12,3,4,5,6,], k=3


















