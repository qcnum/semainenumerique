// PAGE JUMP 100%
$(document).ready(function() {
	$('#fullpage').fullpage({
		menu: true,
		anchors: ['accueil', 'cestquoi', 'evenements', 'marraine', 'partenaires'],
		navigation: false,
		responsiveWidth: 855,
		responsiveHeight: 360,
		css3: true,
		keyboardScrolling: true,
		verticalCentered: true,
		slidesNavigation: true,
        slidesNavPosition: 'bottom',
	});
});

var couleur = [];
$('.lien-menu').each(function(){
	var couleurHover = $(this).attr("data-link");
	$(this).hover(function(){
		$(this).css('box-shadow','inset 0 -5px 0 0'+couleurHover);
	});
	$(this).mouseleave(function(){
		$(this).css('box-shadow','inset 0 0 0 0 #ffffff');
	});
});

$(".bouton-menu").click(function(){
	if ($('#header').hasClass('active') == false) {
		$('#header').addClass('active');
		$('#header').css('left','0');
	}
	else{
		$('#header').removeClass('active');
		$('#header').css('left','-100%');
	}
})
$('a.lien-menu').click(function(){
if ($('#header').hasClass('active') == true) {
		$('#header').removeClass('active');
	$('#header').css('left','-100%');
	}
        
});

			