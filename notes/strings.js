// ASCII contains 128 characters. Extended ASCII contains 256 characters.
// Unicode contains 143,859 characters.

abc = 'abc'

// Use regex on a string to see if its alphanumeric. /i means case insensitive.
abc[0].match(/[a-z0-9]/i) // true

// Apply lowercase to a string
abc[0].toLowerCase() // 'a'

// Apply uppercase to a string
abc[0].toUpperCase() // 'A'

// Convert to array
arr = abc.split('') // ['a', 'b', 'c']

// Convert to string
arr = abc.join('') // 'abc'

// Reverse a string
abc.split('').reverse().join('') // 'cba'
