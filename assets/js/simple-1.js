
/* --------------------Clear The Value on Focus-------------------- */
var defaultText = '';
	$('.search .form-field').focus(function() {
		defaultText = $(this).attr("placeholder");
		$(this).attr("placeholderold",defaultText);
		$(this).attr('placeholder','');
});
$('.search .form-field').blur(function() {
	if($(this).val() == ''){
		defaultText = $(this).attr("placeholderold");
		$(this).attr("placeholder",defaultText);
	}
});
/* --------------------Clear The Value on Focus-------------------- */

/* --------------------Navigation - Off Canvas Menu-------------------- */
$('.off-menu-icon').click(function() {
	if ($(window).width() <= 969){
		$('.inner-wrapper, .header').animate({left:'250px'});
		$('.search-onMobile').animate({left:'280px', right:'0'});
		$('html').css('overflow-x','hidden');
		$('.close-off-menu').css('display','block');
		$('.side-nav').animate({left:'0'});
		$('html').css('overflow-y','hidden');
	}
});
$('.close-off-menu, .menu-icon .close').click(function() {
	$('.inner-wrapper, .header').animate({left:'0'});
	$('.search-onMobile').animate({left:'30px', right:'95px'});
	$('.close-off-menu').css('display','none');
	$('.side-nav').animate({left:'-250px'});
	$('html').css('overflow-y','auto');
});
/* --------------------/Navigation - Off Canvas Menu-------------------- */

/* --------------------Tabs-------------------- */
$('.tab-content .tab').hide();
$('.tab-content .tab.active').show();
$('.tabs .tab-links a').click(function(e) {
	e.preventDefault();
	$(this).parent().addClass('active').siblings('.tabs .tab-links ul li').removeClass('active');
	$(this.hash).show().siblings('.tab-content .tab').hide();
});
/* --------------------/Tabs-------------------- */

/* --------------------Alert Messages-------------------- */
$('.alert-message .close').click(function(e){
	e.preventDefault();
	$(this).parent('.alert-message').hide();
});
/* --------------------/Alert Messages-------------------- */


/* --------------------PopUp-------------------- */
$('.popup-icon').click(function(e) {
	e.preventDefault();
	$('.popup-overlay').show();
});

$('.popup-container .close, .popup-overlay').click(function(e) {
	e.preventDefault();
	$('.popup-overlay').hide();
	$('.popup-container').hide();
});
/* --------------------/PopUp-------------------- */

/* --------------------Solve last-child problem on IE8-------------------- */
// You can use 'jQuery CSS Method' to solve last-child problem on IE8, because jQuery support last-child.

$('.row .row:last-child').css('margin-bottom','0');

$('.nav-bar ul li:last-child').css('border-right','0 none');
$('.nav-bar ul li:last-child').css('border-bottom','0 none');

$('.off-menu ul li ul:last-child').css('border-bottom','1px solid #222');

$('.pagination li:last-child > a').css('margin-right','0');
/* --------------------/Solve last-child problem on IE8-------------------- */
