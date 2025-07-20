// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(arr.toString());
// console.log(arr.join(" - "));

let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = [9,8,7];
console.log(a1.concat(a2, a3));

let arr= [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
arr.forEach((value, index) => {
    console.log(value + " at index " + index);
});