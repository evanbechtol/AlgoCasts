// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'eLppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse ( str ) {
  return str ? str.split( "" ).reverse().join( "" ) : "";
}

function reverse2 ( str ) {
  const splitStr = str.split( "" );
  let reverseStr = "";

  for ( let i = splitStr.length - 1; i >= 0; i-- ) {
    reverseStr += splitStr[ i ];
  }

  return reverseStr;
}

function reverse3 ( str ) {
  return str
    .split( "" )
    .reduce( ( rev, char ) => char + rev, "" );
}

module.exports = reverse;
