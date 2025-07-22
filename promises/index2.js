let prom1 = new Promise((resolve, reject) => {
    if (Math.random() < 0.5) {
        reject('Error occurred');
    } else {
        console.log('2nd line is done');
        setTimeout(() => {
            console.log('3rd line is done');
            resolve('4th line is done');
        }, 1000);
    }
})

prom1.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});


let prom2 = new Promise((resolve, reject) => {
    if (Math.random() < 0.5) {
        reject('Error occurred');
    } else {
        console.log('prom2 2nd line is done');
        setTimeout(() => {
            console.log('prom2 3rd line is done');
            resolve('prom2 4th line is done');
        }, 1000);
    }
})

prom2.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});

let prom3 = Promise.all([prom1, prom2])
prom3.then((results) => {
    console.log('All promises resolved:', results);
}).catch((error) => {
    console.log('One of the promises failed:', error);
});
console.log('1st line is done');