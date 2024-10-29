// Simulating a server call to fetch user data with a callback function
function fetchUserData(callback) {
    setTimeout(() => {
        const user = {
            name: 'John Doe',
            age: 25
        };
        callback(user); // Pass the user data to the callback
    }, 2000); // Simulate a delay of 2 seconds
}

// Handling the fetchUserData function with a callback
document.getElementById('fetchCallbackBtn').addEventListener('click', () => {
    fetchUserData((user) => {
        document.getElementById('callbackResult').textContent = `User: ${user.name}, Age: ${user.age}`;
    });
});
