function waitAndLog(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, delay);
    });
}

// Your code here to execute the tasks in sequence
waitAndLog("Task 1 completed", 1000)
    .then(() => waitAndLog("Task 2 completed", 1000))
    .then(() => waitAndLog("Task 3 completed", 1000))
    .then(() => console.log("All tasks completed"));