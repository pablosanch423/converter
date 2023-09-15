const fs = require('fs');
const marked = require('marked');

const inputFileName = 'input.md'; 
const outputFileName = 'output.html';

fs.readFile(inputFileName, 'utf8', (err, markdownData) => {
  if (err) {
    console.error(`Error reading ${inputFileName}: ${err}`);
    return;
  }

  const htmlData = marked(markdownData);

  fs.writeFile(outputFileName, htmlData, (err) => {
    if (err) {
      console.error(`Error writing ${outputFileName}: ${err}`);
      return;
    }
    console.log(`Conversion complete. HTML saved as ${outputFileName}`);
  });
});
