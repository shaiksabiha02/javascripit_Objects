// json stringfy
let user ={
    name:"sk.sabiha",
    age:23
};
console.log(user);
localStorage.setItem("user",JSON.stringify(user));// the data is stored
console.log("Data Stored");
console.log(localStorage.getItem("user"));// to get the stored data
// json parse to get the string data to object

let jsondata = '{"name":"sk.sabiha","age":23}';
let obj = JSON.parse(jsondata);
console.log(obj);
sessionStorage.setItem("user",JSON.stringify(user));