'use strict'


function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("container").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("container").style.marginLeft = "0px";
}


var slideIndex = [1,1];
var slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
};


$("a b").html(function(index, html) {
  return html.replace(/\S/g, '<span>$&</span>');
});

$("a").click(function(){
        $("a").addClass("loading");     
        setTimeout(function(){
          $("a").removeClass("loading"); 
        }, 8000);

});
