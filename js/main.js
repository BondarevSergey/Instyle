$(function(){
  $(".owl-carousel").owlCarousel({
    items:1,
    // autoplay:true,
    loop: true,
    dots:false,
    nav:true
  });

  $(".btntogle").click(function () {
      $(".menuWrap").stop(true, true).slideToggle('fast');
  });
  

    $(window).on('resize', function () {
        if ($(window).width() >= 1200) {
            $('.menu__left').insertBefore('.logo');
            $('.menu__right').insertBefore('.language');
        } else {
            $('.menu__left').appendTo('.j-menuWrap');
            $('.menu__right').insertBefore('.menu__left');
        }
    });

    $(window).trigger('resize');

});