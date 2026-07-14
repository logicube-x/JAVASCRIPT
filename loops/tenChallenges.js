// 1
let teas=["green tea","black tea","chai","oolong tea"]
let selectedTeas=[]
for(let i=0;i<teas.length;i++){
    
    if(teas[i]==="chai") break;

    else{
        selectedTeas.push(teas[i])
    }
}

console.log(selectedTeas);

// 2

let cities=["London","New York ","Paris","Berlin"];
let visitedCities=[];

for(let j=0;j<cities.length;j++){
    
    if(cities[j]==="Paris") continue;

    else{
        visitedCities.push(cities[j]);
    }
}
console.log(visitedCities);

// 3

let numbers=[1,2,3,4,5]
let selNumbers=[]

for (const elem of numbers) {
   
    if(elem===4) break;
   selNumbers.push(elem)
}
console.log(selNumbers);

// 4

let chai=["chai","green tea","herbel tea","black tea"]
let preferredChai=[]

for(elem of chai){
    if(elem ==="herbel tea") continue;

    preferredChai.push(elem)
}
console.log(preferredChai);

// 5

let citiesPopulation={
    "London":9498239823,
    "New York":10000000,
    "Paris":9000003,
    "Berlin":5000000,
}

let cityPopulation={}


for (const elem in citiesPopulation) {
  
    // console.log(citiesPopulation[elem]); this gives the values ex : 50000000
    if(elem==="Berlin") break;
    cityPopulation[elem]=citiesPopulation[elem]
    
}

console.log(cityPopulation);

// 6

let cityP={
    "Sydney":5000000,
    "Tokyo":9000000,
    "Paris":2200000,
    "Berlin":3500000
}

let largeCities={}

for (const c in cityP) {
  if(cityP[c]<3000000)
    continue;

  largeCities[c]=cityP[c]

}

console.log(largeCities)

// 7

let teass=["earl grey","green tea","chai","oolong tea"];
let availableTeas=[];

teass.forEach((e)=>{
   if(e==="chai") return;

   availableTeas.push(e)
   
})

console.log(availableTeas);

// 8

let cty=["Berlin","Tokyo","Sydney","Paris"]
let travelledcities=[];

cty.forEach((sel)=>{

    if(sel==="Sydney") return;

    travelledcities.push(sel)
})

console.log(travelledcities);

// 9

let nums=[2,5,7,9];
let doubledNums=[];

for(let i=0;i<nums.length;i++){
    if(nums[i]===7) continue;

    doubledNums.push(nums[i]*2);
}
console.log(doubledNums);

// 10

let myTeas=["chai","green tea","black tea","jasmine tea","herbal tea"];
let shortTeas=[];

for (const e of myTeas) {
    
    if(e.length>10) continue;

    shortTeas.push(e);

}

console.log(shortTeas);
