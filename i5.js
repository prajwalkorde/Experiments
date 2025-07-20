let arr = [12, 65, 76, 11];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i]*arr[i]);
// }

let newArr = arr.map(e =>{
    return e * e;
})

console.log(newArr);