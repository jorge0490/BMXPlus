var indice = 0;

$(window).scroll(function(){
	if ($('.navbar').offset().top > 50) {
		$('.navbar-fixed-top').addClass('colapsar-nav');
	}else{
		$('.navbar-fixed-top').removeClass('colapsar-nav');
	}
});


$(function(){
	$('.pagina-scroll a').bind('.click', function(){
		var $anchor = $($this);
		$('html,body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		},1500,'easeInOutExpo');	
		
	});
});

$(window).scroll(function(){

	var navbar_top = $('.navbar').offset().top;
	var top_seccion1 = $('#inicio').offset().top;
	var bottom_seccion1 = ($('#inicio').offset().top + $('#inicio').outerHeight(true))-250;
	var top_seccion2 = $('#nosotros').offset().top-250;
	var bottom_seccion2 = $('#nosotros').offset().top + $('#nosotros').outerHeight(true);
	var top_seccion3 = $('#productos').offset().top-250;
	var bottom_seccion3 = $('#productos').offset().top + $('#productos').outerHeight(true);
	var top_seccion4 = $('#contacto').offset().top-400;
	var bottom_seccion4 = $('#contacto').offset().top + $('#contacto').outerHeight(true);

	if(navbar_top+50 > top_seccion1 && navbar_top < bottom_seccion1 && indice != 0){
		$('#intro-texto').addClass('animated fadeInRight retraso-1');
		$('#caja-central').removeClass('animated rotateInUpRight retraso-1');
		$('#bike').removeClass('animated rotateIn retraso-1');
		$('#formulario').removeClass('animated fadeInRight retraso-1');
		indice = 0;
	}

	if(navbar_top > top_seccion2 && navbar_top < bottom_seccion2 && indice != 1){
		$('#intro-texto').removeClass('animated fadeInRight retraso-1');
		$('#caja-central').addClass('animated rotateInUpRight retraso-1');
		$('#bike').removeClass('animated rotateIn retraso-1');
		$('#formulario').removeClass('animated fadeInRight retraso-1');
		indice = 1;
	}

	if(navbar_top > top_seccion3 && navbar_top < bottom_seccion3 && indice != 2){
		$('#intro-texto').removeClass('animated fadeInRight retraso-1');
		$('#caja-central').removeClass('animated rotateInUpRight retraso-1');
		$('#bike').addClass('animated rotateIn retraso-1');
		$('#formulario').removeClass('animated fadeInRight retraso-1');
		indice = 2;
	}

	if(navbar_top > top_seccion4 && navbar_top < bottom_seccion4 && indice != 3){
		$('#intro-texto').removeClass('animated fadeInRight retraso-1');
		$('#caja-central').removeClass('animated rotateInUpRight retraso-1');
		$('#bike').removeClass('animated rotateIn retraso-1');
		$('#formulario').addClass('animated fadeInRight retraso-1');
		indice = 3;
	}

});
