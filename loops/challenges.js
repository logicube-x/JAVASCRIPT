// 1

let sum=0;
let i=1;

while(i<=5){
    sum+=1;
    i++;
}
console.log(sum);

// 2
let j=5;
countDown=[];

while(j>=1){
    countDown.push(j);
    j--;
}

console.log(countDown);

// 3

// let tea;
// let teaCollection=[]

// do{
//     tea=prompt(`Enter the name of the tea: (write stop to close)`)
   
//     if(tea!=="stop"){
//         teaCollection.push(tea);
//     }

// } while(tea!=="stop")

// 4

let k=1;
let total=0;

do{
total+=k;
k++;
}while(k<=3)


console.log(total);

// 5

let nums=[2,4,6];
let mulNums=[];

for(let l=0;l<nums.length;l++){
//   temp=nums[l]*2
//   mulNums.push(temp)
    mulNums.push(nums[l]*2)
}

console.log(mulNums);

// 6

let cities=["paris","New York","London","Tokyo"]
let myCityList=[]

for(let c=0;c<cities.length;c++){
    myCityList.push(cities[c])
}

console.log(myCityList)