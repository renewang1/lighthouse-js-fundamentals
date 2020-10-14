const howManyHundreds = function(num) {
  if (num % 100 !== 0) {
    return (num - (num % 100)) / 100;
  } else {
    return num / 100;
  }
}

console.log(howManyHundreds(1000));
console.log(howManyHundreds(894));
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);
