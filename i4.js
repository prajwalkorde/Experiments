let obj = {a:1, b:2, c:3};
// console.log(obj);
// console.log(obj.a);

for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const ele = obj[key];
        console.log(key, ele);
    }
}