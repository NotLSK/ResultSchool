function task1() {
    setTimeout(() => {
        console.log('setTimeout');
    }, 0);
    const promise = new Promise((resolve) => {
        console.log('Promise');
        resolve();
    });
    promise.then(() => {
        console.log('Promise resolve');
    });
    console.log('End');
}

// task1();
/*
Promise
End
Promise resolve
setTimeout
*/

function task2() {

    function runCode() {
        console.log('before promise');
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Zero Promise');
                resolve();
            }, 0);
        });
    }

    setTimeout(() => {
        console.log('Zero');
    }, 0);

    runCode().then(() => console.log('Zero Promise Invoked'));

    console.log('One');
}

// task2()
/*
before promise
One
Zero
Zero Promise
Zero Promise Invoked
*/

function task3() {
    const getData = (callback) => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then((response) => response.json())
            .then((user) => {
                console.log('Success');
                callback(user);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    getData(() => {
        console.log('user received');
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve('promise resolved');
            }, 500);
            console.log('in promise');
            setTimeout(() => {
                console.log('last set timeout');
            }, 400);
        });
        promise.then((result) => {
            console.log(result);
        });
    });

    console.log('End')
}

task3()
/*
End
Success
user received
in promise
promise resolved // last set timeout - не заметил разницу во времени работы setTimeout
last set timeout // promise resolved 
*/