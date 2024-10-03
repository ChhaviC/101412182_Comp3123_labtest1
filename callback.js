// callbacks.js

// Method that resolves a promise with a message after 500ms
function resolvedPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({message:'delayed success!'});
        }, 500);
    });
}

// Method that rejects a promise with an error message after 500ms
function rejectedPromise() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject({ Error:'delayed exception!'});
        }, 500);
    });
}

// Handling the resolvedPromise
resolvedPromise()
    .then(result => console.log(result))  
    .catch(error => console.error(error));

// Handling the rejectedPromise
rejectedPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error));  