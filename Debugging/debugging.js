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


// Using console Exercise:

/*
    Write all the console method's (present in console object) name and what it does with an example.
*/
// 1. console.info - it gives us Normal message/Info.
console.info("Hi Info");
// 2. console.warn - it shows the message with warning.
console.warn("Hey! Warning");
// 3. console.error - it show the error message.
console.error("Hi Error");
// 4. console.log - it log/shows the message in console.
console.log("Hi console");
// 5. console.group - it grouped the multiple console.log given below.
console.group("Address");
console.log("Village and post Umariya");
console.log("Tehsil Sarila");
console.log("Block Gohand");
console.groupEnd();
// 6. console.time - it calculate the time taken by the loop to end it.
console.time("Required Time:");
var data = [];
for(let i = 0; i <= 100; i++) {
    data.push(i);
}
console.timeEnd("Required Time:");
// 7. console.table - it showa the data/Info in table form.
let fruit1 = "Apple";
let fruit2 = "Banana";
console.table(fruit1);
/* 
    Use console.group for grouping multiple console.log 
*/

/* 
    Use console.time to find the time taken by the execution of the code below.
*/

for (let i = 0; i < 1000000000; i++) {
  //
}