(function($, Drupal, drupalSettings) {
    // Your code...
    // Hello
    Drupal.behaviors.hello = {
      attach: function (context) {
        // $('selector', context).command();
        //alert("hellohello");
      }
    }

    //external link
    Drupal.behaviors.link = {
        attach: function (context) {
            $("a[href^='http']", context).addClass('external-link');
            $("a[href^='http']", context).click(function(){
                $(this).attr('target', '_blanck')
            });
        }
    }

    //toogle slide
    Drupal.behaviors.toogle = {
        attach: function (context) {
            $('.sidebar .block h2', context).click(function(){
                //alert("hello")
                $(this).next().next().slideToggle('slow');
                 //$(".container-inline").slideUp('slow');   
                // $(".container-inline").slideDown('slow');                   
            });
            
                          
            
        }
    }
})(jQuery, Drupal, drupalSettings);



   

// (function($, Drupal, drupalSettings) {
//    $(document).ready(function(){
//        //alert("hello");
//        $('a').click(function(){
//            $(this).attr('target', '_blanck')
//        });
//    });
// })(jQuery, Drupal, drupalSettings);