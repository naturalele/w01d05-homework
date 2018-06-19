// Conceptual Questions

// 1.  We assign a value to a variable by var = x
// 2.  To change the value of a variable we list the variable 
//  we would like to change followed by = and new variable name
// 3.  let new variable = desired variable name

// Strings

		// let firstVariable = ("Hello World");
		// firstVariable = 10;
		// let secondVariable = firstVariable;
		// secondVariable = "Yo yo yo"

		// console.log(secondVariable); // --> yo yo yo
		// console.log(firstVariable); // --> 10

		// let yourName = "Katie";
		// console.log(`Hello, my name is ${yourName}`);

// Booleans

 //  const a = 4;
 //  const b = 53;
 //  const c = 57;
 //  const d = 16;
 //  const e = 'Kevin';	

 // console.log(a < b);
 // console.log(c > d);
 // console.log('Name' == 'Name');
 // console.log(a < b < c);
 // console.log(a == a != d);
 // console.log(e == 'Kevin');
 // console.log(48 == 48);

// The Farm

// let animal = "cow";
// if (animal == "cow") {
// 	console.log("moooooo");
// }
// 	else {
// 		console.log("Hey! You're not a cow");
// 	}

// Driver's Ed

// let age = 12;
// if (age >= 16) {
// 	console.log("Here are the keys");
// }
// 	else {
// 		console.log("Sorry, you're too young");
// 	}

// Just Loop it

// for (let i = 0; i < 11; i++)
// 	console.log(i);
// for (let i = 10; i < 40001; i++)
// 	console.log(i);
// for (let i = 10; i < 40001; i+=2)
// 	console.log(i);

// Let's get even

// for (let i = 1; i < 101; i ++) {
// 	if (i % 2 == 0) {
// 		console.log(`${i} is an even number`);}
// 	}

// Give me Five
	// for (let i = 0; i < 101; i++) {
	// 	if(i % 5 == 0) {
	// 		console.log(`I found a ${i}. High five!`);
	// 	}
	// 	if(i % 3 == 0) {
	// 		console.log(`I found a ${i}. Three is a crowd`);
	// 	}
	// }

// Savings account
	
	// let bankAccount = 0;
	// for (let i = 1; i < 11; i++) { 
	// 	bankAccount += i;
	// 		{console.log(`Your bank account should have ${bankAccount} in it`);
	// 	}
	// }

	// let bankAccount = 0;
	// for (let i = 1; i < 101; i++) { 
	// 	bankAccount += (i*2);
	// 		{console.log(`Your bank account should have ${bankAccount} in it`);
	// 	}
	// }

// Multiples of 3 and 5

// let total = 0;
// for (let i = 0; i < 1001; i ++) {
// 	if ((i % 3 == 0) || (i % 5 == 0)) {
// 		total += i; {
// 			console.log(total);
// 		}
// 	}
// }

// Random
// const randomThings = [1, 10, "Hello", true]
// console.log(randomThings[0]);

// randomThings[2] = "World";
// console.log(randomThings);

// We've Got Class
// const ourClass = ["Gizmo", "Zoom", "Github", "Slack"]
// // ourClass[2];
// ourClass[2] = "Octocat";
// ourClass.push("Cloud City");

// console.log(ourClass);

// Mix It Up

// const myArray = [5 ,10 ,500, 20]
// myArray.push("Egon");
// myArray.pop();
// myArray.unshift("Bob Marley");
// myArray.reverse();
// myArray.pop();

// console.log(myArray);

// Biggie Smalls

// let num = 200; {
// if(num < 101) {
// 	console.log("little number");}
// else {
// 	console.log("big number");
// }
// }

// Monkey in the Middle
// let num = 8
// if(num < 5) 
// 	{
// 		console.log("little number");
// 	}
// 		if(num > 10)
// 		{
// 			console.log("big number");
// 		}
// 			else {
// 				console.log("monkey");
// 			}

//What's in Your Closet?

// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "GA hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];

// //Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];

// console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);

// let kristynShoe = kristynsCloset[0];
// ;

// console.log(kristynsCloset);

// kristynsCloset.splice(6, 0, "raybans");

// console.log(kristynsCloset);

// kristynsCloset[5] = "stained knit hat";
// console.log(kristynsCloset);

// console.log(thomsCloset[0][0]);

// console.log(thomsCloset[1][1]);

//console.log(thomsCloset[2][1]);

//console.log(`Thom is looking fierce in a ${item1}, ${item2}, and ${item3}`);

//thomsCloset[1][2] = "Footie Pajamas";

// FUNCTIONS

// printGreeting

// const printGreeting = (name) => {
// 	console.log(`Hello there, ${name}`);
// }

// printGreeting("Katie");

//reverseWordOrder

// const reverseWordOrder = (sentence) => {
// 	let newSentence = '';
// 	for (let i = sentence.length - 1; i >= 0; i--)
// 		newSentence += sentence[i];
// 	return newSentence;
// }

// console.log(reverseWordOrder("Pickles are cute"));

// Calculate - how to define string variable?

// const calculate = (num1, num2, operation) => {
// 	{
// 	if(operation == "add")
// 		return string = (num1 + num2);
// 		}
// 	{
// 	if(operation == "sub")
// 		return string = (num1 - num2);
// 	}
// 	{
// 	if(operation == "mult")
// 		return string = (num1 * num2);
// 	}
// 	{
// 	if(operation == "div")
// 		return string = (num1/num2);
// 	}
// 	{
// 	if(operation == "exp")
// 		return string = (Math.pow(num1, num2));
// 	}
// 	}

 
//   console.log(calculate(4, 3, "add"));
//   console.log(calculate(4, 3, "sub"));
//   console.log(calculate(4, 3, "mult"));
//   console.log(calculate(4, 3, "div"));
//   console.log(calculate(4, 3, "exp"));

// 1

// const printCool = (name) => {
// 	console.log(`${name} is cool`);
// }

// printCool("Katie");

// 2 -- trouble calculating

// const calculateCube = (number) => {
// 	Math.pow(number, 3);
// 	return number;
// 	}

// calculateCube(4);

// 3 

// const isAVowel = (character) => {
// 	if (character == ("a" || "e" || "i" || "o" || "u")) {
// 		console.log("true");
// 	}
// 	else {
// 		console.log("false");
// 	}
// }

// isAVowel("a");

// 4 

// const getTwoLengths = (string1, string2) => {
//             return [string1.length, string2.length];
//         }
//         console.log(getTwoLengths("Katie", "Turner")); 

// 5

// const getMultipleLengths = (arrayOfStrings) => {
// 	const sumArray = [];
// 	for(let i = 0; i < arrayOfStrings.length; i++) {
// 		sumArray.push(arrayOfStrings[i].length);

// 	}
// 	return [sumArray];
// }
// 	console.log(getMultipleLengths(["Katie", "is", "cool"]));

// 6

// const maxOfThree = (num1, num2, num3) => {
// 	if(num1 > num2 && num1 > num3) {
// 		return num1;
// 	}
// 	else if(num2 > num1 && num2 > num3) { 
// 		return num2;
// 	}
// 	else if(num3 > num2 && num3 > num1) {
// 		return num3;
// 	}
// 	else if(num1 == num2 == num3) {
// 		return num1;
// 	}
// 	else if(num2)
// }

// 	console.log(maxOfThree(6, 9, 1));

// 7

// const long1= 0;
// const arr = ["Jack", "Princess", "Diane", "a"];
// 	function longestString(arr){
// 	for(let i = 0; i < arr.length; i++) {
//  	if (arr[i].length > long1){
//  		long1 = arr[i].length;
//  	}
//  	}
// 	return long1;
// }

// console.log(longestString(["Jack", "Princess", "Diane", "a"]));

// 8

// const transmogrify = (num1, num2, num3) => {
// let result = Math.pow((num1 * num2),(num3)) 
// 	return result;
// }


// console.log(transmogrify(5, 3, 2));



// OBJECTS 

// Syntax
// const object name = {
	// property: value,
// }

// Me
// const me = {
// 	name: "kitten",
// 	age: 17,
// 	email: "kitten@me.com"
// }

// console.log(me);
// console.log(me.name);
// me.age = 1000;
// console.log(me);
// me["Place of residence"] = "Windom";
// console.log(me);

// Slimer 

// const monster = {
//    name: "Slimer",
//    color: "greenish",
//    type: "plasm or ghost or something"
// }

// // console.log(monster.name);

// // monster.type = monster.creature;  
// // console.log(monster);

// monster.age = 6;
// console.log(monster);

Ogres

const adventurer = {
	name: "Hercules",
	hitPoints: 25
	}

const ogre = {
	name: "Bevis",
	hitPoints: 16
}

function battle(arr){
for (i = 30; i > 0; i--) {
if (adventurer.hitPoints > ogre.hitPoints) {
	console.log("Adventurer Wins!")
}
else {
	console.log("Ogre")
}
}

console.log(battle());







			
	
	



