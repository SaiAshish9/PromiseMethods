function logPromise(promise, label) {
  return promise.then((result) => {
    console.log(`${label}:`, result);
    return result;
  }).catch((error) => {
    console.error(`${label} failed:`, error);
    throw error;  // Re-throw the error to ensure Promise.all can handle it
  });
}

let promise1 = new Promise((resolve) => setTimeout(resolve, 100, 'Promise 1 resolved'));
let promise2 = new Promise((resolve) => setTimeout(resolve, 200, 'Promise 2 resolved'));
let promise3 = new Promise((resolve) => setTimeout(resolve, 300, 'Promise 3 resolved'));

const loggingPromise1 = logPromise(promise1, 'Promise 1');
const loggingPromise2 = logPromise(promise2, 'Promise 2');
const loggingPromise3 = logPromise(promise3, 'Promise 3');

Promise.all([loggingPromise1, loggingPromise2, loggingPromise3])
  .then((results) => {
    console.log('All promises resolved:', results);
  })
  .catch((error) => {
    console.error('One or more promises rejected:', error);
  });


 promise1 = Promise.resolve(1);
 promise2 = Promise.resolve(2);
 promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 3);
});

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log('All promises resolved:', values); // Output: [1, 2, 3]
  })
  .catch((error) => {
    console.error('One of the promises failed:', error);
  });
