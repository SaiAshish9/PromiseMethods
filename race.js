const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
  });
  
  Promise.race([promise1, promise2])
    .then((value) => {
      console.log('Fastest promise resolved:', value); // Output: 'two'
    })
    .catch((error) => {
      console.error('One of the promises failed:', error);
    });
  