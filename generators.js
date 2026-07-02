// generators Example
function * numbers(){
    yield 1;
    yield 2;
    yield 3;
}
let gen = numbers();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
//
function * demo(){
    console.log("hello");
    yield 10;
    console.log("world");
    yield 20;

}
let g = demo();
g.next();
g.next();
// yield means it pasues when the next is called then it will play

function * test(){
    console.log("A");
    yield 1;
    console.log("B");
    yield 2;
    console.log("C");
    yield 3;

}
let obj = test();
obj.next();
obj.next();
obj.next();
obj.next();
//
function* a(){
    yield 100;

}
let b =a();
console.log(b.next()); // here it prints value and and done . done means true or false
//Multiple Yields
function * colors(){
    yield "Red";
    yield "Pink";
    yield "blue";
    yield "orange";
}
let c =colors();
console.log(c.next());
console.log(c.next());
console.log(c.next());
console.log(c.next());
console.log(c.next()); // here for the above syntax it just return the value and done beacude in console there is no a,b are any matter to print

// Passing values into Generators
function * d(){
    let x= yield;
    console.log(x);
}
let e = d();
e.next();
e.next(100); // here we are passing a value

// Generator with Loop

function * count(){
    for (let i=1;i<=5;i++){
        yield i
    }
}
let f = count();
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());

// Using for with Generators

function * fruits(){
    yield "banana";
    yield "Apple";
    yield "Orange";

}
for (let fruit of fruits()){
    console.log(fruit);
}
// using async await generators
 
async function* de(){
yield "hello";
yield 'world';


}
async function run(){



let h=de();
console.log(await h.next());
console.log(await h.next());
}
run();
//
async function* counter() {
    yield 1;
    yield 2;
    yield 3;
}

async function ru() {

    let gen = counter();

    console.log(await gen.next());
    console.log(await gen.next());
    console.log(await gen.next());
    console.log(await gen.next());

}

ru();
