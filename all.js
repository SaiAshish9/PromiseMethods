const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 3);
});

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log('All promises resolved:', values); // Output: [1, 2, 3]
  })
  .catch((error) => {
    console.error('One of the promises failed:', error);
  });
