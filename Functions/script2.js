// function declaration


function abc(){
    console.log(`Hello !`);
}

abc();

// function expression

const greet=function(){
    console.log(`hello i am function expression`);
}
greet()

// arrow function
let arrow=()=>{
    console.log("hey , i am arrow fns");
}
arrow();

let xyz=user=> console.log(`Welcome ${user}`);
xyz("Arsh")


let Welcome=(name,age)=>{
    console.log(`Hello ${name} you are ${age} years old`);
}
Welcome("Arsh",20)



let apple=taste=>{
    console.log(`The taste of apple is ${taste}`);
}
apple("sweet")


let mango=(color,taste)=>{
    console.log(`The fruit is ${color} in colour and ${taste} in taste`);
}

mango("Orange","sweet")

// IIFE -

// (function(){
//     console.log(`I am a IIFE`);
// })();

function fafafa(){
  if (true) {
    var a = 10;
    let b = 20;

    console.log(a); /* will run */
    console.log(b); /* will run */
  }
  console.log(a); /* will run */
//   console.log(b); this will give error
}

fafafa()