var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool=require('pg').Pool;
var config = {
    user: 'sruthilohi',
    database: 'sruthilohi',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password: process.env.DB_PASSWORD
};
var app = express();
app.use(morgan('combined'));
var articles={
 'article-one':{
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
'article-two':{
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
'article-three':{
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
var pool= new Pool(config);
app.get('/test-db',function(req,res){
  //make a select request 
  //return a response with the results
  pool.query('select *from test',function(err,result){
      if(err){
          res.status(500).send(err.toString());
      }else {
          res.send(JSON.stringify(result.rows));
      }
  });
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter=0;
app.get('/counter', function(req,res) {
    counter=counter+1;
    res.send(counter.toString());
});

//app.get('/submit_name/:name', function(req,res){
app.get('/submit_name', function(req,res){
    //get the name from the request
    var name = req.query.name;
   names.push(name);
   //JSON
   res.send(JSON.stringify(names));
});

app.get('articles/:articleName', function (req, res) {
    //articleName=articleone
    //articles[articleName]={}content object for article one
    pool.query("SELECT *FROM article where title=" +req.params.artlcleName, function(err,result){
      if(err){
          res.status(500).send(err.toString());
          }else
          {
              if (result.rows.length===0)
              {
                 res.status(404).send('article not found') ;
                } else{
                var articleData=result.rows[0];
                 res.send(createtemplate(articleData)) ; 
                 
              }
              
          }
      
    });
   
   
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
var names=[];
//app.get('/submit_name/:name', function(req,res){
app.get('/submit_name', function(req,res){
    //get the name from the request
    var name = req.query.name;
   names.push(name);
   //JSON
   res.send(JSON.stringify(names));
});
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
