$(function() {
  $('body').vegas({
      slides: [
          { src: 'themes/images/GEJ6ML9NHQ.jpg' }, // city
         // { src: 'themes/images/643FE96E84.jpg' }, // bike
          { src: 'themes/images/44240BF402.jpg' }, // keyboard
          { src: 'themes/images/UXFLLKINQ1.jpg' }, // nigth
         // { src: 'themes/images/XNZTUL720T.jpg' }, // road
          { src: 'themes/images/board-453758.jpg' } // motherboard
      ]
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
    "I said <strong>below</strong>, please stop clicking my name!"
  ];
  $('h1, h2').click(function(){
    if(lines.length>current){
      $('.lines').show().append('<li class="line">'+lines[current]+'</li>');      
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
