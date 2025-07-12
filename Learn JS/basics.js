const mySym = Symbol()

const user = {
    name: "Anshul",
    age: 22,
    isLoggedIn: false,
    [mySym]: 54
}

console.log(typeof user[mySym])