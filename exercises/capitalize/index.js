// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize ( str ) {
  return str
    .split( " " )
    .map( word => word = word[ 0 ].toUpperCase() + word.slice( 1 ) )
    .join( " " );
}

function capitalize2 ( str ) {
  let previousChar;
  let word = "";

  for ( let char of str ) {
    if ( previousChar === " " || !previousChar ) {
      char = char.toUpperCase();
    }
    word += char;
    previousChar = char;
  }

  return word;
}

module.exports = capitalize;
