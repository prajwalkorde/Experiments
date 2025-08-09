const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    const fetchData = () => {
        return new Promise((resolved, reject) => {
            setTimeout(() => {
                const success = true;

                if (success) {
                    resolved("Data fetched sucessfully!");
                } else {
                    reject("Error fetching data");
                }
            }, 2000);
        });
    };
    fetchData()
        .then((result) => console.log(result))
        .catch((error) => console.error(error));

}) 