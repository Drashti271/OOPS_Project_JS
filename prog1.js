//  1. Method Overriding (Run-time Polymorphism)
 
class Animal {
    speak() {
        console.log("This Animal makes a sound.");
    }
}

class Dog extends Animal {
    speak() {
        console.log("The Dog Barks.");
    }
}

class Cat extends Dog {
    speak() {
        console.log("The Cat Meows.");
    }
}

let animals = [new Animal(), new Dog(), new Cat()];

animals.forEach(animal => {
    animal.speak();
})