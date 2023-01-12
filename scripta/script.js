$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        center:true,
        
        responsive:{
            0:{
                items:1,
            

            },
            600:{
                items:3,
            
            },
            1000:{
                items:6,
               
            }
        }
    })
})
// accordian
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


// for content

$.fn.ready(function(){
$("p").fitText(2,{'minFontSize':10,'maxFontSize':50});
});

$.fn.ready(function(){
  $("h1").fitText(2,{'minFontSize':10,'maxFontSize':50});
  });

  $.fn.ready(function(){
    $("h4").fitText(2,{'minFontSize':10,'maxFontSize':50});
    });

    $.fn.ready(function(){
      $("h5").fitText(2,{'minFontSize':10,'maxFontSize':50});
      });
      
      // form validation

      let form=document.querySelector('.feedbackform');
      let p=document.querySelector('.p');

      form.addEventListener('submit',e=>{
e.preventDefault();
let fname=form.fname.target.value;
let email=form.email.value;
let message=form.message.value;
if(fname===0 ){
  p.textContent='Required';
}else if(fname>0){
alert('submitted');
}

      });