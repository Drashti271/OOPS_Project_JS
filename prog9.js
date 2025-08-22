// 9. User Notification System 

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

class PushNotification extends Notification {
    send(message) {
        console.log("Push: ",message);
    }
}

function notifyAll(users,notification) {
    users.forEach(user => notification.send(`Hello, ${user}`));
}

let users = ["Sejal", "Venisha", "Drashti"];

notifyAll(users, new EmailNotification());
notifyAll(users, new SMSNotification());
notifyAll(users, new PushNotification());