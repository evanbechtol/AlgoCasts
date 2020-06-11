// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar ( str ) {
  const charMap = new Map();
  let max = 0;
  let maxChar = "";

  for ( const char of str ) {
    const value = charMap.get( char ) + 1 || 1;
    charMap.set( char, value );
  }

  charMap.forEach( ( value, key ) => {
    if ( value > max ) {
      max = value;
      maxChar = key;
    }
  } );

  return maxChar;
}

module.exports = maxChar;
