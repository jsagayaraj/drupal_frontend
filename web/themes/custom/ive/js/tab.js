(function($, Drupal, drupalSettings) {
    // Your code...
    // Hello
    Drupal.behaviors.tabs = {
      attach: function (context) {
        $( "#tabs" ).tabs()
      }
    }
})(jQuery, Drupal, drupalSettings);