'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // DONE TODO: Define a function that hides all main section elements, and then reveals just the #about section:
  aboutController.initPage = function (){
    $('.tab-content').hide();
    $('#about').show();
  };

  module.aboutController = aboutController;
})(app);
