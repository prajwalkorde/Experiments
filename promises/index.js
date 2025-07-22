console.log('1st line is done');

let prom1 = new Promise((resolve, reject) => {
    if (Math.random() < 0.5) {
        reject('Error occurred');
    }
    else {
        console.log('2nd line is done');
        setTimeout(() => {
            console.log('3rd line is done');
            resolve('4th line is done');
        }, 1000);
    }

});

prom1.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})

