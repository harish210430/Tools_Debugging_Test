let user = {
    name: "John",
    age: 24,
    house: "Stark",
};

// Semantic Logging(Semantic: Define the meaning of content they contain.)
// - warn
// - error
// - Info

console.warn("Hello Testing");
console.error("Hello Testing");
console.info("Hello Testing");

// String Substitution: When the first Argument is string u can use string substitution.
// string substitution using special charector like(%c - "", %s - "to add string", %d - "digit", %o - "Object" )
// (%c, %s, %d, %o) string substitution token can be used in console.(log, info, warn, error, debug)

console.log("Hello %cworld", "color: red; font-size: 48px;");
console.log("Hello %sworld", "test ");

// console.group

let users = [
    { name: "Arya", age: 19 },
    { name: "John", age: 25 },
    { name: "Sansa", age: 23 }
];

/*
// Wthout grouping
    for(let i = 0; i < users.length; i++) {
        console.log(users[i].name);
        console.log(users[i].age);
    }

// With grouping
for(let i = 0; i < users.length; i++) {
    console.group(users[i].name);
    console.log(users[i].name);
    console.log(users[i].age);
    console.groupEnd();
}
*/

// console.time: it calculate the time, taken by a loop to end.
console.time("creatingData");
var data = [];
for(let i = 0; i < 1000; i++) {
    data.push(i*2);
} 
console.timeEnd("creatingData");


// console.table()-  it shows the data in table form.
console.table(users);
console.table(users, ['name']);
console.table(users, ["age"]);