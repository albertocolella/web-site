var $ = global.jQuery = global.$ = window.$ = require('jquery');
require('vegas');
require('cookiechoices');
global.$.mobile = require('jquery-mobile');

jQuery(function() {
  jQuery('body').vegas({
      slides: [
          { src: 'themes/images/GEJ6ML9NHQ.jpg', 
            author: '<a href="https://twitter.com/anthonydelanoix">Anthony Delanoix</a>' }, // city
          { src: 'themes/images/44240BF402.jpg',
            author: '<a href="http://epicantus.tumblr.com/">Daria Nepriakhina</a>' }, // keyboard
          { src: 'themes/images/UXFLLKINQ1.jpg',
            author: '<a href="https://instagram.com/d_n_e_b/">Daniel Bowman</a>' }, // nigth
          { src: 'themes/images/board-453758.jpg',
            author: '<a href="https://www.facebook.com/blickpixel">Michael Schwarzenberger</a>' } // motherboard
      ],
      walk: function (index, slideSettings) {
        if(slideSettings.author){
          var credits = '<h4>photo credits:</h4>' + slideSettings.author;
          jQuery(".credits").html(credits);
        } else {
          jQuery(".credits").html('');
        }
      }
  });
  var logo_color = jQuery('#logo').css('color');
  jQuery('.links li').hover(
    function(){
      var bg = jQuery(this).css('backgroundColor');
      jQuery('#logo').css('color', bg);
    },
    function(){
      jQuery('#logo').css('color', logo_color);
    }
  );
  var current = 0;
  var lines = [
    'Really.',
    "I develop a lot of web stuff, of many kinds.",
    "And I like it.",
    "I also like to help companies to improve their developing processes.",
    "That means I do my best to help other people work better on projects using a <strong>Lean</strong> approach.",
    "Less waste + less human effort + less costs = more projects delivered in time.",
    "Click on the buttons below to get in touch with me.",
    "I said <strong>below</strong>, so please stop clicking my name! ;-)"
  ];
  jQuery('h1, h2').click(function(){
    if(lines.length>current){
      jQuery('.lines').show().append('<li class="line">'+lines[current]+'</li>');
      jQuery('footer').css('bottom', '0px');     
    }
    current++;
    if(lines.length==current){
      jQuery('h1, h2').css('cursor', 'default');
      jQuery('html, body').animate({
          scrollTop: jQuery("#links").offset().top
      }, 1000);
    }
    if(current==lines.length+8){
      jQuery('.lines').append('<li class="line">You never give up, right?</li>');   
      jQuery('html, body').animate({
          scrollTop: jQuery("#links").offset().top
      }, 1000);   
    }
  });
  // document.addEventListener('DOMContentLoaded', function(event) {
    cookieChoices.showCookieConsentBar('This website uses cookies to give you a better experience.',
      'accept', 'learn more', 'cookie-policy.html', 
                        function(){}
    );
  // });
});
