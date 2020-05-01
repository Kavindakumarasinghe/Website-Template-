$(window).scroll(function(event) {
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
      //$('#brand-img').slideUp();
      //$('#brand-txt').slideDown();
      $('nav').addClass("navbar-lite");
      $('.navbar-right > li > a').removeClass("nav-font-lite");
      $('.navbar-brand > img').width(50);
      $('.scrollToTop').fadeIn();
    }else{
      //$('#brand-txt').slideUp();
      //$('#brand-img').slideDown();
      $('.scrollToTop').fadeOut();
      $('nav').removeClass('navbar-lite');
      $('.navbar-right > li > a').addClass("nav-font-lite");
      $('.navbar-brand > img').width(150);
    }
});
$(function(){
	$('.navbar-right > li > a').addClass("nav-font-lite");
  //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
});

