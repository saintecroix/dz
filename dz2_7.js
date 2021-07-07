let arr=[1, 2, 4, 10, 1.25].reduce(function(arr, a, b) {
    return a/arr.lenght + b/arr.lenght;
  });
  console.log(arr);
  //почему выдается NaN? если у lenght тип undefined то как его поменять? либо как реализовать через методы?