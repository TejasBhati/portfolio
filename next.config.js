// next.config.js
module.exports = {
    // Your existing configuration options go here
  
    // Add the following export configuration
    exportPathMap: async function () {
      return {
        '/': { page: '/' },
        // Add other paths as needed
      };
    },
  };
  