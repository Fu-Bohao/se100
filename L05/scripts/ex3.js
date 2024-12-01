// Simulates fetching data from a server with a delay - Do not modify
async function fetchData(serverName) {
    console.log(`Fetching from ${serverName}...`);
    await new Promise((resolve) => setTimeout(resolve, Math.random() * 3000 + 1000)); // Simulate delay
    return `Data from ${serverName}`;
}

// Write your code here to fetch data from Server A, B, and C one by one
async function getAllData() {
    const serverA = await fetchData("Server A");
    console.log(serverA);
    const serverB = await fetchData("Server B");
    console.log(serverB);
    const serverC = await fetchData("Server C");
    console.log(serverC);
    console.log("All data fetched!");
}

// Call the main function - Do not modify
getAllData();