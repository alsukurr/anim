// $(function(){  // $(document).ready shorthand
//   $('.monster').fadeIn('slow');
// });

// $(document).ready(function() {
    
//     /* Every time the window is scrolled ... */
//     $(window).scroll( function(){
//         /* Check the location of each desired element */
//         $('.hide').each( function(i){ 
//             var bottom_of_object = $(this).position().top + $(this).outerHeight();
//             var bottom_of_window = $(window).scrollTop() + $(window).height();
//             console.log(bottom_of_object);
//             /* If the object is completely visible in the window, fade it it */
//             if( bottom_of_window > bottom_of_object ){  
//                 $(this).animate({'opacity':'1'},5500);      
//             }      
//         }); 
//     });   
// });

$(function() {

    var $window           = $(window),
        win_height_padded = $window.height() * 1.1
  
    $window.on('scroll', revealOnScroll);
  
    function revealOnScroll() {
      var scrolled = $window.scrollTop(),
          win_height_padded = $window.height() * 1.1;
  
      // Showed...
      $(".hide:not(.animated)").each(function () {
        var $this     = $(this),
            offsetTop = $this.offset().top;
  
        if (scrolled + win_height_padded > offsetTop) {
          if ($this.data('timeout')) {
            window.setTimeout(function(){
              $this.addClass('animated ' + $this.data('animation'));
            }, parseInt($this.data('timeout'),10));
          } else {
            $this.addClass('animated ' + $this.data('animation'));
          }
        }
      });
      // Hidden...
     $(".hide.animated").each(function (index) {
        var $this     = $(this),
            offsetTop = $this.offset().top;
        // if (scrolled + win_height_padded < offsetTop) {
        //   $(this).removeClass('animated fadeIn')
        // }
      });
    }
  
    revealOnScroll();
  });