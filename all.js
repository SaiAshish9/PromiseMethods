function logPromise(promise, label) {
  return promise.then((result) => {
    console.log(`${label}:`, result);
    return result;
  }).catch((error) => {
    console.error(`${label} failed:`, error);
    throw error;  // Re-throw the error to ensure Promise.all can handle it
  });
}

const promise1 = new Promise((resolve) => setTimeout(resolve, 100, 'Promise 1 resolved'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 200, 'Promise 2 resolved'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 300, 'Promise 3 resolved'));

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
