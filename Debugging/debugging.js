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
let fruits = ["Apple", "Banana", "Cherry", "Grapes", "Litchi"];
console.table(fruits);


/* 
    Use console.group for grouping multiple console.log 
*/
console.group("Grouped Elmnts: ");
console.log("Element1");
console.log("Element2");
console.log("Element3");
console.groupEnd("Grouped Elmnts");
/* 
    Use console.time to find the time taken by the execution of the code below.
*/
console.time("TimeTakensBy:");
for (let i = 0; i < 100000; i++) {
    i;
}
console.timeEnd("TimeTakensBy:");

/*  
    Use console.log with the %c placeholder to change the font size to 30px, color to tomato and background to black.
*/
console.log("%cIntroducing console Properties", "font-size: 30px; color: tomato; background-color: black;");

/* 
    Use console.dir to display the object representation of a function.
*/

/* 
    Use console.table to display the variable named people given below in table form.
*/
let people = [
  {
    name: 'Eddard Stark',
    description:
      'Lord of Winterfell - Warden of the North - Hand of the King - Married to Catelyn (Tully) Stark',
  },
  {
    name: 'Benjen Stark',
    description: "Brother of Eddard Stark - First ranger of the Night's Watch",
  },
  {
    name: 'Robb Stark',
    description: 'Son of Eddard and Catelyn Stark - Direwolf: Grey Wind',
  },
  {
    name: 'Sansa Stark',
    description: 'Daughter of Eddard and Catelyn Stark - Direwolf: Lady',
  },
];
console.table(people);

/* 
    Use console.count to display how many times the loop given below will run.
*/
for (let i = 0; i < 100; i++) {
    console.count(i);
}

/* 
    Learn about console.trace and use it on a function.
*/
// console.trace : it will trace the func/Msg, ki kaise and kitne steps ke bad o/p Aaya.
// it will gives initial invokation of a perticular piece of code.(ki code kaha se originate ua hai).

function calculate(num1, num2, optr) {
    function add() {
        return num1 + num2; 
    }
    function sub() {
       return num1 - num2;
    }
    function devision() {
        return num1 / num2;
    }

    switch(optr) {
        case "+": return add()
        case "-": return sub()                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
        case "/": return devision()
        default: "Enter wrong Operation";
    }
};
let final = calculate(12,3, "+                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ");
console.log(final);

