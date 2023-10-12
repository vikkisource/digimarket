
window.addEventListener('scroll', reveal);
window.addEventListener('scroll', specleft);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}

function alignleft(){
    var ck= document.querySelectorAll('.check-it');
    console.log(ck.length);
    for(var i = 0; i < ck.length; i++){
        console.log(ck[i]);
        ck[i].classList.add('active');
    }

}
window.onload=alignleft();


function specleft(){
    var scleft = document.querySelectorAll('.spec-left');
    for(var i = 0; i < scleft.length; i++){

var windowheight = window.innerHeight;
var revealtop = scleft[i].getBoundingClientRect().top;
var revealpoint = 220;

if(revealtop < windowheight - revealpoint){
scleft[i].classList.add('active');
}
else{
scleft[i].classList.remove('active');
}
}

}