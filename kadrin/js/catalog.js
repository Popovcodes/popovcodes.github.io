$(document).ready(function(){
  // select styling https://github.com/FormstoneClassic/Selecter; https://formstone.it/components/dropdown/
  $("#sort-select").selecter({
    mobile: true
  });

  // aside banner replacing on window resize
  var bannerReplace = function(){
    if(document.documentElement.clientWidth < 992) {
      $('.aside-banner').appendTo($('.catalog-section'));
    } else {
      $('.aside-banner').appendTo($('.aside'));
    };
  };
  bannerReplace();
  $(window).resize(bannerReplace);

});