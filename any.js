const promise1 = new Promise((resolve, reject) => {
    setTimeout(reject, 100, 'Rejected');
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 200, 'Resolved');
  });
  
  Promise.any([promise1, promise2])
    .then((value) => {
      console.log('First promise to fulfill:', value); // Output: 'Resolved'
    })
    .catch((error) => {
      console.error('All promises were rejected:', error); // Output: AggregateError: All promises were rejected
    });
  