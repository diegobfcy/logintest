const ApiService = {
    async sendDataToApi(dni, name, password) {
      try {

        const apiUrl = 'http://localhost:3001/api/sendData';
  

        const payload = {
          dni,
          name,
          password,
        };

        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
  
        if (!response.ok) {
          throw new Error('Error sending data to the API');
        }
  
        const responseData = await response.json();
        return responseData;
      } catch (error) {
        console.error('ApiService Error:', error.message);
        throw error;
      }
    },
  };
  
  export default ApiService;
  