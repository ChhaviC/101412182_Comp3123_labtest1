function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            reject(new Error('Input should be an array.'));
        }
        const filteredArray = mixedArray
            .filter(item => typeof item === 'string')  // Filter only string elements
            .map(word => word.toLowerCase());         // Convert to lowercase
        resolve(filteredArray);                       // Resolve the result
    });
}


const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
    .then(result => console.log(result))  
    .catch(error => console.error(error));
    