function sumNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  
  // example usage
  console.log(sumNumbers(5));