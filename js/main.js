$('.owl-carousel').owlCarousel({
    loop:true,
    margin: 0,
    padding:0,
    items: 1,
    nav:true,
    navText:["<i class=\"fa fa-chevron-left\"></i>","<i class=\"fa fa-chevron-right\"></i>"],
    dots: true,
    
})





//changing nav-menu while resizing desk
function myFunction(x) {
  var k = document.getElementById("myTopnav");
  
  if (x.matches) { 

        k.className = "topnav responsive";
    }
   else {
    k.className = "topnav remont";
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) 
x.addListener(myFunction)



//Open nav-menu//
function respMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}




    function demo1() {
      document.getElementById("demo1").classList.toggle("show");
  }
  function demo2() {
    document.getElementById("demo2").classList.toggle("show");
}
function demo3() {
  document.getElementById("demo3").classList.toggle("show");
}

