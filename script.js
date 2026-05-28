// let age=Number(prompt("enter you age"));
// let salary=Number(prompt("enter your salary"));
// if(age<18)console.log("not eligible");
// else if(age>=18 && salary <20000)console.log("low salary");
// else if(salary>=50000)console.log("high salary");
// else console.log("medium salary");



//question 2 toogle case 

// let word=prompt("enter the word that you want to toggle");
// let result="";

// for(let i=0;i<word.length;i++){
//     if(word[i]==word[i].toLowerCase()){
//         result+=word[i].toUpperCase();
//     }
//     else{
//         result+=word[i].toLowerCase();
//     }

// }
// console.log(result);


//question 2 find the missing number

let arr=prompt("enter the no of arr").split(" ").map(Number);


let i=0;
while(i<arr.length){
    let result=arr[0]+i;
    if(arr[i]!=result){
        console.log(result);
        break;
    }
    i++;
}