function getNumberPromise() {
    // Write your code here
    return new Promise(
        (resolve)=>{
            setTimeout(()=>{
                resolve(10)
            }, 2000)
        }
    )
}

// Test the function
getNumberPromise().then((value) => {
    console.log(value); // Should log 10 after 2 seconds
});