(function ($) {
  "use strict";
  jQuery(document).ready(function($){
    // Sticky Menu
    $(".stickyNav").sticky({ 
      topSpacing: 0,
      zIndex: 111,
    });

    // Scrollspy
    $('body').scrollspy({
      target : '.navbar-collapse',
      offset : 62,
    });

    // Smoot Scroll Effect
    $('li.smooth-scroll a').bind('click', function(event){
      var $anchor = $(this);
      var headerHeight = '60';
      $('html, body').stop().animate({
        scrollTop : $($anchor.attr('href')) .offset().top - headerHeight + "px"
      }, 1200, 'easeInOutExpo');
      event.preventDefault();
    });

    $("ul.nav.navbar-nav li a").on('click', function(){
      $(".navbar-collapse").removeClass("in")
    });

    //Scroll To top Function apply
    $(window).scroll(function(){
      var ScrollToTop = $(window).scrollTop();
      if( ScrollToTop > 500){
        $(".ScrollToTop").fadeIn();
      }
      else{
        $(".ScrollToTop").fadeOut();
      }
    });

    //Scroll To top With animate
    $(".ScrollToTop").on('click', function(){
      $("body, html").animate({'scrollTop' : 0}, 1000, 'easeInOutExpo');
      return false
    });

    // Toggle Search
    $(".top-search-icon").each(function(){  
      $("a", this).on("click", function(e){
        e.preventDefault();
        $(".search-form-box").slideToggle();
      });
    });
    $(".input-group-addon.close-search").on("click", function(){
      $(".search-form-box").slideUp();
    });

    // Home Slider
    $(".slider-waper").owlCarousel({
      items: 1,
      nav: true,
      dots: false,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      autoplay: true,
      loop: true,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      mouseDrag: false,
      touchDrag: false,
    });

    // Home Slider Animation
    $(".slider-waper").on("translate.owl.carousel", function(){
      $(".single-slide-item h1, .single-slide-item p").removeClass("animated fadeInUp").css("opacity", "0");
      $(".single-slide-item .mixit-btn").removeClass("animated fadeInDown").css("opacity", "0");
    });

    $(".slider-waper").on("translated.owl.carousel", function(){
      $(".single-slide-item h1, .single-slide-item p").addClass("animated fadeInUp").css("opacity", "1");
      $(".single-slide-item .mixit-btn").addClass("animated fadeInDown").css("opacity", "1");
    });

    // Animation js Activation
    new WOW().init();

    // Progress Bar
    $('.skill-progress-wrap').waypoint(function() {
      $('.progress-bar').addClass('left-animation');
    }, {
      triggerOnce: true,
      offset: '70%'
    });

    // For Progress Bar
    function RXknob(RXknobClass) {
      RXknobClass = $(RXknobClass);
      RXknobClass.each(function () {
        var $this = $(this),
        knobVal = $this.attr('data-rel'),
        knobAnimate = function () {
          $({
            value: 0
          }).animate({
            value: knobVal
          }, {
            duration : 2000,
            easing   : 'swing',
            progress : function () {
              $this.val(Math.ceil(this.value)).trigger('change');
            }
          });
        };
        $this.knob({
          'draw' : function () {
            $(this.i).val(this.cv + '%').css('font-size', '36px').css('color', '#333').css('width', '100%').css('margin-left', '-245px');
          }
        });
        $this.waypoint(knobAnimate, { offset: 'bottom-in-view' });
      });
    }
    RXknob('.skill');

    $('.skill').trigger(
        'configure',
        {
          "fgColor":"#333",
          "bgColor":"#ebebeb",
          "thickness":".15",
          "width":"150",
        }
    );

    // Testimonial Activation
    $(".client-testimonial-carousel").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      smartSpeed: 1000,
      nav: true,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });

    // Brand Activation
    $(".brand-slides").owlCarousel({
      items : 5,
      margin: 10,
      loop: true,
      autoplay: true,
      smartSpeed: 1000,
      responsive:{
        0:{
          items:1,
          center: true,
          margin: 0
        },
        600:{
          items:2
        },
        800:{
          items:3
        },
        1024:{
          items:4
        },
        1100:{
          items:4
        },
        1200:{
          items:4
        }
      }
    });

    // Service Box Slider Activation
    $(".services-box-slider").owlCarousel({
      items : 3,
      margin: 10,
      loop: true,
      autoplay: true,
      smartSpeed: 1000,
      center: true,
      dots: true,
      responsiveClass:true,
      responsive:{
        0:{
          items:1,
          center: false,
        },
        600:{
          items:3,
          center: false,
        }
      }
    });


    // Active Data Filter on isotope
    $(".portfolio-navigation li").on('click', function() {
      // Active class add & remove
      $(".portfolio-navigation li").removeClass("active");
      $(this).addClass("active");

      var selector = $(this).attr('data-filter');
      $(".portfolio-list").isotope({
        filter: selector
      });
    });

    // Magnific Video Popup
    $('.video-play-btn').magnificPopup({
      type: 'video',
    });

    // Magnific Portfolio Popup
    $('.portfolio-view').magnificPopup({
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-fade',
      gallery:{
      enabled:true
      }
    });

    // Adding hover style for the feature box
      var serviceBox = $(".single-team-box");

      serviceBox.on("mouseover",function(){
        serviceBox.removeClass("active");
        $(this).addClass("active");
        return false
      });

  });

  jQuery(window).load(function(){
    jQuery(".portfolio-list").isotope();
    jQuery(".mixit-pageloader").fadeOut(500);
  });
  
}(jQuery));