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
var counter= counter+1;
button.onclick = function(){
    counter=counter=1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
};
