//slider
$(window).load(function(){
    $('.flexslider').flexslider({
        animation: "slide",
        start: function(slider){
            $('body').removeClass('loading');
        }
    });
});

//Carousel
$(document).ready(function() {
    $("#owl-demo").owlCarousel({
        items : 1,
        lazyLoad : true,
        autoPlay : true,
        navigation : false,
        navigationText :  false,
        pagination : true,
    });
});

    $(window).load(function() {
        $("#flexiselDemo1").flexisel({
            visibleItems: 4,
            animationSpeed: 1000,
            autoPlay: true,
            autoPlaySpeed: 3000,
            pauseOnHover: true,
            enableResponsiveBreakpoints: true,
            responsiveBreakpoints: {
                portrait: {
                    changePoint:480,
                    visibleItems: 1
                },
                landscape: {
                    changePoint:640,
                    visibleItems:2
                },
                tablet: {
                    changePoint:768,
                    visibleItems: 2
                }
            }
        });

    });

    $(window).load(function() {
        $.fn.lightspeedBox();
    });

    $(document).ready(function() {
        /*
            var defaults = {
            containerID: 'toTop', // fading element id
            containerHoverID: 'toTopHover', // fading element hover id
            scrollSpeed: 1200,
            easingType: 'linear'
            };
        */

        $().UItoTop({ easingType: 'easeOutQuart' });

    });

//scrolling script
    jQuery(document).ready(function($) {
        $(".scroll").click(function(event){
            event.preventDefault();
            $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
        });
    });

//test
  function click() {
     document.getElementById('phone').onclick = function(){
         console.log(1);
     }
 }
 click();

//test
function click1() {
    document.getElementById('phone1').onclick = function(){
        console.log(1);
    }
}
click1();
//test
function click2() {
    document.getElementById('phone2').onclick = function(){
        console.log(1);
    }
}
click2();
//test
function click3() {
    document.getElementById('phone3').onclick = function(){
        console.log(1);
    }
}
click3();
