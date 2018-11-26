//draw red vertical line
   $(window).scroll(function() {

        if ($(document).scrollTop() > 50) 
          $('.main-connect-line').animate({"height": "250px"}, 800);
         
      });

    //scrool to div
    $('#scrollToDiv').click(function() {
            var pos = $('#members').offset().top;
            $('html, body').animate({'scrollTop' : pos-150},'4500');
                return false;
        });

  // fade in divs
    function hideText(){
      $('.hidemeText').each( function(i){

           var bottom_of_object = $(this).position().top + $(this).outerHeight();
           var bottom_of_window = $(window).scrollTop() + $(window).height();

           if( bottom_of_window > bottom_of_object ){

               $(this).animate({'opacity':'1'},1000, hideButtons);

           }
      });
    };
    function hideButtons(){
      $('.hidemeBtn').each( function(i){

           var bottom_of_object = $(this).position().top + $(this).outerHeight();
           var bottom_of_window = $(window).scrollTop() + $(window).height();

           if( bottom_of_window > bottom_of_object ){

               $(this).delay(200).animate({'opacity':'1'},800);

           }

      });
    }

    $(window).scroll( function(){
       hideText();
    });
    
    // funkcija za saat
    function clockJavaScript() {
      var now = new Date();
      var minutes = now.getMinutes();
      var minutesDegrees = (minutes / 60) *360 + 90;
      // var minutesHand = document.querySelector(".minutes-hand");
      // minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
      $(".minutes-hand").css(`transform`, `rotate(${minutesDegrees}deg)`);

      var hours = now.getHours();
      var hoursNewYork = now.getHours()-6;
      var hoursLondon = now.getHours()-1;

      
      var hoursDegrees = (hours / 12) *360 + 90;
      var hoursDegreesNew = (hoursNewYork / 12) *360 + 90;
      var hoursDegreesLondon = (hoursLondon / 12) *360 + 90;


      $(".hours-hand").css(`transform`, `rotate(${hoursDegrees}deg)`);
      $(".hours-hand-new").css(`transform`, `rotate(${hoursDegreesNew}deg)`);
      $(".hours-hand-london").css(`transform`, `rotate(${hoursDegreesLondon}deg)`);
    }
    setInterval(clockJavaScript, 1000);


// funkcija za navigacija


  $(document).scroll(function () {
    var $nav = $(".navigation");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      if($(this).scrollTop() > $nav.height()) {
        $("#logo").attr("src","https://www.localised.com/img/logo-glyph-black-eb012a8d0d.svg");
      } 
      else {
        $("#logo").attr("src","https://www.localised.com/img/logo-glyph-white-585e89bacf.svg");

      }
  });

    var $nav = $(".navigation");
  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    if($(this).scrollTop() > $nav.height()) {
        $("#logo").attr("src","https://www.localised.com/img/logo-glyph-black-eb012a8d0d.svg");
  } 
  else {
        $("#logo").attr("src","https://www.localised.com/img/logo-glyph-white-585e89bacf.svg");

  }


  // funkcija za navigacija da se rasiri na golem ekran
  if ($(window).width() > 1600) {  
    $("#navigation-container").removeClass("container");
    }  

// navigacija da stane temna
  $(".navbar-toggle").on("click", function(){
  $(".navigation").toggleClass("clicked");
  // $(".navbar-toggle").html("<button type='button' class='navbar-toggle' data-toggle='collapse' data-target='#martin'> <i class='fas fa-times fa-2x'></i> </button>");
  // $("#logo").attr("src","https://www.localised.com/img/logo-glyph-white-585e89bacf.svg");
    });   

// $(window).on("resize", function(){
//       if($(".navigation").hasClass("clicked")) {
//       $(".navigation").removeClass("clicked");
//     }
//     });