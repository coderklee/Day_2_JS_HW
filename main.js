//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

// let person3 = {
//     pizza:["Deep Dish", "South Side Thin Crust"],
//     tacos:"Anything not from Taco bell",
//     burgers:"Portillos Burgers",
//     ice_cream:["Chocolate","Vanilla","Oreo"],
//     shakes:[{
//         oberwise:"Chocolate",
//         dunkin:"Vanilla",
//         culvers:"All of them",
//         mcDonalds:"Sham-rock-shake",
//         cupids_candies:"Chocolate Malt"
//     }]
// }

// function findFavoriteFood(person3, object) {
//     const finalObj = {}
//     const generate = (person3, object) => {
//         for (let key in person3) {
//             const newParent = object+key
//             const value = person3[key]
//             if (typeof value === 'object') {
//                 generate(value, newParent)
//             } else {
//                 finalObj[newParent] = value
//             }
//         }
//     }
//     generate(person3, object)
//     return finalObj
// }

// console.log(findFavoriteFood(person3, ''))


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

function Person(name, age) {
	this.name = name;
	this.age = age;

	this.printInfo = (name, age) => {
		return `${this.name} is ${this.age} years old`
	}

	this.increaseAge = (age, increase) => {
		const newAge = age + increase
		return `${this.name} is now ${newAge} `
	}
}

let kaleigh = new Person('Kaleigh', 35)
console.log(kaleigh.printInfo())
console.log(kaleigh.increaseAge(35, 1))

let ava = new Person('Ava', 13)
console.log(ava.printInfo())
console.log(ava.increaseAge(13, 1))

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isAboveTen = (str) => {
	return new Promise( (resolve, reject) => {
		if(str.length > 10) {
			resolve(true)
		} else {
			reject(false)
		}
	})
}

isAboveTen('hellohihowareyou')
.then( (result) => {
	console.log('Big word');
})

.catch( (error) => {
	console.log('Small number')
})