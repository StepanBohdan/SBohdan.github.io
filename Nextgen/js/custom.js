/***************************************************************************************************************
||||||||||||||||||||||||||||         CUSTOM SCRIPT FOR MEDI PLUS            ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************
||||||||||||||||||||||||||||              TABLE OF CONTENT                  ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************
****************************************************************************************************************
1 revolutionSliderActiver
2 galleryMasonaryLayout
3 accrodion
4 teamCarosule
5 testiCarosule
6 CounterNumberChanger
7 stickyHeader
8 contactFormValidation
9 selectInput
10 datePicker
11 gMap
12 mobileMenu
13 toTOm
****************************************************************************************************************
||||||||||||||||||||||||||||            End TABLE OF CONTENT                ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************/


"use strict";

// 1 revolutionSliderActiver
function revolutionSliderActiver () {
	if ($('.rev_slider_wrapper #slider1').length) {
		$("#slider1").revolution({
			sliderType:"standard",
			sliderLayout:"auto",
			delay:5000,
			navigation: {
				arrows:{enable:true} 
			}, 
			gridwidth:1170,
			gridheight:770 
		});
	};
}
// 2 galleryMasonaryLayout
function galleryMasonaryLayout () {
	if ($('.img-masonary').length) {
		$('.img-masonary').isotope({
			layoutMode:'masonry'
		});
	}
}
// 3 accrodion
function accrodion () {
	if ($('.accrodion-grp').length) {
		
		$('.accrodion-grp').each(function () {
			var accrodionName = $(this).data('grp-name');
			var Self = $(this);
			Self.addClass(accrodionName);
			Self.find('.accrodion .accrodion-content').hide();
			Self.find('.accrodion.active').find('.accrodion-content').show();
			Self.find('.accrodion').each(function() {
				$(this).find('.accrodion-title').on('click', function () {
					if ($(this).parent().hasClass('active') === false ) {					
						$('.accrodion-grp.'+accrodionName).find('.accrodion').removeClass('active');
						$('.accrodion-grp.'+accrodionName).find('.accrodion').find('.accrodion-content').slideUp();
						$(this).parent().addClass('active');					
						$(this).parent().find('.accrodion-content').slideDown();	
					};
				});
			});
		});
		
	};
}

// 4 teamCarosule
function teamCarosule () {
	if ($('.team-carousel').length) {
		$('.team-carousel').owlCarousel({
		    loop: true,
		    margin: 30,
		    nav: true,
		    dots: false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
		    autoplay: true,
		    autoplayTimeout: 3000,
		    autoplayHoverPause: true,
		    responsive: {
		        0:{
		            items:1
		        },
		        480:{
		            items:1
		        },
		        600:{
		            items:2
		        },
		        1000:{
		            items:3
		        },
		        1200:{
		            items:4
		        }
		    }
		});
	}
}
// 5 testiCarosule
function testiCarosule () {
	if ($('.testimonaials-carousel').length) {
		$('.testimonaials-carousel').owlCarousel({
		    loop: true,
		    margin: 50,
		    nav: false,
		    dots: true,
		    autoplay: true,
		    autoplayTimeout: 3000,
		    autoplayHoverPause: true,
		    responsive: {
		        0:{
		            items:1
		        },
		        480:{
		            items:1
		        },
		        600:{
		            items:1
		        },
		        1000:{
		            items:2
		        },
		        1200:{
		            items:3
		        }
		    }
		});
	}
}
// 6 CounterNumberChanger
function CounterNumberChanger () {
	var timer = $('.timer');
	if(timer.length) {
		timer.appear(function () {
			timer.countTo();
		})
	}
}
// 7 stickyHeader
function stickyHeader () {
	if ($('.stricky').length) {
		var strickyScrollPos = 100;
		if($(window).scrollTop() > strickyScrollPos) {
			$('.stricky').removeClass('fadeIn animated');
	      	$('.stricky').addClass('stricky-fixed fadeInDown animated');
		}
		else if($(this).scrollTop() <= strickyScrollPos) {
			$('.stricky').removeClass('stricky-fixed fadeInDown animated');
	      	$('.stricky').addClass('slideIn animated');
		}
	};
}
// 8 contactFormValidation
function contactFormValidation () {

	if($('.contact-form').length){
		$('.contact-form').each(function () {
			
			var cfName = $(this).attr('id');

			$('#'+cfName).validate({ // initialize the plugin
				rules: {
					name: {
						required: true
					},
					email: {
						required: true,
						email: true
					},
					message: {
						required: true
					},
					date: {
						required: true
					},
					category: {
						required: true
					},
					phone: {
						required: true
					},
					gender: {
						required: true
					},
					dateOfBirth: {
						required: true
					},
					subject: {
						required: true
					}
				},
				submitHandler: function (form) { 
					// sending value with ajax request
					$.post($(form).attr('action'), $(form).serialize(), function (response) {
						$(form).parent('div').append(response);
						$(form).find('input[type="text"]').val('');
						$(form).find('input[type="email"]').val('');
						$(form).find('textarea').val('');
					});
					return false;
				}
			});
		});
	}
}

// 9 selectInput
function selectInput () {
	if ($('.select-input').length) {
		$('.select-input').selectmenu();
	};
}
// 10 datePicker
function datePicker () {
	if ($('.date-picker').length) {
		$('.date-picker').datepicker();
	};
}
// 11 gMap
function gMap () {
	if ($('.google-map').length) {
        $('.google-map').each(function () {
        	// getting options from html 
        	var mapName = $(this).attr('id');
        	var mapLat = $(this).data('map-lat');
        	var mapLng = $(this).data('map-lng');
        	var iconPath = $(this).data('icon-path');
        	var mapZoom = $(this).data('map-zoom');
        	var mapTitle = $(this).data('map-title');

        	// if zoom not defined the zoom value will be 15;
        	if (!mapZoom) {
        		var mapZoom = 15;
        	};
        	// init map
        	var map;
            map = new GMaps({
                div: '#'+mapName,
                scrollwheel: false,
                lat: mapLat,
                lng: mapLng,
                zoom: mapZoom
            });
            // if icon path setted then show marker
            if(iconPath) {
        		map.addMarker({
	            	icon: iconPath,
	                lat: mapLat,
	                lng: mapLng,
	                title: mapTitle
	            });
        	}
        });  
	};
}
// 12 mobileMenu
function mobileMenu () {
	if ($('.navigation .nav-footer button').length) {
		$('.navigation .nav-footer button').on('click', function () {
			$('.navigation .nav-header').slideToggle();
			$('.navigation .nav-header').find('.dropdown').children('a').append(function () {
				return '<button><i class="fa fa-bars"></i></button>';
			});
			$('.navigation .nav-header .dropdown a button').on('click', function () {
				$(this).parent().parent().children('ul.submenu').slideToggle();
				return false;
			});
		});
	};
}


// 13 toTop
function toTop(){
    
  var returnToTop = $('#return-to-top');
  returnToTop.hide();
  $(window).scroll(function() {
      ( $(this).scrollTop() >= 350 ) ? returnToTop.show(300) : returnToTop.hide(300);
  });
    
  returnToTop.click(function(){ $('body,html').animate({ scrollTop : 0 }, 500); });
    
}


function accrodionMain () {
	$("#imedica-dep-accordion").accordion({
        heightStyle: "content",
        autoHeight: !1,
        clearStyle: !0
    });
}




function stickyNav(){
     $("#stickyNav").sticky({topSpacing:0});
}

// Dom Ready Function
jQuery(document).on('ready', function () {
	(function ($) {
		// add your functions
		revolutionSliderActiver();
		accrodion();
		galleryMasonaryLayout();
		teamCarosule();
		CounterNumberChanger();
		testiCarosule();
		contactFormValidation();
		selectInput();
		datePicker();
		accrodionMain();
        stickyNav();
        toTop();
	})(jQuery);
});
// window on load functino
jQuery(window).on('load', function () {
	(function ($) {
		// add your functions
	})(jQuery);
});
// window on scroll functino
jQuery(window).on('scroll', function () {
	(function ($) {
		// add your functions
		stickyHeader();
	})(jQuery);
});


/*
| ----------------------------------------------------------------------------------
| TABLE OF CONTENT
| ----------------------------------------------------------------------------------
-Settings
-Sticky Header
-Zoom Images
-Disable  Animated
-Home slider
-Dropdown Menu Fade
-Animated Entrances
-Price Range
-Chars Start
-Isotope
-Wow
*/
$(document).ready(function() {


    "use strict";



    /////////////////////////////////////////////////////////////////
    // SETTING
    /////////////////////////////////////////////////////////////////

    var windowHeight = $(window).height();
    var windowWidth = $(window).width();



    $('ul li:last-child').addClass('li-last');




    var tabletWidth = 767;
    var mobileWidth = 640;


    /////////////////////////////////////////////////////////////////
    // LOADER
    /////////////////////////////////////////////////////////////////




    // Page transition
    $('.yamm a').on('click', function(e) {
        $('#page-preloader').fadeIn('slow');
    });


    // Transition delay
    $('.yamm .nav a').click(function(e) {
        e.preventDefault();
        var goTo = this.getAttribute("href");
        setTimeout(function() {
            window.location = goTo;
        }, 500);
    });



    var $preloader = $('#page-preloader'),
        $spinner = $preloader.find('.spinner-loader');
    $spinner.fadeOut();
    $preloader.delay(50).fadeOut('slow');



    /*Tabs*/

    $('.icon-tabs  li a').hover(function() {
        $(this).tab('show');
    });



    /////////////////////////////////////
    //  Sticky Header
    /////////////////////////////////////



    if (windowWidth > tabletWidth) {



        var headerSticky = $(".layout-theme").data("header");
        var headerTop = $(".layout-theme").data("header-top");


        if (headerSticky.length) {
            $(window).on('scroll', function() {
                var winH = $(window).scrollTop();
                var $pageHeader = $('.header');
                if (winH > headerTop) {

                    $('.yamm').addClass("animated");
                    $('.yamm').addClass("animation-done");
                    $('.yamm').addClass("bounce");
                    $pageHeader.addClass('sticky');



                } else {

                    $('.yamm').removeClass("bounce");
                    $('.yamm').removeClass("animated");
                    $('.yamm').removeClass("animation-done");
                    $pageHeader.removeClass('sticky');

                }


            });
        }

    }




    /////////////////////////////////////////////////////////////////
    // Accordion
    /////////////////////////////////////////////////////////////////


    $('.btn-collapse').click(function() {
        $('.panel').removeClass('panel-default');
        $(this).parents('.panel').addClass('panel-default');
    });




    /////////////////////////////////////////////////////////////////
    // Date picker
    /////////////////////////////////////////////////////////////////

    $('.datetimepicker').datetimepicker({
        timepicker: false,
        format: 'd/m/Y'
    });

    /* ================ Сustomization select ================ */


    $('.jelect').jelect();



    /////////////////////////////////////
    //  BX CAROUSELS
    /////////////////////////////////////


    function carouselReload() {



        $(".bxslider").each(function(i) {


            var widthslides = $(this).data("width-slides");
            var marginslides = $(this).data("margin-slides");
            var autoslides = $(this).data("auto-slides");
            var moveslides = $(this).data("move-slides");
            var infiniteslides = $(this).data("infinite-slides");
            var maxslides = $(this).data("max-slides");
            var minslides = $(this).data("min-slides");
            var verticaleslides = $(this).data("vertical-slides");
            var infiniteLoop = $(this).data("infinite-loop");
            var controls = $(this).data("controls");
            var pager = $(this).data("pager");




            $(this).bxSlider({
                slideWidth: widthslides,
                minSlides: minslides,
                maxSlides: maxslides,
                slideMargin: marginslides,
                auto: autoslides,
                moveSlides: moveslides,
                mode: verticaleslides,
                infiniteslides: true,
                pager: pager,
                controls: controls,
                hideControlOnEnd: true
            });


            $('.bx-next').html(' <i class="fa fa-angle-right"></i>')
            $('.bx-prev').html(' <i class="fa fa-angle-left"></i>')

        });

    }



    carouselReload();



    /////////////////////////////////////
    //  Zoom Images
    /////////////////////////////////////


    $("a[rel^='prettyPhoto']").prettyPhoto({
        animation_speed: 'normal',
        theme: 'light_square',
        slideshow: 3000
    });


    ////////////////////////////////////////////
    // CAROUSEL PRODUCTS
    ///////////////////////////////////////////



    if ($('.slider-product').length > 0) {

        // The slider being synced must be initialized first
        $('.carousel-product').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            itemWidth: 80,
            itemMargin: 10,
            asNavFor: '.slider-product'
        });

        $('.slider-product').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            sync: ".carousel-product"
        });



    }



    /////////////////////////////////////
    // POST SLIDER
    /////////////////////////////////////


    $('.carousel-post').bxSlider({
        minSlides: 1, // item 5
        maxSlides: 1, // item 4
        slideWidth: 850,
        infiniteLoop: true,
        auto: true,
        hideControlOnEnd: true,
        nextSelector: '#slider-next',
        prevSelector: '#slider-prev',
        nextText: '<i class="fa fa-angle-right"></i>',
        prevText: '<i class="fa fa-angle-left"></i>'
    });




    ////////////////////////////////////////////
    // PARALAX
    ///////////////////////////////////////////

    $(window).scroll(function(e) {
        parallax();

    });

    function parallax() {
        var scrolled = $(window).scrollTop();
        $('.bg-section').css('top', -(scrolled * 0.3) + 'px');
    }




    if (windowWidth < mobileWidth) {


        /////////////////////////////////////
        //  Disable Mobile Animated
        /////////////////////////////////////


        $("body").removeClass("animated-css");




    }


    $('.animated-css .animated:not(.animation-done)').waypoint(function() {



        var animation = $(this).data('animation');

        $(this).addClass('animation-done').addClass(animation);

    }, {
        triggerOnce: true,
        offset: '90%'
    });




    ////////////////////////////////////////////
    // HOME SLIDER
    ///////////////////////////////////////////

    if ($('#iview').length > 0) {


        $('#iview').iView({
            pauseTime: 6000,
            pauseOnHover: false,
            directionNavHoverOpacity: 0,
            timer: "Bar",
            timerDiameter: "20%",
            timerPadding: 0,
            timerStroke: 0,
            timerBarStroke: 0,
            timerColor: "#FFF",
            timerPosition: "bottom-right",
            nextLabel: "",
            previousLabel: "",
        });


    }




    /////////////////////////////////////////////////////////////////
    //   Dropdown Menu Fade
    /////////////////////////////////////////////////////////////////




    $(".dropdown").hover(
        function() {
            $('.dropdown-menu', this).stop(true, true).slideDown("fast");
            $(this).toggleClass('open');
        },
        function() {
            $('.dropdown-menu', this).stop(true, true).slideUp("fast");
            $(this).toggleClass('open');
        }
    );


    $(".yamm .navbar-nav>li").hover(
        function() {
            $('.dropdown-menu', this).fadeIn("fast");
        },
        function() {
            $('.dropdown-menu', this).fadeOut("fast");
        });




    window.prettyPrint && prettyPrint()
    $(document).on('click', '.yamm .dropdown-menu', function(e) {
        e.stopPropagation()
    })




    //////////////////////////////
    // Animated Entrances
    //////////////////////////////



    if (windowWidth > 1200) {


        $(window).scroll(function() {
            $('.animatedEntrance').each(function() {
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow + 400) {
                    $(this).addClass("slideUp"); // slideUp, slideDown, slideLeft, slideRight, slideExpandUp, expandUp, fadeIn, expandOpen, bigEntrance, hatch
                }
            });
        });

    }




    /////////////////////////////////////
    //  SCROLL TOP
    /////////////////////////////////////


    if ($('body').length) {
        $(window).on('scroll', function() {
            var winH = $(window).scrollTop();

            if (winH > 500) {
                $(".scroll-top").addClass('scroll-top-view');
            } else {
                $(".scroll-top").removeClass('scroll-top-view');
            }
        });
    }


    $('.scroll-top').click(function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 300);
    });




    /////////////////////////////////////////////////////////////////
    //PRICE RANGE
    /////////////////////////////////////////////////////////////////


    if ($('#slider-price').length > 0) {


        $("#slider-price").noUiSlider({
            start: [200, 700],
            step: 10,
            connect: true,
            range: {
                'min': 0,
                'max': 1000
            },

            // Full number format support.
            format: wNumb({
                decimals: 0,
                prefix: '$'
            })
        });

    }
    // Reading/writing + validation from an input? One line.
    $('#slider-price').Link('lower').to($('#slider-price_min'));

    // Write to a span? One line.
    $('#slider-price').Link('upper').to($('#slider-price_max'));




    ////////////////////////////////////////////
    // ISOTOPE FILTER
    ///////////////////////////////////////////




    var $container = $('.isotope-filter');

    $container.imagesLoaded(function() {
        $container.isotope({
            // options
            itemSelector: '.isotope-item'
        });
    });

    // filter items when filter link is clicked
    $('#filter  a').click(function() {
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector
        });
        return false;
    });



    /////////////////////////////////////
    //  Chars Start
    /////////////////////////////////////



    if ($('body').length) {
        $(window).on('scroll', function() {
            var winH = $(window).scrollTop();

            $('.list-progress').waypoint(function() {
                $('.chart').each(function() {
                    CharsStart();
                });
            }, {
                offset: '80%'
            });


        });
    }



    function CharsStart() {


        $('.chart').easyPieChart({

            barColor: false,
            trackColor: false,
            scaleColor: false,
            scaleLength: false,
            lineCap: false,
            lineWidth: false,
            size: false,
            animate: 7000,


            onStep: function(from, to, percent) {

                $(this.el).find('.percent').text(Math.round(percent));



            }
        });

    }




    /////////////////////////////////////
    // Enumerator
    /////////////////////////////////////



    $(".minus_btn").click(function() {
        var inputEl = jQuery(this).parent().children().next();
        var qty = inputEl.val();
        if (jQuery(this).parent().hasClass("minus_btn"))
            qty++;
        else
            qty--;
        if (qty < 0)
            qty = 0;
        inputEl.val(qty);
    })


    $(".plus_btn").click(function() {
        var inputEl = jQuery(this).parent().children().next();
        var qty = inputEl.val();
        if (jQuery(this).hasClass("plus_btn"))
            qty++;
        else
            qty--;
        if (qty < 0)
            qty = 0;
        inputEl.val(qty);
    })

});




/////////////////////////////////////////////////////////////////
// Animated WOW
/////////////////////////////////////////////////////////////////
new WOW().init();