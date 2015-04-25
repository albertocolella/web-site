$(function() {
  $('body').vegas({
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
          $(".credits").html(credits);
        } else {
          $(".credits").html('');
        }
      }
  });
  var logo_color = $('#logo').css('color');
  $('.links li').hover(
    function(){
      var bg = $(this).css('backgroundColor');
      $('#logo').css('color', bg);
    },
    function(){
      $('#logo').css('color', logo_color);
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
  $('h1, h2').click(function(){
    if(lines.length>current){
      $('.lines').show().append('<li class="line">'+lines[current]+'</li>');
      $('footer').css('bottom', '0px');     
    }
    current++;
    if(lines.length==current){
      $('h1, h2').css('cursor', 'default');
      $('html, body').animate({
          scrollTop: $("#links").offset().top
      }, 1000);
    }
    if(current==lines.length+8){
      $('.lines').append('<li class="line">You never give up, right?</li>');   
      $('html, body').animate({
          scrollTop: $("#links").offset().top
      }, 1000);   
    }
  })
});
