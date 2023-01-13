
jQuery(document).ready(function ($) {

    jQuery('.mainmenu li:has(ul)').addClass('parent');

    jQuery('a.menulinks').click(function () {
        jQuery(this).next('ul').slideToggle(250);
        jQuery('body').toggleClass('mobile-open');
        jQuery('.mainmenu li.parent ul').slideUp(250);
        jQuery('a.child-triggerm').removeClass('child-open');
        return false;
    });

    jQuery('.mainmenu li.parent > a').after('<a class="child-triggerm"><span></span></a>');

    jQuery('.mainmenu a.child-triggerm').click(function () {
        jQuery(this).parent().siblings('li').find('a.child-triggerm').removeClass('child-open');
        jQuery(this).parent().siblings('li').find('ul').slideUp(250);
        jQuery(this).next('ul').slideToggle(250);
        jQuery(this).toggleClass('child-open');
        return false;
    });

    jQuery('.cases-slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
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

    jQuery('.gallery-slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        pauseOnHover: false,
        pauseOnFocus: false
    });

    if (jQuery(document).find('.news-single').length > 3) {
        jQuery('.news-slider').slick({
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
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
                    breakpoint: 767,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '30px',
                        slidesToShow: 1
                    }
                }
            ]
        });
    } else {
        if (jQuery(window).width() < 992) {
            jQuery('.news-slider').slick({
                centerMode: true,
                centerPadding: '60px',
                slidesToShow: 3,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2000,
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
                        breakpoint: 767,
                        settings: {
                            arrows: false,
                            centerMode: true,
                            centerPadding: '30px',
                            slidesToShow: 1
                        }
                    }
                ]
            });
        }
    }
    jQuery('a[href^="#"]').on('click', function (e) {
        var target = this.hash,
                $target = $(target);

        jQuery('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

    jQuery('.benefits-slider').slick({
        centerMode: false,
        centerPadding: '60px',
        slidesToShow: 4,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
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
    var ht = '';
    jQuery('.single-post .breadcrumbs-nav > span').each(function (i) {
        var el = jQuery(this).html();
        if (i == 3) {
            return false;
        }
        ht = ht + "<span property='itemListElement' typeof='ListItem'>" + el + "</span>";
        if (i != 2) {
            ht = ht + ' > ';
        }
    });
    console.log(ht);
    jQuery(document).find('.single-post .breadcrumbs-nav').html(ht);

    jQuery(".dissmissable-cta .close").click(function () {
        jQuery(".dissmissable-cta").removeClass("show");
    });
    jQuery("#menu-product-menu").data("top", jQuery("#menu-product-menu").offset().top);


    jQuery(window).resize();
});

jQuery(window).load(function () {
    jQuery(".loader").fadeOut("slow");
    jQuery('.product-details').equalHeights();
    setTimeout(function () {
        jQuery(".dissmissable-cta").addClass("show");
    }, 1000);
});


jQuery(window).resize(function () {
    jQuery('.product-details').equalHeights();
    if (jQuery(window).width() < 992) {
        jQuery('.news-slider').slick({
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
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
                    breakpoint: 767,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '30px',
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
})

jQuery(window).scroll(fixDiv);

jQuery.fn.equalHeights = function () {
    var max_height = 0;
    jQuery(this).each(function () {
        max_height = Math.max(jQuery(this).height(), max_height);
    });
    jQuery(this).each(function () {
        jQuery(this).height(max_height);
    });
};

function fixDiv() {
    var $div = jQuery("#menu-product-menu");
    if (jQuery(window).scrollTop() > $div.data("top")) {

        jQuery('#product-menu').addClass('sticky');
    } else {

        jQuery('#product-menu').removeClass('sticky');
    }
}


jQuery(window).scroll(function () {
    var windscroll = jQuery(window).scrollTop();
    if (windscroll >= 100) {
        jQuery('section').each(function (i) {
            if (jQuery(this).position().top <= windscroll - 0) {
                jQuery('#product-menu ul li.active').removeClass('active');
                jQuery('#product-menu ul li').eq(i).addClass('active');
                
            }
        });

   } else {

       jQuery('#product-menu ul li.active').removeClass('active');
       jQuery('#product-menu ul li:first').addClass('active');
    }
}).scroll();


function Form_Validator(theForm)
{
    if (!ValidateStringField(theForm.CompanyName, "Company Name", false))
    {
        return false;
    }

    if (!ValidateStringField(theForm.FirstName, "First Name", false))
    {
        return false;
    }

    if (!ValidateStringField(theForm.LastName, "Last Name", false))
    {
        return false;
    }

    if (!ValidateEmailField(theForm.Email, "Email Address", true))
    {
        return false;
    }

    if (!ValidateStringField(theForm.Address1, "Address Line 1", false))
    {
        return false;
    }

    if (!ValidateStringField(theForm.Address2, "Address Line 2", false))
    {
        return false;
    }

    if (!ValidateStringField(theForm.City, "City", false))
    {
        return false;
    }

    if (!ValidateStringField(theForm.StateProvince, "State/Province", false))
    {
        return false;
    }

    if (!ValidateStringField(theForm.PostalCode, "Postal Code", false))
    {
        return false;
    }

    if (!ValidateStringField(theForm.Country, "Country", false))
    {
        return false;
    }

    if (!ValidatePhoneField(theForm.Phone, "Phone", false))
    {
        return false;
    }

    if (!ValidateStringField(theForm.Source, "Source", false))
    {
        return false;
    }

    if (!ValidateStringField(theForm.Misc1, "Misc1", false))
    {
        return false;
    }

    if (!ValidateStringField(theForm.Misc2, "Misc2", false))
    {
        return false;
    }

    if (!ValidateStringField(theForm.Misc3, "Misc3", false))
    {
        return false;
    }

    if (!ValidateStringField(theForm.Misc4, "Misc4", false))
    {
        return false;
    }

    if (!ValidateStringField(theForm.Misc5, "Misc5", false))
    {
        return false;
    }

    if (!ValidateStringField(theForm.Misc6, "Misc6", false))
    {
        return false;
    }

    if (!ValidateStringField(theForm.Misc7, "Misc7", false))
    {
        return false;
    }
}