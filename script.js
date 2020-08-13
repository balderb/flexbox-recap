console.log('start');

function loginUser(email, password, callback) {
    setTimeout(() => {
        callback({userEmail: email});
    }, 1500);
}

const user = loginUser('devedf@goomail.com', 1234556, (user) => {
    console.log(user);
});
console.log(user);

console.log("finish");



