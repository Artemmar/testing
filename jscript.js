$(document).ready(function() {
    
    // Hidden menu (появление и исчезание скрытого меню при клике.)
    $( '.toch-menu, .hidden-menu ul a' ).click( function() {
        if ( $( '.hidden-menu' ).is( ':hidden' ) ) {
            $( '.hidden-menu' ).show();
        } else {
            $( '.hidden-menu' ).hide();
        }
    });

    // Hover background (изменение фона элемнта при наведении на другой элемент.)
    $('.btn-box1').hover( function() {
    	$('.price-box__title1').toggleClass('hover');
	});
	$('.btn-box2').hover( function() {
    	$('.price-box__title2').toggleClass('hover');
	});
	$('.btn-box3').hover( function() {
    	$('.price-box__title3').toggleClass('hover');
	});

    
}); 


//Scroll top (кнопка автоматического возврата на верх.)
$(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
		  $('#btn-up').fadeIn();
		} else {
		  $('#btn-up').fadeOut();
		}
	});
	$('#btn-up').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});
}); 


//Scroll to anchor (автоматический скролинг к якорю.)
$(document).ready(function() {
   $('a[href^="#"]').click(function () { 
     elementClick = $(this).attr("href");
     destination = $(elementClick).offset().top;
     if($.browser.safari){
       $('body').animate( { scrollTop: destination }, 1100 );
     }else{
       $('html').animate( { scrollTop: destination }, 1100 );
     }
     return false;
   });
});

