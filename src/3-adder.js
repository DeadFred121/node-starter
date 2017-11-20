function sum(numbers) {
  let total = 0
  numbers.forEach(number => {
    total = total + number
  })
  return total
}

console.log(sum([12, 5])) // => 17
console.log(sum([5, 7, 1])) // => 13

function multiple(numbers) {
  let total = 1
  numbers.forEach(number => {
    total = total * number
  })
  return total
}

console.log(multiple([20, 5])) // => 100
console.log(multiple([10, 2])) // => 20

function sumNumbersString(numbersString) {
  const numbers = numbersString
    .split('+')
    .map(string => parseFloat(string))

  return sum(numbers)
}

console.log(sumNumbersString('12 + 5')) // => 17
console.log(sumNumbersString('5 + 7 + 1')) // => 13
console.log(sumNumbersString('1 + 2 + 3 + 4 + 5')) // => 15

function multipleNumbersString(numbersString) {
  const numbers = numbersString
    .split('*')
    .map(string => parseFloat(string))

  return multiple(numbers)
}

console.log(multipleNumbersString('20 * 10 * 5')) // => 1000
console.log(multipleNumbersString('5 * 7 * 1')) // => 35
console.log(multipleNumbersString('1 * 2 * 3 * 4 * 5')) // => 120
/*

Challenges:
1. Add `multiple` and `multipleNumbersString` functions that multiply instead of adding, with example usage

*/
