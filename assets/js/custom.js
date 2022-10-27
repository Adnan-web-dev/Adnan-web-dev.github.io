


      // Text show on scroll
    //   window.addEventListener("scroll", function() {showFunction()});

    //   function showFunction() {
    //       if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
    //           document.getElementById("about-heading").style.transform = "translateX(0)";
    //           document.getElementById("about-paragraph").style.transform = "translateX(0)";
    //       } else {
    //           document.getElementById("about-heading").style.transform = "translateX(-200%)";
    //           document.getElementById("about-paragraph").style.transform = "translateX(-200%)";
    //       }
    //   }
    //   function paraShowFunction(){
    //       if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    //           document.getElementById("about-paragraph").style.transform = "translateX(0)";
    //       } else {
    //           document.getElementById("about-paragraph").style.transform = "translateX(-200%)";
    //       }
    //   }

    //  click on button search to show search form
    $(document).ready(function(){
        $("#search").click(function(){
            $(".search").css('transform','translateY(0)');
        });

        // click on cross button to close search form
        $("#close-btn").click(function(){
            $(".search").css('transform','translateY(-100%)');
        });



        // click on button to show menu
        $("#menu-btn").click(function(){
            $(".nav-2").toggleClass("active");
        }
        );

        // click on cross button to close menu
        $("#menu-close-btn").click(function(){
            $(".nav-2").removeClass("active");
        }
        );

        // click on dropdown button to show dropdown menu
        $("#dropdown-btn").click(function(){
            $(".dropdown").slideToggle('slow');
            }
        );

       





    });