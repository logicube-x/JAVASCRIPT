// 1

function makeTea(type){
    return `Making ${type}`;
}

let teaOrder=makeTea("Green Tea")
console.log(teaOrder);

// 2

function orderTea(teaTypes){

    function orderConfirmed(){

        return `Order confirmed for chai`
    }

    return orderConfirmed()

}

let teaa=orderTea()
console.log(teaa);

