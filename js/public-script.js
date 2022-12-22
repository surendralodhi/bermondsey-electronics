/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

jQuery( document ).ready( function($) {
    
    $('.mainmenu li:has(ul)').addClass('parent'); 
 
    $('a.menulinks').click(function() {
        $(this).next('ul').slideToggle(250);
        $('body').toggleClass('mobile-open'); 
        $('.mainmenu li.parent ul').slideUp(250);
        $('a.child-triggerm').removeClass('child-open');
        return false;
     });     
     
    $('.mainmenu li.parent > a').after('<a class="child-triggerm"><span></span></a>');
    
    $('.mainmenu a.child-triggerm').click(function() {
        $(this).parent().siblings('li').find('a.child-triggerm').removeClass('child-open');
        $(this).parent().siblings('li').find('ul').slideUp(250);
        $(this).next('ul').slideToggle(250);
        $(this).toggleClass('child-open');
        return false;
    });
    
    //Cases slider
    jQuery('.cases-slider').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      arrows: false,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 640,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '30px',
            slidesToShow: 1
          }
        }
      ]
    });

    //Gallery Slider
    jQuery('.gallery-slider').slick({
      dots: false,
      infinite: true,
      speed: 500,
      fade: true,
      arrows:false,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: 'linear'
    });

    //Gallery Slider
    jQuery('.news-slider').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      arrows: false,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 640,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '30px',
            slidesToShow: 1
          }
        }
      ]
    });

    //Offset jQuery
    jQuery('a[href^="#"]').on('click',function (e) {
      var target = this.hash,
          $target = $(target);

      jQuery('html, body').stop().animate({
        'scrollTop': $target.offset().top-50
      }, 900, 'swing', function () {
        window.location.hash = target;
      });
    });

    //Benefits slider
    jQuery('.benefits-slider').slick({
      centerMode: false,
      centerPadding: '60px',
      slidesToShow: 4,
      arrows: false,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '40px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 640,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '30px',
            slidesToShow: 1
          }
        }
      ]
    });    

});//document.ready end here

jQuery(window).load(function() {
    jQuery(".loader").fadeOut("slow");
});