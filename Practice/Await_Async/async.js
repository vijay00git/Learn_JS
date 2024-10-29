// Simulating a server call to fetch user data using async/await
function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = {
                name: 'Alice Johnson',
                age: 28
            };
            resolve(user); // Resolve the promise with user data
        }, 2000); // Simulate a delay of 2 seconds
    });
}

// Handling the fetchUserData function with async/await
document.getElementById('fetchAsyncBtn').addEventListener('click', async () => {
    try {
        const user = await fetchUserData(); // Wait for the promise to resolve
        document.getElementById('asyncResult').textContent = `User: ${user.name}, Age: ${user.age}`;
    } catch (error) {
        document.getElementById('asyncResult').textContent = `Error: ${error}`;
    }
});
