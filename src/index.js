module.exports = (on, config) => {
    on('task', {
      generateDescribe: async ({ topic, numCases = 10 }) => {  // Default to 10 cases if not specified
        const fs = require('fs').promises;
        const path = require('path');
        const filePath = path.resolve(config.projectRoot, `cypress/e2e/${topic}.cy.js`);
        
        let content = `describe('${topic}', () => {\n`;
        for (let i = 1; i <= numCases; i++) {
          content += `  it('should perform test case ${i}', () => {\n`;
          content += `    cy.log('Executing test case ${i} for ${topic}');\n`;  // Custom actions can be added here
          content += `  });\n`;
        }
        content += '});\n';
  
        await fs.writeFile(filePath, content);
        console.log(`Test suite for ${topic} with ${numCases} cases generated.`);
        return null;
      }
    });
  };
  