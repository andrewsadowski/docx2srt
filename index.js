const fs = require('fs');
const path = require('path');

const mammoth = require('mammoth');

mammoth
  .extractRawText({ path: './testDocs/test.docx' })
  .then(result => {
    let content = result.value;
    let cleanContent = content.split('\n\n');
    let arrContent = [...cleanContent];
    console.log(arrContent);
  })
  .done();
