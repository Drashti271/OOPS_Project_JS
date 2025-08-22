// 4. Payment Gateway Example (Different Behaviors)

class Payment {
    pay(amount) {
        console.log(`Paying ${amount}`);
    }
}

class CreditCard extends Payment {
    pay(amount) {
        console.log(`Paid ${amount} using Credit Card.`);
    }
}

class PayPal extends Payment {
    pay(amount) {
        console.log(`Paid ${amount} using PayPal`)
    }
}

let payments = [new CreditCard(), new PayPal()];
payments.forEach(p => p.pay(500));