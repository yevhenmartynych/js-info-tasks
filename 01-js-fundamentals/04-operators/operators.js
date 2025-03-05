'use strict'

// The postfix and prefix forms

let a = 1,
  b = 1

let c = ++a // ?
let d = b++ // ?

console.log(a) // 2
console.log(b) // 2
console.log(c) // 2
console.log(d) // 1

// Assignment result

let f = 2

let x = 1 + (f *= 2)

// The answer is:
console.log(f) // 4 (multiplied by 2)
console.log(x) // 5 (calculated as 1 + 4)

// Type conversions

'' + 1 + 0 // '10'
// The addition with a string "" + 1 converts 1 to a string:
// "" + 1 = "1", and then we have "1" + 0, the same rule is applied.

'' - 1 + 0 // -1
// The subtraction - (like most math operations) only works with numbers,
// it converts an empty string "" to 0.

true + false // 1
6 / '3' // 2
'2' * '3' // 6
4 + 5 + 'px' // '9px'
'$' + 4 + 5 // '$45'
'4' - 2 // 2
'4px' - 2 // NaN

'  -9  ' + 5 // '  -9  5'
// The addition with a string appends the number 5 to the string.

'  -9  ' - 5 // -14
// The subtraction always converts to numbers, so it makes " -9 " a number -9 (ignoring spaces around it).

null + 1 // 1
// null becomes 0 after the numeric conversion.

undefined + 1 // NaN
// undefined becomes NaN after the numeric conversion.

' \t \n' - 2 // -2
//Space characters are trimmed off string start and end
// when a string is converted to a number.
// Here the whole string consists of space characters,
// such as \t, \n and a “regular” space between them.
// So, similarly to an empty string, it becomes 0.

// Fix the addition
let g = +prompt('First number?', 1)
let h = +prompt('Second number?', 2)

alert(g + h) // 3
