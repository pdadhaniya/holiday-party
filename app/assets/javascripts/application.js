// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require foundation
//= require turbolinks
//= require react
//= require react_ujs
//= require components
//= require lodash
//= require slick
//= require_tree .

jQuery(document).ready(function($) {
  $(document).foundation();
});

$(document).ready(function(){

   $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav',
    autoplay: true,
  });

  $('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    arrows: false,
    dots: false,
    centerMode: true,
    focusOnSelect: true
  });



  $('a[href^="#tothetop"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $("a#tothetop");

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing');
  });

  $('a[href^="#to-next-div"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $("a#to-next-div");

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing');
  });

  if (window.location.pathname == "/gallery") {
    $(".down").hide();
  };

  $(".fi-arrow-down").effect( "bounce", {times:5, distance:40}, 3000 );

  $('a').each(function() {
    if ($(this).prop('href') == window.location.href) {
      // $(this).addClass("color", "red");
      $(this).addClass('current');
    }
  });

  if (window.location.pathname == "/") {
    $("nav a.current").removeClass("current")
  };

  if (window.location.pathname == "/rsvp") {
    $(".down").hide();
  };

  if (window.location.pathname == "/rsvp/user") {
    $(".down").hide();
  }

  if (window.location.pathname == "/rsvp/update") {
    $(".down").hide();
  }

  if (window.location.pathname == "/events/search") {
    $(".down").hide();
  }

  if (window.location.pathname == "/details") {
    $(".down").hide();
  }

  if (window.location.pathname == "/details") {
    $(".row.top").hide();
  }

  if (window.location.pathname == "/rsvp") {
    $(".row.top").hide();
  }

});