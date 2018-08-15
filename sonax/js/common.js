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

  // Compensation for anchors of height of the fixed header
 /* 
  var headerCompensation = function(){
    var headerHeight = $('#header-visible').outerHeight();
    $('.header-compensate').css({"padding-top": headerHeight + 6 +'px', "margin-top": -headerHeight + 'px'});
  };
  headerCompensation();
  $(window).scroll(headerCompensation).resize(headerCompensation);
*/

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

  $('#header-hidden a').click(function(){
    $('#header-hidden').slideUp();
    $('#overlay').addClass('hidden');
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
  var getCurrentLink = function(){
    $('.hidden-wrap a, .footer-bottom a, .accordion-cont a').each(function(){
      $(this).removeClass('active');
      var location = window.location.href;
      var link = this.href
      if(location == link) {
        $(this).addClass('active');
      }
    });
  };
  getCurrentLink();
  $('.hidden-wrap a, .footer-bottom a, .accordion-cont a').click(getCurrentLink);
  

  // аккордеон категорий каталога
  // добавляет стрелку (через addClass(.extended)), если пункт имеет подкатегории
  $('.accordion-cont li').each(function(){
    var hasSubmenu = $(this).children('ul');
    if(hasSubmenu.length >0) {
      $(this).addClass('extended');
    }
  });

  // разворачивает аккордеон до уровня текущего товара/услуги (если ссылка в аккордеоне совпадает с URL страницы), заполнение крайнего breadcrumb
  if(document.documentElement.clientWidth > 1199) {
    $('.accordion-cont a.active').parents('ul').slideDown();
    $('.accordion-cont a.active').parents('.extended').addClass('active');
  };

  // Открытие/закрытие аккордеона
  $('.extended>a, .extended>span').click(function(){
    var parentLi = $(this).parent('.extended');
   
    if(parentLi.hasClass('active')){
      parentLi.find('ul').slideUp();
      parentLi.find('li').removeClass('active');
      parentLi.removeClass('active');

    } else {
      $('.extended').removeClass('active');
      parentLi.addClass('active');
      parentLi.addClass('active');
      parentLi.parents('.extended').addClass('active');
      $('.extended:not(.active)').find('ul').slideUp();
      parentLi.children('ul').slideDown();
    }
  });

  // modal form
  $('.modal-call, #buy').click(function(){
    $('#modal-cont, #modal-overlay').fadeIn();
  });

  $('#modal-overlay, #modal-close').click(function(){
    $('#modal-cont, #modal-overlay').fadeOut();
  });

  // display attached file name in modal form
  $('.modal-form input[type=file]').change(function(e){ 
    $(this).parents('.attach-cont').find('.attached-name').addClass('attached').html(e.target.files[0].name); 
  });

});
