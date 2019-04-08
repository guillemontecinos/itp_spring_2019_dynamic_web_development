let poem

let fs = require('fs')
  , filename = 'poem.txt';
fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  console.log('OK: ' + filename);
  poem = data.split('\n')
  createHTML()
});

function createHTML(){
  // console.log(poem)
  let title = poem[0]
  let bodyContent = ''
  let h = 2
  for (let i = 0; i < poem.length - 1; i++) {
    if (poem[i].length > 2 && poem[i].length < 39) {
      bodyContent += '<h' + h + '>' + poem[i] + '</h' + h + '>'
      h++
    }
    else if (poem[i].length >= 39) {
      bodyContent += '<p>' + poem[i] + '</p>'
    }
  }
  console.log(bodyContent)

  // build page structure
  let html = '<html><head><title>' + title + '</title></head><body>' + '<h1>' + poem[0] + '</h1>' + bodyContent + '</body></html>'
  // console.log(html)

  // print index.html
  const fs = require('fs');
  fs.writeFile('index.html', html, function(err) {
      if(err) {
          return console.log(err);
      }

      console.log("The file was saved!");
  });


}
