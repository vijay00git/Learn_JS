// Simulating a server call to fetch user data using Promise
function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = {
                name: 'Jane Smith',
                age: 30
            };
            resolve(user); // Resolve the promise with user data
        }, 2000); // Simulate a delay of 2 seconds
    });
}

// Handling the fetchUserData function with a Promise
document.getElementById('fetchPromiseBtn').addEventListener('click', () => {
    fetchUserData().then((user) => {
        document.getElementById('promiseResult').textContent = `User: ${user.name}, Age: ${user.age}`;
    }).catch((error) => {
        document.getElementById('promiseResult').textContent = `Error: ${error}`;
    });
});
