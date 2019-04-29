let html = '<html>'
const dict = {
  0:'h1',
  1:'h2',
  2:'h3',
  3:'img',
  4:'p'
}

const words = ["amazing", "awesome", "blithesome", "excellent", "fabulous", "fantastic", "favorable", "fortuitous", "gorgeous", "incredible", "ineffable", "mirthful", "outstanding", "perfect", "propitious", "remarkable", "rousing", "spectacular", "splendid", "stellar", "stupendous", "super", "upbeat", "unbelievable", "wondrous"]

const images = [
  'https://media.wired.com/photos/5b7f64cbbe2f8d3a624b77b2/master/w_2000,c_limit/SPoW_82318_01.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/c/c7/Carina_Nebula_composite_of_visible_and_infrared_light_%28captured_by_the_Hubble_Space_Telescope%29.jpg',
  'https://cdn4.img.sputniknews.com/images/107038/27/1070382715.jpg'
]

let bodyTags = []
for (var i = 0; i < 15; i++) {
  bodyTags.push(dict[Math.floor(5 * Math.random())])
}

let head = '<title>Random web</title>'
let body = ''
for (let i = 0; i < bodyTags.length; i++) {

  //body += content
  if (bodyTags[i] == 'h1' || bodyTags[i] == 'h2' || bodyTags[i] == 'h3') {
    body += '<' + bodyTags[i] + '>'
    let len = Math.floor(10 * Math.random())
    for (let i = 0; i < len; i++) {
      body += words[Math.floor(len * Math.random())]
      body += ' '
    }
    body += '</' + bodyTags[i] + '>'
  }
  else if (bodyTags[i] == 'img') {
    body += '<img src=\"' + images[Math.floor(images.length * Math.random())] + '\" style=\"width:50%\" />'
  }
  else if (bodyTags[i] == 'p') {
    body += '<p>'
    let len = Math.floor(30 * Math.random())
    for (let i = 0; i < len; i++) {
      body += words[Math.floor(len * Math.random())]
      body += ' '
    }
    body += '</p>'
  }


}

html += '<head>' + head + '</head><body>' + body + '</body></html>'

const fs = require('fs');
fs.writeFile('index.html', html, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});
