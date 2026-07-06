// 1

let teaFlavours=[`green tea`,`black tea`,`oolong tea`]

let firstTea=teaFlavours[0];
console.log(firstTea);

// 2

let cities=["london","Tokyo","Paris","New York"]
let myCity=cities[2];
console.log(myCity);
// 3

let teaTypes=["herbel tea","white tea","masala chai"]

teaFlavours[1]="Jasmine tea";

console.log(teaFlavours);

// 4

let citiesVisited=["Mumbai","Sydney"]
citiesVisited.push("Berlin")
console.log(citiesVisited);

// 5
let teaorders=["chai","matcha","ice tea","earl grey"]

let lastOrder=teaorders.pop()
console.log(lastOrder);

// 6

let popularTea=["green tea","oolong tea","chai"];
let softCopy=popularTea;
console.log(softCopy);
console.log(popularTea);

softCopy.pop();
console.log(softCopy);
popularTea.pop()
console.log(popularTea);


// 7

let topCities=["Berlin","Singapore","New York"]
let hardCopy=[...topCities];

hardCopy.pop();
console.log(topCities); /*This do not changes in the original array */

// 8
let europeanCities=["Paris","Rome"]
let asianCities=["Tokyo","Bangkok"]

// let worldCities=europeanCities+asianCities;
// console.log(typeof(worldCities));
let worldCities=europeanCities.concat(asianCities)
console.log(worldCities);

// 9

let teaMenu=["masala chai","oolong tea","green tea"];

let teaLeng=teaMenu.length;
console.log(teaLeng);

// 10 
let cityBucketList=["Kyoto","London","Cape Town"];

let isLondonInCity=cityBucketList.includes("London");
console.log(isLondonInCity)