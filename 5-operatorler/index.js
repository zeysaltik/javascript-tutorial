let number1 = 10
let number2 = 20
let number3 = 30
let result
result = number1
result += number3 //number1 + number3
result -= number3 //number1 - number3
result /= number3 //number1 / number3
result *= number3 //number1 * number3
result %= number3//number3 % number1
result = ++number1
result = number1++

console.log(result)

result = number1 == number2 //false
result = number1 != number2 //true
result = 10 == "10"
result = 10 === "10"
result = number1 > number2
result = number1 < number2
result = number1 >= number2
result = number1 <= number2

console.log(result)

console.log(number1 === number2 && number1 < number2)
console.log(number1 !== number2 && number1 < number2)

console.log(number3 === number2 || number2 > number1)

console.log(!(number1 > number3) && number2 >= number1)