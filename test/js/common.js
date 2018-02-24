$(document).ready(function(){



  // slick.js slider   http://kenwheeler.github.io/slick/
    $('#js-main-slider').slick({
      infinite: true,
      slidesToShow: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      speed: 3000,
      arrows: false,
      dots: false,
      // responsive: [
      //   {
      //     breakpoint: 620,
      //     settings: {
      //       rows: 2
      //     }
      //   },
      //   {
      //     breakpoint: 480,
      //     settings: {
      //       rows: 1,
      //       autoplay: false,
      //     }
      //   }
      // ]
    });


    $('#prev').click(function(){
      $('#js-main-slider').slick('slickPrev');
    });

    $('#next').click(function(){
      $('#js-main-slider').slick('slickNext');
    });


    // yandex map settings https://tech.yandex.ru/maps/jsbox/2.1
    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [57.041338, 34.960140],
                zoom: 15,
                // Также доступны наборы 'default' и 'largeMapDefaultSet'
                // Элементы управления в наборах подобраны оптимальным образом
                // для карт маленького, среднего и крупного размеров.
                controls: ['zoomControl', 'searchControl']
            }, {
                searchControlProvider: 'yandex#search'
            });
        });

  if(document.documentElement.clientWidth > 768) {
    // wow.js animation  http://mynameismatthieu.com/WOW/
    // new WOW().init();
  };
});
