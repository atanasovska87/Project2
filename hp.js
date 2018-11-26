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

$(function () {

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

// funkcija za scroll na tablet 

	 $("#up").on("click", function(){
		 // $(".inner-tablet").animate({scrollTop:$(".inner-tablet").height()}, 'slow');
		 $(".inner-tablet").css("transform", "translateY(0px)");
		  $(".inner-tablet").css("transition", "all .4s");

     });  

	 $("#down").on("click", function(){
		 // $(".inner-tablet").animate({scrollTop:$(".inner-tablet").height()}, 'slow');
		 $(".inner-tablet").css("transform", "translateY(-360px)");
		  $(".inner-tablet").css("transition", "all .4s");
		
	 });  


// funkcija za show more na kopcinja

	$(".more").on("click", function(){
	   if($(this).hasClass("clicked") === false){	
	   $(this).siblings("p").fadeIn("slow");
	   $(this).text("LESS");
	   $(this).addClass("clicked");
	   } else if ($(this).hasClass("clicked")) {
				  $(this).siblings("p").fadeOut("fast");
				  $(this).text("MORE");
				  $(this).removeClass("clicked");
	     }
	});

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


  //   $(window).on("resize", function(){
  //   	if($(".navigation").hasClass("clicked")) {
		// 	$(".navigation").removeClass("clicked");
		// }
  //   });
		
   
    



// funkcija za fadin na elementi

   $(window).scroll( function(){

   if($(window).width() > 1020){

	   	var positionTop = ($(".hp-text-list").offset().top);
	   	var positionBot = ($(".hp-text-list").offset().top + $(".hp-text-list").outerHeight());

	    var posTop = ($(".hp-image-stairs").offset().top);
	   	var posBot = ($(".hp-image-stairs").offset().top + $(".hp-text-list").outerHeight());

 		
        if($(this).scrollTop() > (positionTop - 300)){
	    	
	      $(".hideme").animate({'opacity':'1'},1000);
	      $(".hideme1").animate({'opacity':'1'},2000);

	    } 
        if($(this).scrollTop() > (posTop - 400)){
          $(".hideme2").animate({'opacity':'1'},500);
	      $(".hideme3").animate({'opacity':'1'},1000);
	      $(".hideme4").animate({'opacity':'1'},1000);
	    }
     } 
        
   });



});


