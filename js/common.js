$(document).ready(function ($) {
  $('.header-menu__burger').on('click', function() {
    $('.header-menu__list').slideToggle(150);
    $(this).toggleClass('header-menu__burger-active');
  });

  // Плавный переход по якорям
  $(".header-menu ul li a").click(function () {
    $('.header-menu__list').slideToggle(150);
    $('.header-menu__burger').toggleClass('header-menu__burger-active');
    
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top - 110;
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 500);
    
    return false;
  });

  $(window).scroll(function() { 
    if ($(window).scrollTop() > 86) {
      $('.header').addClass('header-active');
    } else {
      $('.header').removeClass('header-active');
    }
  });
});