// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good. Our Cat can modify its properties but we don't have a way to lower them...
// Write a wait method that accepts a minutes parameter and slowly lowers or increases the properties.




class Cat {
    constructor(name,breed) {
        this.tiredness = 30;
        this.hunger = 30;
        this.loneliness = 30;
        this.happiness = 30;
        this.species = "cat";
        this.name = name;
        this.breed = breed;
    } 
    sleep = (hours) => {
        this.tiredness -= hours * 5;
        this.happiness += hours * 1;
    }

    eat = (food) => {
        this.hunger -= food * 0.2;
        this.happiness += food * 0.1;

    }

    play = (minutes) => {
        this.loneliness -= minutes * 3;
        this.happiness += minutes * 5;
    }
    wait = (minutes) => {
        this.hunger += minutes *2;
        this.happiness -= minutes * 5;
        this.loneliness += minutes * 3;
    }
}

let boots = new Cat( "Boots", "Siamese")



// B) Make Boots wait 20 minutes and call then console.log(boots);

boots.wait(20)
console.log(boots)