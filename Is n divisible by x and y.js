/*  Question Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits. */

function isDivisible(n, x, y) {
    let res1 = n/x;
    let res2 = n/y;
    
    if(res1 % 1 === 0 && res2 % 1 === 0){
      return true;
    } else {
      return false
    }
  }