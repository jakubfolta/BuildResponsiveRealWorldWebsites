$(document).ready(function() {

  // For the sticky navigation
  $('.js--section-features').waypoint(function(direction) {
    if (direction == 'down') {
      $('nav').addClass('sticky');
    } else {
        $('nav').removeClass('sticky');
      }
  }, {
    offset: '60px;'
  });


  // Scroll on buttons
  $('.js--scroll-to-plans').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 2000)
  });

  $('.js--scroll-to-start').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000)
  });

  // Navigation scroll
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
        }
      }
    });

  // Animations on scroll
  $('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass('animated fadeIn');
  }, {
    offset: '50%'
  })

  $('.js--wp-2').waypoint(function(direction) {
    $('.js--wp-2').addClass('animated bounceInLeft');
  }, {
    offset: '50%'
  })

  $('.js--wp-3').waypoint(function(direction) {
    $('.js--wp-3').addClass('animated tada');
  }, {
    offset: '50%'
  })

  $('.js--wp-4').waypoint(function(direction) {
    $('.js--wp-4').addClass('animated pulse');
  }, {
    offset: '50%'
  })

  // Mobile nav
  $('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');

    if(icon.hasClass('ion-md-menu')) {
      icon.addClass('ion-md-close')
      icon.removeClass('ion-md-menu')
    } else{
      icon.addClass('ion-md-menu')
      icon.removeClass('ion-md-close')
    }

    nav.slideToggle(200)
  })

});


