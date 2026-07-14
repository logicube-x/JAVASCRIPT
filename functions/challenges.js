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