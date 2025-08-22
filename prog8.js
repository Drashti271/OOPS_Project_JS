// 8. Logging System 

class Logger {
    log(message) {
        console.log("Default: ",message);
    }
}

class ConsoleLogger extends Logger {
    log(message) {
        console.log("Console: ",message);
    }
}

class FileLogger extends Logger {
    log(message) {
        console.log("Writing to file: ",message);
    }
}

class DataBaseLogger extends Logger {
    log(message) {
        console.log("Saving to database: ",message);
    }
}

function logMessage(logger, message) {
    logger.log(message);
}

logMessage(new ConsoleLogger(), "User Logged in.");
logMessage(new FileLogger(), "User order saved.");
logMessage(new DataBaseLogger(), "Error: DB Connection Failed.");