// 2. Simulated Method Overloading (Compile-time Polymorphism) 

function greet(name,age) {
    if(age === undefined) {
        console.log(`Hello, ${name}`);
    } else {
        console.log(`Hello ${name}, you are ${age} years old.`);
    }
}

greet("Drashti");
greet("Drashti",19);