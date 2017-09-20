var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
 articleone:{
    title: 'sruthi|article-one',
    heading:'Article one',
    date:' sep5,2017',
    content: `   <p>
                     
                     this is my first article this is my first article
                     this is my first article
                     this is my first article
                 </p>
                 <p>
                     
                     this is my first article this is my first article
                     this is my first article
                     this is my first article
                 </p> `
}, 
articletwo:{
     title: 'sruthi|article-two',
    heading:'Article two',
    date:' sep15,2017',
    content: `   <p>
                     
                     this is my second article this is my second article
                     this is my second article
                     this is my second article
                 </p>
                 <p>
                     
                     this is my second article this is my second article
                     this is my second article
                     this is my second article
                 </p> `
},
articlethree:{
     title: 'sruthi|article-three',
    heading:'Article three',
    date:' sep15,2017',
    content: `   <p>
                     
                     this is my three article this is my three article
                     this is my three article
                     this is my three article
                 </p>
                 <p>
                     
                     this is my three article this is my three article
                     this is my three article
                     this is my three article
                 </p> `
},
};

function createtemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
var htmltemplate= ` 
<html>
    <head> 
    <title>
        ${title}
     </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
         <link href="/ui/style.css" rel="stylesheet" />
       
    </head>
     <body>
         <div class="container">
             
             <div>
                 <a href='/'>Home</a>
             </div>
             <div>
             <h3>
                ${heading}
             </h3>
             </div>
             <div>
                 ${date}
             </div>
             <div>
                ${content}
                 </div>
             </div>
     </body>   
</html>

`;
return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
  res.send(createtemplate(articleone));
});
app.get('/article-two', function (req, res) {
  res.send(createtemplate(articletwo));
});
app.get('/article-three', function (req, res) {
  res.send(createtemplate(articlethree));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
