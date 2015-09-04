// PAGE JUMP 100%
$(document).ready(function() {
	$('#fullpage').fullpage({
		menu: true,
		anchors: ['accueil', 'cestquoi', 'evenements','ofqj','partenaires'],
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
// COMPTEUR EVENT
jQuery(function($){
	
	var launch = new Date(2016,04,04,10,00,00);
	var mois = $('#mois');
	var jours = $('#jours'); 
	var heures = $('#heures');
	var minutes = $('#minutes');
	
	setDate();
	
	function setDate(){
			var now = new Date();
			var s = ((launch.getTime() - now.getTime())/1000)- now.getTimezoneOffset()*60;
			
			var mo = Math.floor(s/2629743.83);
			mois.html('<span class="boldTxt count">'+mo+'</span><br/><span class="slimTxt count">Mois</span>'); 
			s-=mo*2629743.83;

			var d = Math.floor(s/86400);
			jours.html('<span class="boldTxt count">'+d+'</span><br/><span class="slimTxt count">Jour'+(d>1?'s':'')+'</span>'); 
			s-=d*86400;
			
			var h = Math.floor(s/3600);
			heures.html('<span class="boldTxt count">'+h+'</span><br/><span class="slimTxt count">Heure'+(h>1?'s':'')+'</span>'); 
			s-=h*3600;
			
			var m = Math.floor(s/60);
			minutes.html('<span class="boldTxt count">'+m+'</span><br/><span class="slimTxt count">Minute'+(m>1?'s':'')+'</span>'); 
			s-=m*60;
			
			setTimeout(setDate,1000);
			
		}
	
});
// COMPTEUR OFQJ
jQuery(function($){
	
	var date_ofqj = new Date(2016,03,10,10,00,00);
	var jours_ofqj = $('#jours-ofqj');
	
	setDate();
	
	function setDate(){
			var now = new Date();
			var se = ((date_ofqj.getTime() - now.getTime())/1000)- now.getTimezoneOffset()*60;

			var d = Math.floor(se/86400);
			jours_ofqj.html('<span class="boldTxt count-ofqj">'+d+'</span><br/><span class="slimTxt count">Jour'+(d>1?'s':'')+'</span></br><span class="slimTxt sous">RESTANT'+(d>1?'s':'')+' pour vous inscrire</span>'); 		
			se-=d*86400;
			
			setTimeout(setDate,1000);

		}
	
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

			