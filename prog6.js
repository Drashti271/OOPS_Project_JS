// 6. E-Commerce Shipping System

class Shipping {
    calculate(order) {
        return 0;
    }
}

class FedEx extends Shipping {
    calculate(order) {
        return order.weight * 10;
    }
}

class BlueDart extends Shipping {
    calculate(order) {
        return order.distance * 5;
    }
}

class Delhivery extends Shipping {
    calculate(order) {
        return order.weight * 8 + order.distance * 2;
    }
}

function getShippingCost(order, ShippingProvider) {
    return ShippingProvider.calculate(order);
}

let order = {weight : 3 , distance : 50};

console.log("FedEx: ", getShippingCost(order, new FedEx()));
console.log("BlueDart: ", getShippingCost(order, new BlueDart()));
console.log("Delhivery: ", getShippingCost(order, new Delhivery()));