$(document).ready(function(){


  // slick.js slider   http://kenwheeler.github.io/slick/

  /*main header slider*/
      $('#js-mainSlider').slick({
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 3000,
        arrows: false,
        dots: false,
        fade: true
      });

      /*categories slider*/
      $('#js-category-slider').slick({
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 1200,
        arrows: false,
        dots: false,
        fade: true
      });

      $('#slider-prev_category').click(function(){
        $('#js-category-slider').slick('slickPrev');
      });

      $('#slider-next_category').click(function(){
        $('#js-category-slider').slick('slickNext');
      });

 
      //category buttons for slider
      $('.glossy-btn').click(function(){
        $('#js-category-slider').slick('slickGoTo', (0));
      });

      $('.frosted-btn').click(function(){
        $('#js-category-slider').slick('slickGoTo', (1));
      });

      $('.satin-btn').click(function(){
        $('#js-category-slider').slick('slickGoTo', (2));
      });

      $('.twolevel-btn').click(function(){
        $('#js-category-slider').slick('slickGoTo', (3));
      });

      $('.illustated-btn').click(function(){
        $('#js-category-slider').slick('slickGoTo', (4));
      });

      $('.illuminated-btn').click(function(){
        $('#js-category-slider').slick('slickGoTo', (5));
      });

      $('#js-category-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
        var ind = parseInt(currentSlide);
        $('.categories-list li').removeClass('active');
        $('.categories-list li').eq(ind).addClass('active');
      });
          

     /*calculator: square increment*/
      var squareSiblingsChange = function(){
        var newActualSquare = parseInt($('#scale-actual').text());
        $('#actual-minus-two').text(newActualSquare-2);
        $('#actual-minus-one').text(newActualSquare-1);
        $('#actual-plus-one').text(newActualSquare+1);
        $('#actual-plus-two').text(newActualSquare+2);
      };

      var approximateCost = function(){
        var squareToCalculate = parseInt($('#scale-actual').text());
        var approxiateValue = Math.ceil(squareToCalculate*536.875/10)*10;
        $('#approximate-cost_calculated').text(approxiateValue);
      };

      var squareIncrement = function(){
        var actualSquare = parseInt($('#scale-actual').text());
        $('#scale-actual').text(actualSquare+1);
        squareSiblingsChange();
        approximateCost();
      };

      var squareDecrement = function(){
        var actualSquare = parseInt($('#scale-actual').text());
        $('#scale-actual').text(actualSquare-1);
        squareSiblingsChange();
        approximateCost();

      };

      $('#scale-btn_minus').click(squareDecrement);
      $('#scale-btn_plus').click(squareIncrement);


      //animated counter  https://github.com/bfintal/Counter-Up
      $('.js-trust-counter_value').counterUp({
        //delay: 10,
        time: 1000
      });


      //parallax
      var parallax = function(){
        var pageScrolled = $(window).scrollTop();
        var windowHeight = $(window).height();
        var scrolledToWindowBottom = pageScrolled + windowHeight;
        var giftsSectionPosition = $('.gifts-section').offset().top;
        var giftsSectionVisible = scrolledToWindowBottom - giftsSectionPosition;

        if (giftsSectionVisible > 0) {
          $('.present-box-1').css({"transform":  "translate(0%, "+ -giftsSectionVisible/1 +"px)"});
          $('.present-box-2').css({"transform":  "translate(0%, "+ -giftsSectionVisible/6+"px)"});
          $('.present-box-3').css({"transform":  "translate(0%, "+ giftsSectionVisible/30+"px)"});
        }


        console.log(giftsSectionVisible);
      };

      $(window).scroll(parallax);
      

  // if(document.documentElement.clientWidth > 768) {
  //   // wow.js animation  http://mynameismatthieu.com/WOW/
  //   // new WOW().init();
  // };
});
