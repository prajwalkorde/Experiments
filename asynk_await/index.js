async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('202 ok');

        }, 2000);
    })
}



async function main() {
    console.log('loading module...');

    console.log('other module loaded');

    console.log('loading data');

    let data = await getData()

    console.log(data);

    console.log('process data');

    console.log('task 2 is getting ready');

}

main()
