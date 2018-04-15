const fs = require('fs');
const path = require('path');

const docx4js = require('docx4js');
const mammoth = require('mammoth');
// const docx2html = require('docx2html');

mammoth
  .extractRawText({ path: './testDocs/test.docx' })
  .then(result => {
    let content = result.value;
    let cleanContent = content.split('\n\n');
    let arrContent = [...cleanContent];
    console.log(arrContent);
  })
  .done();

// docx2html("~/test/test.docx").then(function(html){
// 	html.toString()
// })

//Docx4js
// docx4js.load('./testDocs/test.docx').then(docx => console.log(docx.content()));
