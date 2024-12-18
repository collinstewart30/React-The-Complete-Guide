/* Section 2-16 */
//import { apiKey } from "./util.js";
import * as util from "./util.js";
import apiKeydefault from "./util.js"; 

console.log(util.apiKey);
console.log(util.apiKey2);
console.log(apiKeydefault);

/* Section 2-17 */
let userMessage = "User Message!"
console.log(userMessage);

/* Section 2-18 */
console.log(10 / 5);
console.log('hello' + 'world');
console.log(10 === 5);
if (10 === 10) {
    console.log('works');
}

/* Section 2-19 */
function greet(userName, message = 'Hello') {
    console.log(userName);
    console.log(message);
}

greet('Max', 'Hello!');
greet('Collin', 'Hey there!');
greet('DefaultMessage');

function greet2(userName, message) {
    return "Hi, I am " + userName + ". " + message;
}

const greeting = greet2('Collin', 'How are you?');
console.log(greeting);

/* Section 2-21 */
const userName = 'Collin';
const userAge = 30;
//SAME AS
const user = {
    name: 'Collin',
    age: 30,
    greet3() {
        return "Hellow, I am " + this.age + " years old.";
    }
}
console.log("User Name: " + user.name);
console.log(user.greet3());

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet4() {
        return "Hi!!";
    }
}

const userClass = new User("Me", 32);
console.log(userClass);
console.log(userClass.greet4());

/* Section 2-23 */
const hobbies = ['Sports', 'Cooking', 'Reading'];
console.log(hobbies[0]);

hobbies.push('Working');
console.log(hobbies);

const index = hobbies.findIndex((item) => {
    return item === 'Reading';
});
console.log(index);

const mapHobbies = hobbies.map((item) => {
    return item + '?';
});
console.log(mapHobbies);

/* Section 2-24 */
const userNameData = ['Collin', 'Stewart'];

const firstName = userNameData[0];
const lastName = userNameData[1];

//Deconstruct array
const [firstName1, lastName1] = ['Collin', 'Stewart'];
console.log(firstName1);
console.log(lastName1);

//Deconstruct object - have to use same name in the object as the variable
const {name, age} = {
    name: "Collin",
    age: 30
};
console.log(name);

/* Section 2-26 */
const hobbies2 = ['Sports', 'Cooking', 'Reading'];
const newHobbies2 = ['Swimming'];

const mergedHobbies = [...hobbies2, ...newHobbies2];
console.log(mergedHobbies);

/* Section 2-29 */
const handleTimeout = () => {
    console.log('Timed Out!');
};

setTimeout(handleTimeout, 2000);

/* Section 2-30 */
function init() {
    function greet() {
        console.log('Hi');
    }
    //works
    greet();
}
//doesnt work outside init function
//greet();