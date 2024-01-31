
const axios = require("axios");

const SendEmail = (data) => {
  return axios.post('/api/send', data)
    .then(response => {
      // Handle success
      console.log('Email sent successfully:', response.data);
      return response.data; // You can return additional information if needed
    })
    .catch(error => {
      // Handle error
      console.error('Error sending email:', error);
      throw error; // Rethrow the error to propagate it to the calling code
    });
};

module.exports = {
  SendEmail
};
