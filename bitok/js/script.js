/*$(".scroll-on-click table tr").click(function(){
  var diff = $(this).parent().parent().height()-$(this).parent().parent().parent().height();
  diff = (diff > 0)? diff: 0;
  console.log($(this).position().top, $(this).parent().parent().height(), $(this).parent().parent().parent().height());
$(this).parent().find("last-child").css({'height': (diff+$(this).position().top)+"px"}, 500);

  $(this).parent().parent().parent().animate({scrollTop: $(this).position().top}, 500);
});
*/

// validation start
$("button[type='submit']").click(function(e){
  e.preventDefault();
  var formObject = $(this).parent("form");
  var objectToValidate = formObject.find(".validation");
  
  objectToValidate.each(function(){
    var classList = $(this).attr('class').split(/\s+/);    
    var strTofind = $(this).val();
    var currentElement = $(this);
    if(classList.indexOf("validation--empty") > -1){
      classList.forEach(function(item){
        if(item != "validation" && item.indexOf("validation") !== -1){
          if(!checkField(strTofind, item.split("--")[1])) {
            currentElement.addClass("validation--error");
            setTimeout(function(){
              currentElement.removeClass("validation--error");
            }, 3000);
          }
        }
      });
    }
    else if($(this).val()!="") {
      classList.forEach(function(item){
        if(item != "validation" && item.indexOf("validation") !== -1){
          if(!checkField(strTofind, item.split("--")[1])) {
            currentElement.addClass("validation--error");
            setTimeout(function(){
              currentElement.removeClass("validation--error");
            },3000);
          }
        }
      });  
    }

  });
});
function checkField(field, parameter){

  switch(parameter) {
    case 'number':
      var re = /^\d+$/;
      return re.test(String(field).toLowerCase());

      break;

    case 'credit': 

      var re = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
      return re.test(String(field).toLowerCase());

      break;

    case 'email': 

      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(field).toLowerCase());

      break;

    case 'phone': 

      var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
      return re.test(String(field).toLowerCase());
      
      break;

    case 'bitcoin':

      var re = /^[13][a-km-zA-HJ-NP-Z0-9]{26,33}$/;
      return re.test(String(field).toLowerCase());
    
      break;
    
    case 'minlength':

      if(field.length > 5) return true;
      else return false;

      break;

    case 'empty': 
      if(field == "") return false;
      else return true;

      break;

    default:
      break;
  }
}
// validation end
$(".item__content table tr").click(function() {
	$(".item__content table tr").removeClass("active");
	$(this).toggleClass("active");
});

$('.btn_nav').click(function() {
  $('.nav__mob').slideToggle(600);
  $('.btn_nav').addClass('btn_nav-active');
  // $('.left-col').css('height', '100%');

  if ($('.btn_nav').hasClass('not_active')) {
      $('.btn_nav').addClass('btn_nav-active').removeClass('not_active');
    } else {
      $('.btn_nav').removeClass('btn_nav-active').addClass('not_active');
    };
});

$(".nav__mob a").click(function(e) {

  e.preventDefault();
  $(".nav__mob").slideUp();
  $('.btn_nav').removeClass('btn_nav-active').addClass('not_active');
});

$('.js-slider-partners').slick({
  
  centerPadding: '30px',
  slidesToShow: 3,
  arrows: false,
  swipeToSlide: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 1040,
      settings: {
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 580,
      settings: {
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 520,
      settings: {
        centerMode: true,
        centerPadding: '80px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 420,
      settings: {
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 376,
      settings: {
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

let windowWidth = $(window).width();

if (windowWidth <= "1024") {

  $(".mob-slider").slick({
    slidesToShow: 1,
    arrows: false,
    dotts: false,
    centerMode: true,
    centerPadding: '30px',
    swipeToSlide: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 840,
        settings: {
          centerMode: true,
          centerPadding: '10px'
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '110px'
        }
      },
      {
        breakpoint: 660,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '80px'
        }
      },
      {
        breakpoint: 560,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '70px'
        }
      },
      {
        breakpoint: 470,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '50px'
        }
      },
      {
        breakpoint: 420,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '45px'
        }
      },
      {
        breakpoint: 376,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '25px'
        }
      }
    ]
  });
}


$(".js-slider-feedback").slick({
  centerMode: true,
  centerPadding: '30px',
  slidesToShow: 3,
  arrows: false,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1099,
      settings: {
        centerMode: true,
        centerPadding: '30px',
        swipeToSlide: true,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 840,
      settings: {
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        centerPadding: '45px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 650,
      settings: {
        centerMode: true,
        centerPadding: '25px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 560,
      settings: {
        centerMode: true,
        centerPadding: '85px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 440,
      settings: {
        centerMode: true,
        centerPadding: '55px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 375,
      settings: {
        centerMode: true,
        centerPadding: '33px',
        slidesToShow: 1
      }
    }
  ]
});


$(".left-col a, .menu__nav a, a.link-page-open").click(function(e) {

  e.preventDefault();

  let pageOpen = $(this).attr("href");

  $(".nav a").removeClass("active");
  $(".page").removeClass("open");
  $(this).addClass("active");

  $(pageOpen).addClass("open");

});

$("a.btn-exit").click(function() {
  document.location.href = "index.html";
});

// slider on questions page
if($(window).width() <= 480){
  $(".questions-page").slick({
    margin: 20 
  })

}

function notWorkPage() {

  let windowWidth = $(window).width(),
      windowHeight = $(window).height();

  if (windowWidth < "840" && windowWidth > windowHeight) {
    $(".not-work-page").addClass("open");
  } else {
    $(".not-work-page").removeClass("open");
  }

  $(window).resize(function() {
    notWorkPage();

    $(".main-page .item, .main-page .item-send, .main-page .item-get").addClass("no-delay");
  });
}

notWorkPage();


$("#js-btn-exchange").click(function(e) {
  e.preventDefault();
  $(".item-thanks").fadeIn();
});

$(".item__close").click(function() {
  $(this).parent().fadeOut();
});

//lk reset data
$(".btn--reset-data").click(function(){
  $(".item__delete-data").fadeIn()
});



//question page
$(".questions-page .questions-page__link").click(function(){
  $(".questions-page .questions-page__link").removeClass("active_link");
  $(this).addClass("active_link");


  $(".item__answers__inner").removeClass("item__answers__active");
  $(".item__answers__inner:nth-child("+($(this).parent().index()+1)+")").addClass("item__answers__active");
  if($(window).width() < 486){
    $(".questions-page").slick("slickGoTo", 1)
  }
});

$(".main-page .item__content").scroll(function(){
  $(".order-item").css("display", "none");
});
$(".main-page .item__content tbody tr").click(function(){
    var currentElement = $(this);
    $(this).parent().parent().parent().parent().find(".order-item").css({
      "top": (+currentElement.offset().top -100 )+"px",
      "display": "flex"
    });
    
});

$(".order-item").click(function(){
  $(".page").removeClass("open");
  $("#reg__aplication-page").addClass("open");
});