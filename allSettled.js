const promise1 = Promise.resolve(1);
const promise2 = Promise.reject(new Error('Rejected'));

Promise.allSettled([promise1, promise2])
  .then((results) => {
    console.log('All promises settled:', results);
    /*
      Output:
      [
        { status: 'fulfilled', value: 1 },
        { status: 'rejected', reason: Error: Rejected at <anonymous>:4:29 }
      ]
    */
  });
