// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       r0 '   #   ' i=0 #=i*2+1
//       r1 '  ###  ' i=1 #=2+1
//       r2 ' ##### ' i=2 #=4+1
//       r3 '#######' i=3 #=6+1

function pyramid2 ( n ) {
  //number of spaces on either side = n - (r# + 1) > 0 ? n - (r# + 1) : 0
  for ( let i = 0; i < n; i++ ) {
    let str = "";
    const numSpaces = n - ( i + 1 ) > 0 ? n - ( i + 1 ) : 0;
    const numAsterisks = i * 2 + 1;
    str += " ".repeat( numSpaces ) + "#".repeat( numAsterisks ) + " ".repeat( numSpaces );

    console.log( str );
  }
}

function pyramid ( n, counter = 0 ) {
  if ( counter === n ) {
    return;
  }

  const numSpaces = n - ( counter + 1 ) > 0 ? n - ( counter + 1 ) : 0;
  const numAsterisks = counter * 2 + 1;
  console.log( " ".repeat( numSpaces ) + "#".repeat( numAsterisks ) + " ".repeat( numSpaces ) );

  pyramid( n, ++counter );
}

module.exports = pyramid;
