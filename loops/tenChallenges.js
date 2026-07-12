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