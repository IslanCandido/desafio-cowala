function GerarFibonacci(n) {
  var fibonacci = [];
  fibonacci[0] = 0;
  fibonacci[1] = 1;
  for (var i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  }
  return fibonacci;
}

console.log(GerarFibonacci(5));  //[ 0, 1, 1, 2, 3 ]
console.log(GerarFibonacci(10)); //[ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(GerarFibonacci(23)); //[ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711]


