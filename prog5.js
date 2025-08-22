// 5. Notification System

class Notification {
    send(message) {
        console.log("Sending Message: ",message);
    }
}

class EmailNotification extends Notification {
    send(message) {
        console.log("Email Sent: ",message);
    }
}

class SMSNotification extends Notification {
    send(message) {
        console.log("SMS Sent: ",message);
    }
}

let notifyUsers = [new EmailNotification(), new SMSNotification()];
notifyUsers.forEach(n => n.send("You order has been shipped!"));