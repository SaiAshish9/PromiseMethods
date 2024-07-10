function getPromiseState(promise) {
    const t = {};
    return Promise.race([promise, t])
        .then(v => (v === t) ? 'pending' : 'fulfilled', () => 'rejected');
}

// Example usage:
const pendingPromise = new Promise(() => {});
const fulfilledPromise = Promise.resolve('Success');
const rejectedPromise = Promise.reject('Error');

getPromiseState(pendingPromise).then(state => console.log(state)); // Output: pending
getPromiseState(fulfilledPromise).then(state => console.log(state)); // Output: fulfilled
getPromiseState(rejectedPromise).then(state => console.log(state)); // Output: rejected
