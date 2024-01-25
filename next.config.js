// next.config.js
module.exports = {
    output: 'export',
  
    // Add the following export configuration
    exportPathMap: async function () {
      return {
        '/': { page: '/' },
        // Add other paths as needed
      };
    },
  };
  
