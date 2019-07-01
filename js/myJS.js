$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

$('body').append('<a href="#home" class="back-to-top"><img src="./assets/images/uparrowoutline.png" /></a>');
$('.back-to-top').on('mouseenter',function(){
  $(this).addClass('animated bounce');
$('.back-to-top img').attr('src','./assets/images/uparrowfill.png');
});
$('.back-to-top').on('mouseleave',function(){
  $(this).removeClass('animated bounce');
$('.back-to-top img').attr('src','./assets/images/uparrowoutline.png');
});
$(document).ready(function(){
  $('a.back-to-top').fadeOut('slow');
  $(window).scroll(function(){
    if($(window).scrollTop()>400){
      $('.back-to-top').fadeIn('slow');

    }
    else{
        $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function(){
    $('body').animate({scrollTop:0},1000);
    return false;
  });
});


$(document).ready(function(){
  $(window).scroll(function(){
    if($(window).scrollTop() === 0){
      $('nav').css('top','-62px');
    }
    if($(window).scrollTop()>100){
      $('nav').css('top','0px');
    }

  });

});

$('#mediclaim').on('click',function(){
$('.mediclaim').toggle();
});
$('#personal-accident').on('click',function(){
$('.personal-accident').toggle();
});
$('#motor-insurance').on('click',function(){
$('.motor-insurance').toggle();
});
$('#fire-insurance').on('click',function(){
$('.fire-insurance').toggle();
});


$(document).ready(function(){
  $(window).scroll(function(){
    if(($(window).width() <=600 || $(window).width() <=800) && ($('#show-navbar').hasClass('show'))){
      $('nav').css('top','0px');
    }
  });
});


let submitForm = document.getElementById('getintouch-form');

submitForm.addEventListener('submit',(event)=>{


console.log("submited");
event.preventDefault();

},false)