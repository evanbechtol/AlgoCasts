// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

/*function steps ( n ) {
  if ( n > 0 ) {
    for ( let i = 1; i <= n; i++ ) {
      let str = "";

      str += "#".repeat( i ) + " ".repeat( n - i );
      console.log( str );
    }
  }
}*/


function steps ( n, counter = 1 ) {
  if ( counter === n + 1 ) {
    return;
  }
  console.log("#".repeat( counter ) + " ".repeat( n - counter ) );
  steps( n, ++counter );
}

module.exports = steps;
