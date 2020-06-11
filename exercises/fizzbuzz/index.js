// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz ( n ) {
  const fizz = "fizz";
  const buzz = "buzz";

  for ( let i = 1; i <= n; i++ ) {
    let isFizz = isMultipleOfThree( i );
    let isBuzz = isMultipleOfFive( i );
    let str = "";

    if ( !( isFizz || isBuzz ) ) {
      str = i;
    } else {
      if ( isFizz ) {
        str += fizz;
      }

      if ( isBuzz ) {
        str += buzz;
      }
    }
    console.log(str);
  }
}

function isMultipleOfThree ( n ) {
  return n % 3 === 0;
}

function isMultipleOfFive ( n ) {
  return n % 5 === 0;
}

module.exports = fizzBuzz;
