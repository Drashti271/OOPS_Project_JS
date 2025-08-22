// 7. Payment Gateway in an E-Commerce App

class Payment {
    process(amount) {
        console.log(`Processing payment of ₹${amount}`);
    }
}

class CreditCardPayment extends Payment {
    process(amount) {
        console.log(`Paid ${amount} using Credit Card.`);
    }
}

class UPIPayment extends Payment {
    process(amount) {
        console.log(`Paid ${amount} using UPI.`);
    }
}

class PayPalPayment extends Payment {
    process(amount) {
        console.log(`Paid ${amount} using PayPal`)
    }
}

function checkout(amount, PaymentMethod) {
    PaymentMethod.process(amount);
}

checkout(1000, new CreditCardPayment());
checkout(2000, new UPIPayment());
checkout(5000, new PayPalPayment());