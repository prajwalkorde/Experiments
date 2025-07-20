function Greet(name) {
   console.log("hello " + name + " how are you doing today?");
}
Greet("John");
Greet("Jane");

function sum(a,b=5) {
   return a + b;
}
result = sum(5,10);
result = sum(5);

console.log("The sum is: " + result);

const func1 = (x) => {
    console.log("i am an arrow function " + x);
}
func1("test");
func1("another test");

const func2 = (x,y) => {
    return x + y;
}

r=func2(10,20);
console.log("The result of func2 is: " + r);