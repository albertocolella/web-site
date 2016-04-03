var $ = global.jQuery = global.$ = window.$ = require('jquery');
require('cookiechoices');
global.$.mobile = require('jquery-mobile');

jQuery(function() {
  // document.addEventListener('DOMContentLoaded', function(event) {
    cookieChoices.showCookieConsentBar('This website uses cookies to give you a better experience.',
      'accept', 'learn more', 'cookie-policy.html',
                        function(){}
    );
  // });
});
