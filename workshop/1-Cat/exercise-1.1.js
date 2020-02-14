// Exercise 1.1
// ------------
// Creating a Cat class.

// A) Create an object that represents a cat.
// It should have properties for tiredness, hunger, loneliness and happiness.
// You can set all of these properties to 0 by default.

class Cat {
    constructor(name) {
        this.tiredness = 0;
        this.hunger = 0;
        this.loneliness = 0;
        this.happiness = 0;
        this.species = "cat"
        this.name = name
    }
}


// B) Instantiate a cat called 'boots' with the Cat class.

// let boots = new Cat()


// C) What do you see when you console.log(boots)?
// console.log(boots) //returns the objt with its keys and values

// D) What if I want to output just boots' species?
// console.log(boots.species)

// E) Boots' name is not part of its object.
//    Update the class above to accept have a name parameter
//    and pass Boots' name as an argument.

let boots = new Cat("boots")
console.log(boots)