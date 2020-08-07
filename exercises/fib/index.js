// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib1 ( n ) {
  let result = 1;

  if ( n > 2 ) {
    let nMinus1 = 1;
    let nMinus2 = 1;

    for ( let i = 2; i < n; i++ ) {
      result = nMinus1 + nMinus2;
      nMinus2 = nMinus1;
      nMinus1 = result;
    }
  }

  return result;
}

function memoize(fn) {
  const cache = {};

  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  }
}

function fib ( n ) {
  if ( n < 2 ) {
    return n;
  }

  return fib( n - 1 ) + fib( n - 2 );
}

fib = memoize(fib);

module.exports = fib;
