
    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 4,
        spaceBetween: 0,
        initialSlide: 0.5,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: true
        }
    });
    
    $( '.js-faq' ).on( 'click', function() {
        $( this ).find( '.js-faqA' ).stop().slideToggle( 300 );
        $( this ).toggleClass( 'add-active' );
    });

    $(function(){
        $('a[href^="#"]').click(function(){
          var speed = 500;
          var href= $(this).attr("href");
          var target = $(href == "#" || href == "" ? 'html' : href);
          var position = target.offset().top;
          $("html, body").animate({scrollTop:position}, speed, "swing");
          return false;
        });
      });

      jQuery(function(){
        jQuery(window).scroll(function (){
            jQuery('.fade_off').each(function(){
                var elemPos = jQuery(this).offset().top;
                var scroll = jQuery(window).scrollTop();
                var windowHeight = jQuery(window).height();
                if (scroll > elemPos - windowHeight + 100){
                    jQuery(this).addClass('fade_on');
                }
            });
        });
        jQuery(window).scroll();
      });