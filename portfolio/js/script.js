var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 1,
        width: 322,
        spaceBetween: 50,
        loop: true,
        breakpoints: {
          768: {
            slidesPerView: 4,
            width: 1100, 
            spaceBetween: 0,
            initialSlide: 0.5,
            loop: true,
          }
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: true
        }
        
    });
    
    $( '.js-faq' ).on( 'click', function() {
        $( this ).find( '.js-faqA' ).stop().slideToggle( 300 );
        $( this ).toggleClass( 'add-active' );
    });

      jQuery(function(){
        jQuery(window).scroll(function (){
            jQuery('.fade_off').each(function(){
                var elemPos = jQuery(this).offset().top;
                var scroll = jQuery(window).scrollTop();
                var windowHeight = jQuery(window).height();
                if (scroll > elemPos - windowHeight + 50){
                    jQuery(this).addClass('fade_on');
                }
            });
        });
        jQuery(window).scroll();
      });

        var $header = $( '#js-header' );
        
        // navigation
        $( '#js-toggle' ).on( 'click', function(e) {
          e.preventDefault();
          $header.toggleClass( 'add-active' );
        });
        
        $( '.js-navLink, #js-overlay' ).on( 'click', function(e) {
          e.preventDefault();
          $header.removeClass( 'add-active' );
        });
    
        var pcWidth = window.matchMedia( 'screen and (min-width: 769px)' );
        function checkBreakPoint() {
          if( pcWidth.matches ) {
            $header.removeClass( 'add-active' );
          }
        }
        pcWidth.addListener( checkBreakPoint );
        checkBreakPoint();
    
    
        // smooth scroll
        $( 'a[href^="#"]' ).on( 'click', function(e){
          var speed = 500;
          var href= $( this ).attr( 'href' );
          var target = $( href === '#' || href === '' ? 'html' : href );
          var position = target.offset().top - $header.outerHeight();
          $( 'html, body' ).animate( { scrollTop:position }, speed, 'swing' );
          e.preventDefault();
        });