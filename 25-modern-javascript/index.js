//! Arrow Function

const sayHello1 = function () {
    console.log("Hello1");
}
sayHello1()

const sayHello2 = () => {
    console.log("Hello2");
}
sayHello2()

const sayHello3 = () => console.log("Hello3");
sayHello3()

const sayHello4 = function (name) {
    console.log(`Hello, ${name}`);
}
sayHello4("Zeynep")

const sayHello5 = (name) => console.log(`Hello, ${name}`);
sayHello5("Zeynep2")

//! Array Mehods

const numbers = [1, 2, 3, 4, 5]
const numbers10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers1 = [2, 4, 6, 8, 10]

// map
const squares = numbers.map((x) => x * x)
console.log(squares)

// filter
const evenNumbers2 = numbers10.filter((x) => x % 2 === 0)
console.log(evenNumbers2);

// reduce
const sum = numbers.reduce((acc, x) => acc + x, 0)
console.log(sum);

// find
const findNumber = numbers10.find((x) => x > 5)
console.log(findNumber);

// some 
const isBigNumberExist = numbers10.some((x) => x > 11)
console.log(isBigNumberExist);

const isBigNumberExistt = numbers10.some((x) => x > 7)
console.log(isBigNumberExistt);

// every
const isNumbersOdd = evenNumbers1.every((x) => x % 2 !== 0)
console.log(isNumbersOdd);

const isNumbersEven = evenNumbers1.every((x) => x % 2 === 0)
console.log(isNumbersEven);

//! Spread Operator

const numbers1 = [1, 2, 3,]

const numbers2 = [...numbers1, 4, 5, 6]
console.log(numbers2);

const add = (x, y, z) => x + y + z
console.log(add(...numbers1));

const obj1 = { name: "Zeynep", age: 16 }
const obj2 = { ...obj1, job: "Student" }
console.log(obj2);

const objj = { name: "Deniz", job: "Baby", ...obj1 }
console.log(objj);

//! Destructuring

const obj = { name: "Zeynep", age: 16, job: "Student" }
const { name, age } = obj
const newObj = { name, age, location: "Turkiye" }
console.log(newObj);

const { name: firstName } = obj
console.log(firstName);

const [first, second, ...rest] = numbers
console.log(first);
console.log(second);
console.log(rest);

const newObj1 = { name, age, location: "Turkiye", ...obj }
console.log(newObj1);

//! Maps

const map = new Map()
map.set("name", "Zeynep")
map.set("age", 16)
map.set("job", "Student")

console.log(map.get("name"));
console.log(map.get("age"));
console.log(map.get("job"));

(map.delete("job"))
console.log(map)

map.forEach((value, key) => console.log(`${key}: ${value}`))

const set = new Set()
set.add(1)
set.add(2)
set.add(3)
set.add(3) //duplicate value will not be added

console.log(set.has(2))

set.delete(2)
console.log(set);

set.forEach(value => console.log(value))