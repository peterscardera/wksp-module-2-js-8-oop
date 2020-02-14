class Student {
    constructor() {
        this.excitement = 1;
    }

    learn = () => {
        this.excitement = this.excitement  + 5;
    }

    writeCode = () => { this.learn(); } //we need a this. infront of learn as this referes to the parent object
}

let bob = new Student();
bob.writeCode();

