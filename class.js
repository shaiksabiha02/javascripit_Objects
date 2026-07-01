class student{
    constructor(name,age){
        this.name=name;
        this.age=age;

    }
}
let s1 = new student("sabiha",23);
console.log(s1);
let s2 = new student("likhitha",22);
let s3 = new student("sony",48);
console.log(s2);
console.log(s3);

class sa{
    constructor(name){
        this.name =name
    }
    greet(){
        console.log("welcome",this.name);
    }
}
let s4 = new sa("sadhika");
s4.greet();

// for calculator using class
class calculator{
    add(a,b){
        console.log(a+b);
    }
    sub(a,b){
        console.log(a-b);
    }
    mul(a,b){
        console.log(a*b);
    }
    div(a,b){
        console.log(a%b);
    }
}
let s5 = new calculator();
s5.add(4,6);
s5.sub(4,6);
s5.mul(8,4);
s5.div(8,4);