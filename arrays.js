let m=90;
let m1=80;
console.log(m);
console.log(m1);

let marks= [20,40,70,89];
console.log(marks[8]);
console.log(marks[4]);

// Length Function

console.log(marks.length);

// using for loop

let students =["sabiha","salma","likhitha","divya","mouli"];
for(let i=0;i < students.length;i++){
    console.log("hy"+ " " +students[i])
};

let fruits=["Mango","apple"];
console.log(fruits);

// push add an element at the end of an array

fruits.push("bannana")

console.log(fruits);

students.push("asifa")
console.log(students);

// Pop removes an element from the end of an array

fruits.pop();  // it defaults remove last element from the array
console.log(fruits);

students.pop();
console.log(students);

// unshift adds an element at starting of an array

fruits.unshift("pineapple");
console.log(fruits);

students.unshift("sadhika");
console.log(students);

//shift deletes an element from the starting of an array

fruits.shift();
console.log(fruits);

console.log(students.shift(),students);

// slice 

// slice means the originl array does not changed a new arrays is created using slice 

// syntax for slice : arr[start,end];

let name ="sk.sabiha"
console.log(name.slice(0,3));
console.log(name);

// Splice means it modifys the original array 

// it is used to add and remove and replace in a array

// syntax arr[start,delete,item1]

let stmarks=[60,50,40,80];
//stmarks.splice(0);
console.log(stmarks);

stmarks.splice(1,2); // here 1 is the start index position 2 deletes 2 items from the position 1 and 2
console.log(stmarks);

// adds
stmarks.splice(0,0,30); // here 0 is the index and 0 means no deletion 30 means add value at 0
console.log(stmarks);

stmarks.splice(1,0,70); // at index 1 adds 60 with 0n deletion
console.log(stmarks);

// replace

stmarks.splice(1,1,60); // here index 1 delete 1 and adds 60 at 1
console.log(stmarks);

// Indexof 

//the index od is used to identify the index position of the value

// syntax :- arr.indexof(value) // here want to find which value index

console.log(marks);
console.log(marks.indexOf(40));

let names = ["sabiha","salma","sadhika"];
console.log(names.indexOf("sabiha"));

// includes

// includes is used to check whether the value is present or not by using boolean functions

console.log(names.includes("sabiha"));  // returns true if present

console.log(names.includes("meeravali")); // returns false if not present

// for each

let numbers=[2,4,6,8];
numbers.forEach(function(num){
    console.log(num*2)
});

// map using arraow function

// here map creates a new array it does not change the original code

let numbers2=[1,2,3,4];
let numbers3=numbers2.map((num)=>num*3);
console.log(numbers3);
console.log(numbers2);

// filter

// iT Creates a new array
// filter it does not change the original code
// it checj=k the consdition if the condition is true then it will print

let numbers4=[2,4,6,7];
let numbers5=numbers4.filter((num)=>num%2==0);
console.log(numbers5);

// find 

// find that returns the element that satisifies the condition

let result=numbers4.find((num)=> num>10); // if the condition is false it shows undefined
console.log(result);

let result1=numbers4.find((num)=>num<10); // here find stops at first match only 
console.log(result1);    

// find index

let result2 = numbers4.findIndex((num)=>num<10); // it shows the index position value in find index 
console.log(result2);

// reduce 
// reduce is used to reduce the all elements of array into a single value by using
//sum,average,product,maximum,minimum

let result3=numbers4.reduce((total,num)=>{
    return total+num;
});
console.log(result3);

// sort is used to sort the elements in assecending or descending order

let a=[9,8,7,6,5,4];
console.log(a.sort()); // default it comes in ascending order

let b=[1,2,3,4,5];
let c=b.sort((a,b)=>b-a); // for descending order
console.log(c);

// problems

// Using Group By
const people = [
  { name: 'Ali', city: 'HYD' },
  { name: 'Sara', city: 'MUM' },
  { name: 'Raj', city: 'HYD' }
];

function groupBy(arr, key) {
  const result = {};

  for (const item of arr) {
    const groupKey = item[key];

    if (!result[groupKey]) {
      result[groupKey] = [];
    }

    result[groupKey].push(item);
  }

  return result;
}
// using reduce
const result = groupBy(people, 'city');

console.log(JSON.stringify(result, null, 2));

const arr = [1,2,3];

let sum = 0;

for(let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}

console.log(sum);

// Using nested loop

function subarraySum(arr, k) {

    let result = [];

    for(let i = 0; i < arr.length; i++) {

        let sum = 0;
        let temp = [];

        for(let j = i; j < arr.length; j++) {

            sum += arr[j];
            temp.push(arr[j]);

            if(sum === k) {
                result.push([...temp]);
            }
        }
    }

    return result;
}

console.log(subarraySum([1, 2, 3, 0, 3], 3));
console.log(JSON.stringify(result, null, 2));