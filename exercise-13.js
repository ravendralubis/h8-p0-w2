function xo(str) {
    var counterX = 0;
    var counterO = 0;

    for(var i = 0; i < str.length; i++) {
        if(str[i] === 'x') { 
            counterX += 1;   
        }
        else if(str[i]==='o') {
            counterO += 1;
        }
    } 
    if(counterX === counterO) {
        return true;
    } else {
        return false;
    } 
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
