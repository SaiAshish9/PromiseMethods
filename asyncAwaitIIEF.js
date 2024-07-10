const fetchData = async () => {
    try {
      const response = await axios.get('https://api.example.com/data');
      console.log('Data:', response.data);
      return response.data; // Return value directly
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Optional: rethrow the error or handle as needed
    }
  };
  
  // Using async/await
  (async () => {
    try {
      const data = await fetchData();
      console.log('Data fetched:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  })();

//   IIFE (Immediately Invoked Function Expression) 

  (async (param1, param2) => {
    try {
      const data = await fetchData(param1, param2);
      console.log('Data fetched:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  })('value1', 'value2');
  