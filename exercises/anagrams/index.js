// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams ( stringA, stringB ) {
  return cleanString( stringA ) === cleanString( stringB );
}

function cleanString ( str ) {
  return str
    .replace( /[^\w]/g, "" )
    .toLowerCase()
    .split( "" )
    .sort()
    .join( "" );
}


function anagrams1 ( stringA, stringB ) {
  // replace all non-alphanumeric characters with empty string
  const alphaNumericRegex = new RegExp( /[^\w]/g );
  const cleanStringA = stringA.replace( alphaNumericRegex, "" ).toLowerCase();
  const cleanStringB = stringB.replace( alphaNumericRegex, "" ).toLowerCase();
  const charMapA = createCharacterMap( cleanStringA );
  const charMapB = createCharacterMap( cleanStringB );
  let isAnagram;

  // Verify that both maps have the same number of keys
  if ( Object.keys( charMapA ).length !== Object.keys( charMapB ).length ) {
    isAnagram = false;
  } else {
    const keysA = Object.keys( charMapA );

    // Using find, see if there are any keys with unequal values.
    // If find returns "undefined", both maps are equal
    isAnagram = !keysA.find( key => charMapA[ key ] !== charMapB[ key ] );
  }

  return isAnagram;
}

function createCharacterMap ( str ) {
  const charMap = {};

  for ( const char of str ) {
    charMap[ char ] = charMap[ char ] + 1 || 1;
  }

  return charMap;
}

module.exports = anagrams;
