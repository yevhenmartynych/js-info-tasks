// What's the result of OR?
alert(null || 2 || undefined) // 2

// What's the result of OR'ed alerts?

// The answer: first 1, then 2.
alert(alert(1) || 2 || alert(3))
// The call to alert does not return a value. Or, in other words, it returns undefined.
// The first OR || evaluates its left operand alert(1). That shows the first message with 1.
// The alert returns undefined, so OR goes on to the second operand searching for a truthy value.
// The second operand 2 is truthy, so the execution is halted, 2 is returned and then shown by the outer alert.
// There will be no 3, because the evaluation does not reach alert(3).

// What is the result of AND?
alert(1 && null && 2)
// The answer: null, because it’s the first falsy value from the list.

// What is the result of AND'ed alerts?
alert(alert(1) && alert(2))
// The answer: 1, and then undefined.
// The call to alert returns undefined (it just shows a message, so there’s no meaningful return).

// Because of that, && evaluates the left operand (outputs 1), and immediately stops, because undefined is a falsy value. And && looks for a falsy value and returns it, so it’s done.

// The result of OR AND OR

// The answer: 3.
alert(null || (2 && 3) || 4)

// The precedence of AND && is higher than ||, so it executes first.

// The result of 2 && 3 = 3, so the expression becomes:
null || 3 || 4
// Now the result is the first truthy value: 3.

// Check the range between
if (age >= 14 && age <= 90);

// Check the range outside
// The first variant
if (!(age >= 14 && age <= 90));

// The second variant
if (age < 14 || age > 90);

// A question about "if"
if (-1 || 0) alert('first')
if (-1 && 0) alert('second')
if (null || (-1 && 1)) alert('third')

// Runs.
// The result of -1 || 0 = -1, truthy
if (-1 || 0) alert('first')

// Doesn't run
// -1 && 0 = 0, falsy
if (-1 && 0) alert('second')

// Executes
// Operator && has a higher precedence than ||
// so -1 && 1 executes first, giving us the chain:
// null || -1 && 1  ->  null || 1  ->  1
if (null || (-1 && 1)) alert('third')

// Check the login
const userName = prompt(`Who's there?`)

if (userName === 'Admin') {
  const pass = prompt('Password?')
  if (pass === 'TheMaster') {
    alert(`Welcome!`)
  } else if (pass === '' || pass === null) {
    alert(`Canceled`)
  } else {
    alert('Wrong pass')
  }
} else if (userName === '' || userName === null) {
  alert(`Canceled`)
} else {
  alert(`I don't know you`)
}
