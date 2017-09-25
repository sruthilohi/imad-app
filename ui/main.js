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
var request= new xmlHttpRequest();
// capture the response and store it in a variable
request.onreadystatechange= function() {
    if (request.readystate===xmlHttpRequest.done){
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
request.open('Get','https://imad.hasura.io/counter',true);
response.send('null');

};
