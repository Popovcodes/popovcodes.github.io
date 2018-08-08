$(document).ready(function(){

  //header fixing
  var headerSticky = function(){
    var pageIsScrolled = $(window).scrollTop();
    if(pageIsScrolled > 0) {
      var headerHeight = $('#header').outerHeight();
      $('#header-visible, #header').addClass('sticky');
      $('body').css('padding-top', headerHeight + '+px');
    } else {
    if(!$('#header-hidden').is(':visible')){
      $('#header-visible, #header').removeClass('sticky');
    };
      $('body').css('padding-top', headerHeight + '+px');
    };
  };
  headerSticky();
  $(window).scroll(headerSticky);

  // show/hide menu
  $('#menu-btn').click(function(){
    if(document.documentElement.clientWidth < 768) {
      if(!$('#header-r').is(':visible')){
        $('#overlay').toggleClass('hidden');
      };
      $('#header-r').slideUp();
    } else {
      $('#overlay').toggleClass('hidden');
      if($(window).scrollTop() < 1) {
        $('#header').toggleClass('sticky');
      };
    };
    $('#search-mob-btn').removeClass('active');
    $('#header-hidden').delay(400).slideToggle();
  });

  $('#search-mob-btn').click(function(){
    if(!$('#header-hidden').is(':visible')){
      $('#overlay').toggleClass('hidden');
    };
    $('#header-hidden').slideUp();
    $('#header-r').delay(400).slideToggle();
    $(this).toggleClass('active');
  });

  $('.search-form input[type="submit"]').click(function(){
    $('#search-mob-btn').removeClass('active');
  });

  $('#overlay').click(function(){
    $('#header-hidden, #header-r').slideUp();
    $('#search-mob-btn').removeClass('active');
    if($('#header-hidden').is(':visible')){
      if($(window).scrollTop() < 1) {
        $('#header').toggleClass('sticky');
      };
    };
    $(this).addClass('hidden');
  });

  $(window).resize(function(){
    if(document.documentElement.clientWidth < 768){
      if(!$('#header-r').is(':visible')&&!$('#header-hidden').is(':visible')){
        $('#overlay').addClass('hidden');
      };
    } else {
      if(!$('#header-hidden').is(':visible')){
        $('#overlay').addClass('hidden');
      };
    };
  });

  // index number of <li> decoration
  $('.advantages-section li').each(function(){
    $(this).prepend('<br>');
  });
  $('.num-decored').each(function(){
    $(this).find('li').each(function(){
      var thisNum = $(this).index()+1; /*декоративная нумерация*/
      var thisText = $(this).html(); /*оборачивание текста в <span>, фикс IE10*/
      $(this).html('<span class="number"><span>' + thisNum + '</span></span>'+'<span>'+ thisText + '</span>' );
    });
  });

  // price bit delimiter
  $('.price span').each(function(){
    var str = $(this).text();
    $(this).html(str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
  });

  //decoration of current page link in navigation
  $('.hidden-wrap a, .footer-bottom a, .aside-accordion a').each(function(){
    var location = window.location.href;
    var link = this.href
    if(location == link) {
      $(this).addClass('active');
    }
  });




  // аккордеон категорий каталога
  // добавляет стрелку (через addClass(.extended)), если пункт имеет подкатегории
  $('.aside-accordion li').each(function(){
    var hasSubmenu = $(this).children('ul');
    if(hasSubmenu.length >0) {
      $(this).addClass('extended');
    }
  });

  // разворачивает аккордеон до уровня текущего товара/услуги (если ссылка в аккордеоне совпадает с URL страницы), заполнение крайнего breadcrumb
  if(document.documentElement.clientWidth > 1199) {
    $('.aside-accordion a.active').parents('ul').slideDown();
    $('.aside-accordion a.active').parents('.extended').addClass('active');
  };

  // подставляет значение в крайний breadcrumb из .html() активной ссылки аккордеона
  /*
  var productName = $('.aside-accordion a.active').html();
  if (productName != undefined ) {
    var lastBreadcrumb = '<li>'+ productName + '</li>'
  $('.breadcrumbs').append(lastBreadcrumb);
  }
  */


  // Открытие/закрытие аккордеона
  $('.extended>a, .extended>span').click(function(){
    var parentLi = $(this).parent('.extended');
   
    if(parentLi.hasClass('active')){
      parentLi.find('ul').slideUp();
      parentLi.find('li').removeClass('active');
      parentLi.removeClass('active');

    } else {
      //$('.extended ul').slideUp();
      $('.extended').removeClass('active');
      parentLi.addClass('active');
      parentLi.addClass('active');
      parentLi.parents('.extended').addClass('active');
      $('.extended:not(.active)').find('ul').slideUp();
      parentLi.children('ul').slideDown();
    }
  });

  // modal form
  $('.modal-call').click(function(){
    $('#modal-cont, #modal-overlay').fadeIn();
  });

  $('#modal-overlay, #modal-close').click(function(){
    $('#modal-cont, #modal-overlay').fadeOut();
  });

  // masked phone input https://github.com/digitalBush/jquery.maskedinput
  $('input[type="tel"]').mask("+7 (999) 999-99-99");





  //main page slider
/*  $('.js-index-slider').bxSlider({
    mode: 'vertical',
    pagerCustom: '.js-index-slider__pager',
    controls: false,
    auto: true
  });
  // product preview slider
  $('.product-item__slider').bxSlider({
    pagerCustom: '.product-item__colors',
    controls: false
  });
  //product page slider
  $('.js-product-view-slider').bxSlider({
    pagerCustom: '.js-product-view-pager',
    controls: false,
    auto: true
  });*/



  //slick.js slider   http://kenwheeler.github.io/slick/
  // $('#slider').slick({
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   arrows: true,
  //   dots: true,
  //   responsive: [
  //     {
  //       breakpoint: 620,
  //       settings: {
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //       }
  //     }
  //   ]
  // });

  //page scroll
  // $("a[rel='Scroll2id']").mPageScroll2id({
  //   offset: 35
  // });


  //scroll to top
  // $(window).on ('scroll', function(){
  //   if ($(this).scrollTop() > 800) {
  //     $('#to-top').fadeIn(2000);
  //   } else {
  //     $('#to-top').fadeOut();
  //   }
  // });

  // $("#to-top").click(function () {
  //   $("body, html").animate({
  //     scrollTop: 0
  //   }, 800);
  // });

  // modal windows
  // $('.callback_btn').on('click', function(){
  //   $('.overlay, .callback_modal').fadeIn(200);
  // });
  // $('.appoint_btn, .consult_btn').on('click', function(){
  //   $('.overlay, .appointment_modal').fadeIn(200);
  // });
  // $('.overlay, .modal_close').on('click', function(){
  //   $('.overlay, .callback_modal, .appointment_modal').fadeOut(200);
  // });

  if(document.documentElement.clientWidth > 768) {
    // wow.js animation  http://mynameismatthieu.com/WOW/
    // new WOW().init();
  };
});
