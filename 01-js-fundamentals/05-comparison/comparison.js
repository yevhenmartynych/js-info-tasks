// Obviously, true.(1)
5 > 4 // true

// Dictionary comparison, hence false. "a" is smaller than "p".(2)
'apple' > 'pineapple' // false

// Again, dictionary comparison, first char "2" is greater than the first char "1".(3)
'2' > '12' // true

// Values null and undefined equal each other only.(4)
undefined == null // true

// Strict equality is strict. Different types from both sides lead to false.(5)
undefined === null // false

// Similar to (4), null only equals undefined.(6)
null == '\n0\n' // false

// Strict equality of different types.(7)
null === +'\n0\n' // false
