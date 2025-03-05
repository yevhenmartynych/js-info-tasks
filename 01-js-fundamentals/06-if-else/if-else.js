// The name of JavaScript

const answer = prompt(`What's the “official” name of JavaScript?`)

if (answer === 'ECMAScript') {
  alert(`Right!`)
} else {
  alert(`You don't know? “ECMAScript”!`)
}

// Show the sign
const getNumber = prompt(`Type a number`, 123)

if (getNumber > 0) {
  alert(1)
} else if (getNumber < 0) {
  alert(-1)
} else {
  alert(0)
}

// Rewrite 'if' into '?'
/* 
let result

if (a + b < 4) {
  result = 'Below'
} else {
  result = 'Over'
}
 */
let result = a + b < 4 ? 'Below' : 'Over'

// Rewrite 'if..else' into '?'

/* 
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
*/

let message =
  login == 'Employee'
    ? 'Hello'
    : login == 'Director'
    ? 'Greetings'
    : login == ''
    ? 'No login'
    : ''
