/* console.log('Loaded!');
var element= document.getElementById('main-text');
element.innerHTML='new value';
// move the image
var img = document.getElementById('madi');
var marginLeft=0;
function moveRight(){
  marginLeft=marginLeft+1;
  img.style.marginLeft=marginLeft+ 'px';
}
img.onclick = function() {
    var interval= setInterval(moveRight, 50);
   
};*/
var button= document.getElementById('counter');


// create a request object

button.onclick = function(){
    
var request= new XMLHttpRequest();
// capture the response and store it in a variable
request.onreadystatechange= function() {
    if (request.readystate===XMLHttpRequest.done){
        //take action
        if (request.status===200){
           var counter=request.responseText  ;
           var span=document.getElementById('count');
           span.innerHTML=counter.toString();
        }
    }
    //not done yet
};

//make the request
request.open('GET','http://sruthilohi.imad.hasura-app.io/counter',true);
request.send('null');

};
var nameInput=document.getElementById('name');
var name=nameInput.value;
var submit=document.getElementById('submit_btn');
submit.onclick= function() {
    
    //make request to the server and send the name
    // capture the list of names and render in a list
    
    var names=['name1','name2','name3'];
    var list='';
    for(var i=0; i<=names.length; i++){
    list += '<li>' + names[i] + '<li>';
    }
    var ul=document.getElementById('namelist');
    ul.innerHTML= list;
    
};