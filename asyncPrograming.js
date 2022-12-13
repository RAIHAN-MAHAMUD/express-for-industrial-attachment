// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// function print(text) {
//     console.log(text);
// }

// function aprint(text, time) {
//     setTimeout(() => console.log(text), time);
// }


// print('1');
// sleep(10000).then(() => print('2'));
// print('3');
// print('4');
// print('5');


// console.log(aprint());


// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))



// Promise
// let prom1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 5000, 'Call is resolved');
// });
// console.log(prom1)



const url = 'https://jsonplaceholder.typicode.com';

// function getReq(url, callback) {
//     const xhr = new XMLHttpRequest();
//     xhr.open('get', url);

//     xhr.onreadystatechange = function (e) {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 let users = JSON.parse(xhr.response);
//                 callback(users, null);
//             } else {
//                 callback(null, xhr.error);
//             }
//         }
//     }

//     xhr.send();
// }

// function received(res, err) {
//     if (!err) console.log(res);
// }

// getReq(`${url}/users`, (res, err) => { if (!err) console.log(res); })
// getReq(`${url}/users`, received)
// getReq(`${url}/comments`, received)



// Promise
// let prom1 = new Promise((reject, resolve) => {
//     setTimeout(resolve, 3000, 'Call is Resolved 1');
// });

// let prom2 = new Promise((reject, resolved) => {
//     setTimeout(reject, 5000, 'Call is Rejected 2');
// });


// prom1
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

// prom2
//     .then(res => console.log(res))
//     .catch(err => console.log(err))



function getReqByPromise(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('get', url);

        xhr.onreadystatechange = function (e) {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    let users = JSON.parse(xhr.response);
                    resolve(users);
                } else {
                    reject(xhr.status);
                }
            }
        }

        xhr.send();
    });
}

// getReqByPromise(`${url}/users`)
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

async function myUser() {
    let user = await getReqByPromise(`${url}/users`)
    console.log(user);
}

myUser();



