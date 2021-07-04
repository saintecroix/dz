let arr=[1, 2, "tri", true, 1.25];
let stroka = "";
for (let i = 0; i < arr.length; i++) {
    stroka += arr[i];
        if (i < (arr.length-1)){
            stroka += ", ";
        }
}
console.log(stroka);