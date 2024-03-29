const {readFile, writeFile} = require('fs');
const { resourceLimits } = require('worker_threads');

console.log('start');
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if(err) {
        console.log(err);
        return
    }
    const first = result;

    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if(err) {
            console.log(err);
            return
        }
        const second = result;

        writeFile('./content/async-result.txt', `The result is: ${first} and ${second}`, {flag: 'a'}, (err, result) => {
            if(err) {
                console.log(err);
                return
            }
            console.log('done with this task!');
        })
    })
})

console.log('starting next task');