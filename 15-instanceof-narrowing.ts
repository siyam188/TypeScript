class Dog {
    bark() {
        console.log("Dog is barking");
    }
}

class Cat {
    meow() {
        console.log("Cat is meowing");
    }
}

function makeSound(animal: Dog | Cat) {

    if (animal instanceof Dog) {
        animal.bark();
    } 
    else {
        animal.meow();
    }
}

makeSound(new Dog());
makeSound(new Cat());
