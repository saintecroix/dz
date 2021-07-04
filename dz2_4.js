let arr=[1, 2, 4, 10, 1.25].reduce(function(a, b) {
    return a + b;
  });
  let arr1=[1, 2, 4, 10, 1.25].reduce(function(a, b) {
    return a * b;
  });
console.log("Сумма равна: " + arr + "\n" + "Произведение равно: " + arr1);