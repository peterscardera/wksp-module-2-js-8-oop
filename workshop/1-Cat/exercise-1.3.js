// Exercise 1.3
// ------------
// Creating a Cat class - Part 3

// A) In the previous exercises, we created a Cat class and used it to create a boots object.
// Rewrite that Cat class, but let's also add some functions that will modify the various porperties of a cat.
// Write methods that will update tiredness, hunger, loneliness, and happiness.

// HINT: You need to write arrow functions here. () => {}
// - Write a sleep method that accept hours and reduces tiredness by 5 times that number.
// - Write an eat method that accept grams of food and reduces hunger by 1/5 that number.
// - Write an play method that accept minutes and reduces loneliness by 3 times that number.
// - the happiness property should be modified all of the above methods as well.
// You decide how much sleep, eat, and play affects your cat's happiness.

class Cat {
    constructor(name, species) {
        this.species = "cat";
        this.tiredness = 40;
        this.hunger = 40 ;
        this.loneliness = 40;
        this.happiness = 40;
        this.name = name;
        this.species = species;
    }
    sleep = (hours) => {
        this.tiredness -= hours *5;
        this.happiness += hours * 1;
    }
    eat = (grams) => {
        this.hunger -= grams * 1/5;
        this.happiness += grams * 5;
    }
    play = (minutes) => {
        this.loneliness -= minutes * 3;
        this.happiness += minutes * 2;
    }
    
}
let boots = new Cat("Boots", "Siamease")

console.log(boots)
// all the value dont change unless I call the methods (function within the obj)

// B) call the different methods with appropriate values and then console.log boots to see what happened to the property values.

boots.sleep(4);
boots.eat(2);
boots.play(3)

console.log(boots)