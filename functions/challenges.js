// 1

function makeTea(type){
    return `Making ${type}`;
}

let teaOrder=makeTea("Green Tea")
console.log(teaOrder);

// 2

function orderTea(){

    function confirmOrder(){

        return `Order confirmed for chai`

    }
 return confirmOrder();
}

let mytea=orderTea();
console.log(mytea);

// 3 Arrow function

const calculateTotal =(price,quantity)=>{
  return price*quantity

}

 let temp=calculateTotal(10000,2)
console.log(temp);