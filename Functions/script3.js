// pure fns

function add(a,b){
   return a+b;
}

console.log(add(2,3))

// impure fns

var a=10;

function abc(){
    a++;
    return a;
}
abc();
abc();
console.log(abc());



function fa(a,b,c){
    console.log("Hello",a,b,c);
}
fa(10,20,30)

function greet(user="person"){
    console.log(`hello ${user}`);
}



function hero(){
    a=10;
    console.log(a);
}
function main(len,cb){
    console.log(`Hello with length ${len}`)
    cb()
}

main(10,hero)