let arr=[1, 2, "tri", true, 1.25];
function getFirst(arr, n) {
    if (arr == null) return false;
    if (n == null) return arr[0];
  return arr.slice(0, n);
}
console.log(getFirst(arr, 1));