

var swiper = new Swiper(".featured-slider", {
	spaceBetween:10,
       loop:true,
		centeredSlides:true,
	autoplay:{
		delay:3500,
		disableOnInteraction:true,
	},
	navigation:{
		nextEl:".swiper-button-next",
		prevEl:".swiper-button-prev",
	},
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
		450: {
           slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        },
      });
      var mySwiper = document.querySelector('.featured-slider').swiper

      $(".featured-slider").mouseenter(function() {
        mySwiper.autoplay.stop();
        console.log('slider stopped');
      });
    
      $(".featured-slider").mouseleave(function() {
        mySwiper.autoplay.start();
        console.log('slider started again');
      });


      // Text show on scroll
      window.addEventListener("scroll", function() {showFunction()});

      function showFunction() {
          if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
              document.getElementById("about-heading").style.transform = "translateX(0)";
              document.getElementById("about-paragraph").style.transform = "translateX(0)";
          } else {
              document.getElementById("about-heading").style.transform = "translateX(-200%)";
              document.getElementById("about-paragraph").style.transform = "translateX(-200%)";
          }
      }
      function paraShowFunction(){
          if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
              document.getElementById("about-paragraph").style.transform = "translateX(0)";
          } else {
              document.getElementById("about-paragraph").style.transform = "translateX(-200%)";
          }
      }

    //  click on button search to show search form
    $(document).ready(function(){
        $("#search").click(function(){
            $(".search").toggle();
        });

        // click on cross button to close search form
        $("#close-btn").click(function(){
            $(".search").hide();
        });
    });