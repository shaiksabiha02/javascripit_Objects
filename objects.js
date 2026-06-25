// Task 1
let student ={
    name:"sk.sabiha",
    age:22,
    address:{
        city:"guntur",
        State:"Ap"
    },
};
console.log(student.address);

//Task 2

console.log(student?.phone);

// Task 3

for(let key in student){
    console.log(key,student[key]);
};

// task 4

let upstudent={
    ...student,
    age:20
};
console.log(upstudent);

// Task 5

// for list of marks we use arrays beacuse of same data type and we can access them through index 
//example

student.marks=[80,50,50,78,99];
console.log(student)

// for user profile we use object in beacuase we can access through key value pair
// example student objet

// for shopping cart we use list of objects in arrays beacuse differnt item have different properties
//example

student.cart=[{mobile:"vivo",price:60000},{dress:"kurthi",price:500}]
console.log(student.cart);
console.log(student);

// Task 6

let book={
    title:"MYSELF",
    author:"Sabiha",
    rating:4.5,
    describe(){
     console.log(`Book by an author named as ${this.author}`)
    }
};

book.rating=4.8
console.log(book)
book.describe();

// Task 7
let company={
    Name:"tech solutions",
    departments:{
    Hr:{
        id:101,
        name:"xyz",
    },
    It:{
        id:202,
        name:"sabiha"
    }
    }
};
for(let key in company.departments){
    console.log("departments key",key);
    console.log("id",company.departments[key].id);
    console.log("name",company.departments[key].name);
}

console.log(company.departments.Hr?.name);
console.log(company.departments.Hr?.phone);
//task 8

// object for movie

let movie ={
    name:"sabiha",
    payement:"online",
    amount:600,
    seat_no:"C-11"
};
console.log(movie);

// Object for a product

let product={
    name:"vatika hair oil",
    rating:4.3,
    price:80,
    qty:"30ml"
};
console.log(product);

// Object for user profile 

let user1={
    name:"sadhika",
    age:33,
    address:"guntur"
};
console.log(user1);

// task 9
//Create an object and copy it using spread
 let mdstudent={
    ...student
 };
 console.log(mdstudent);

 // task 10
 // Modify copied object and verify original doesn't change

 mdstudent.name="salma";
 console.log(mdstudent);
 console.log(student);

 //Task 11
 //Create an array and copy it using spread

 student.marks1=[77,99,87,98];

console.log(student.marks1);

let marks2={
    ...student.marks1
};
console.log(marks2);

// Task 12 

let person = {
    name: "John",
    address: {
        city: "Hyderabad"
    }
};

let copy ={
    ...person
};
copy.address.city="Guntur"
console.log(person);
console.log(copy);

// Task 13

const user = {
    name: "Aliya",

    sayHello() {
        console.log("Hello " + this.name);
    }
};

user.sayHello();


// problems on objects

// Flatten

function flatten(obj, parent = "", result = {}) {

    for (let key in obj) {

        let newKey = parent ? parent + "." + key : key;

        if (typeof obj[key] === "object" && obj[key] !== null) {
            flatten(obj[key], newKey, result);
        } else {
            result[newKey] = obj[key];
        }
    }

    return result;
}

console.log(
    flatten({ a: { b: { c: 1 } } })
);

//Unfaltten

function unflatten(obj) {

    let result = {};

    for (let key in obj) {

        let parts = key.split(".");
        let current = result;

        for (let i = 0; i < parts.length - 1; i++) {

            if (!current[parts[i]]) {
                current[parts[i]] = {};
            }

            current = current[parts[i]];
        }

        current[parts[parts.length - 1]] = obj[key];
    }

    return result;
}

console.log(
    unflatten({ "a.b.c": 1 })
);

// Deep diff two objects

function deepDiff(obj1, obj2) {

    let result = {};

    for (let key in obj2) {

        if (!(key in obj1)) {

            result[key] = {
                added: obj2[key]
            };

        } else if (
            typeof obj2[key] === "object" &&
            obj2[key] !== null
        ) {

            let nestedDiff = deepDiff(
                obj1[key],
                obj2[key]
            );

            if (Object.keys(nestedDiff).length > 0) {
                result[key] = nestedDiff;
            }

        } else if (obj1[key] !== obj2[key]) {

            result[key] = {
                from: obj1[key],
                to: obj2[key]
            };

        }
    }

    return result;
}
    const firstObject = {
    x: 1,
    y: {
        z: 2
    }
};

const secondObject = {
    x: 1,
    y: {
        z: 3
    },
    w: 4
};

const diffResult = deepDiff(firstObject, secondObject);

console.log(JSON.stringify(diffResult, null, 2));

// Deep Clone without Objects

function deepClone(obj, map = new WeakMap()) {

    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    if (map.has(obj)) {
        return map.get(obj);
    }

    let clone;

    if (obj instanceof Date) {
        return new Date(obj);
    }

    if (obj instanceof Set) {
        return new Set(obj);
    }

    if (Array.isArray(obj)) {
        clone = [];
    } else {
        clone = {};
    }

    map.set(obj, clone);

    for (let key in obj) {
        clone[key] = deepClone(obj[key], map);
    }

    return clone;
}

const originalObj = {
    a: 1,
    b: {
        c: new Date(),
        d: new Set([1, 2])
    },
    circular: null
};

originalObj.circular = originalObj;

const clonedObj = deepClone(originalObj);

console.log(clonedObj);
console.log(clonedObj.circular === clonedObj);
