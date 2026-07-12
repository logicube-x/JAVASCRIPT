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

let cityNewPopulation={}

for (const city in citiesPopulation) {
 
cityNewPopulation[city]=citiesPopulation[city]
}
console.log(cityNewPopulation);