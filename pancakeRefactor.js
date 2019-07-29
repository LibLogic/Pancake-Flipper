function pancakeFlipper(pancakes, flipperWidth) {
  let count = 0;
  while( pancakes.indexOf('-') !== -1 && pancakes.indexOf('-') < pancakes.length - flipperWidth ) {
    count++;
    let index = pancakes.indexOf('-');
    for ( let i = 0; i < flipperWidth; i++) {
      pancakes[index + i] === '-' ?
      pancakes[index + i] = '+' :
      pancakes[index + i] = '-';
    }
  }
  return pancakes.indexOf('-') === -1 ? count : 'IMPOSSIBLE';
}

console.log(pancakeFlipper(['+','+','+','-', '+','+','-','-', '+', '+', '-', '+'], 3));