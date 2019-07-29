function pancakeFlipper (numOfPancakes, flipperWidth) {
  // iterate through string of pancakes looking for upside-downers
  let count = 0;
  for (var i = 0; i < (numOfPancakes.length - (flipperWidth - 1)); i++) {
    if (numOfPancakes[i] === '-') {
      count++;
      for (var j = 0; j < flipperWidth; j++) {
        if (numOfPancakes[i + j]  === '-') {
          numOfPancakes[i + j] = '+';
        } else if (numOfPancakes[i + j]  === '+') {
          numOfPancakes[i + j] = '-';
        }
      }
    }
  }
// console.log(numOfPancakes);
  if (numOfPancakes.indexOf('-') === -1) {
    return count;
  } else {
  return 'IMPOSSIBLE';
  }
}

numOfPancakes = ['+','+','+','-', '+','+','-','-', '+', '+', '-', '+'];
flipperWidth = 3;

console.log(pancakeFlipper(numOfPancakes, flipperWidth));
