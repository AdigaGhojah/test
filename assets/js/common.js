/* Navigation - Off Canvas Menu */
$('.menu-icon .off-menu-icon').click(function() {
	$('.off-menu-icon .top').css({'position':'absolute', 'top':'8px', 'transform':'rotate(45deg)'});
	$('.off-menu-icon .middle').hide();
	$('.off-menu-icon .bottom').css({'position':'absolute', 'top':'8px', 'transform':'rotate(-45deg)'});
	$('.menu-icon .close, .top-nav.sticky, .top-nav.inside').show();
	$('.top-nav.sticky').css('top','60px');
});

$('.menu-icon .close, .close-off-menu').click(function() {
	$('.off-menu-icon .top').css({'position':'static', 'transform':'rotate(0)'});
	$('.off-menu-icon .middle').show();
	$('.off-menu-icon .bottom').css({'position':'static', 'transform':'rotate(0)'});
	$('.menu-icon .close, .top-nav.inside').hide();
	$('.top-nav.sticky').css('top','-1000px');
});

$('.menu-icon.sticky .off-menu-icon').click(function() {
	$('.top-nav').show();
});
/* /Navigation - Off Canvas Menu */

/* Header - Sticky on Scroll */
var sticky_offset = 0;
$(window).scroll(function() {
	if ($(this).scrollTop() > sticky_offset) {
		$('.header, .top-nav, .menu-icon').addClass('sticky');

		if ($(window).width() <= 767){
			$('.logo').addClass('logo-onMobile');
			$('.search.inside').addClass('search-onMobile');
			$('.top-nav').removeClass('sticky');
		}
	}
	else {
		$('.header, .top-nav, .menu-icon').removeClass('sticky');
		$('.logo').removeClass('logo-onMobile');
		$('.search.inside').removeClass('search-onMobile');
	}
});
/* /Header - Sticky on Scroll */

/* Navigation - User Account */
$('.user-account .user-nav').mouseover(function() {
	$('.user-account .info').show();
});
$('.user-account .user-nav').mouseout(function() {
	$('.user-account .info').hide();
});

$('.user-account .info').mouseover(function() {
	$(this).show();
});
$('.user-account .info').mouseout(function() {
	$(this).hide();
});
/* /Navigation - User Account */

/* Change color for input field after click */
$('.search .fieldOldIE').focus(function() {
	$(this).css('color','#333');
});
$('.search .fieldOldIE').blur(function() {
	$(this).css('color','#999');
});
/* /Change color for input field after click */

/* Start Scroll Up/Down */
function isElementVisible(elementToBeChecked) {

	if(!$(elementToBeChecked).length)
	return false;
	var docViewTop = $(window).scrollTop();
	var docViewBottom = docViewTop + $(window).height();
	var elemTop = $(elementToBeChecked).offset().top;
	var elemBottom = elemTop + $(elementToBeChecked).height();
	return ((elemBottom >= docViewBottom) && (elemTop <= docViewTop));
}

/* Start (Arrows/Top and Down) and (Read More and Social Icons) */
var offset = 220;
var duration = 0;
$(window).scroll(function () {
	isOnView = isElementVisible('.container.home, .container.category-container, .article-box');
	if ($(window).scrollTop() < offset) {
		$('.move-down, .back-to-top, .read-more-article, .interactivity .share').fadeOut(duration);
	}
	else if (isOnView){
		$('.move-down').fadeIn(duration);
		$('.back-to-top').fadeOut(duration);
		$('.interactivity .share').fadeOut(duration);
		$('.interactivity .read-more-article, .interactivity .read-more-article ul li.first').fadeIn(duration);
		$('.interactivity .read-more-article ul li.second').fadeOut(duration);

		if ($(window).scrollTop() > 1000){
			$('.interactivity .read-more-article ul li.first').fadeOut(duration);
			$('.interactivity .read-more-article ul li.second').fadeIn(duration);
		}
	}
	else { // If not visible
		$('.back-to-top').fadeIn(duration);
		$('.move-down').fadeOut(duration);
		$('.interactivity .share').fadeOut(duration);
		$('.interactivity .read-more-article').fadeIn(duration);

	    if ($(window).scrollTop() > 2000){
			$('.interactivity .share').css('display','table');
			$('.interactivity .share').fadeIn(duration);
			$('.interactivity .read-more-article, .interactivity .read-more-article ul li.second').fadeOut(duration);
		}
	}
});

$('.move-down').click(function(event) {
	event.preventDefault();
	$('html, body').animate({scrollTop: ($('footer').offset().top)},500);
	$('.back-to-top').css('z-index','999');
});

$('.back-to-top').click(function(event) {
	event.preventDefault();
	$('html, body').animate({scrollTop: 0}, 500);
});
/* End (Arrows/Top and Down) and (Read More and Social Icons) */
/* End Scroll Up/Down */

/* Header - Sticky on Scroll - Home Page */
if($(".middle-block").length != 0) {
	var homeSearchPos = $('.middle-block').offset().top;
	var $w = $(document).scroll(function(){
		if ( $w.scrollTop() > homeSearchPos ) {
			$('.search.home').addClass('sticky');
		}
		else {
			$('.search.home').removeClass('sticky');
		}
	});

	if ($(window).width() <= 969){
		var homeSearchPos = $('.side-block.right').offset().top-50;
		var $w = $(document).scroll(function(){
			if ( $w.scrollTop() > homeSearchPos ) {
				$('.middle-block .search').addClass('inside search-onMobile');
				$('.middle-block .search').removeClass('home sticky');
			}
			else {
				$('.middle-block .search').removeClass('inside search-onMobile');
				$('.middle-block .search').addClass('home');
			}
		});
	}
}
/* /Header - Sticky on Scroll - Home Page */

/* Start Article Page - Related Articles */
function isElementCrossed(elementToBeChecked) {
    var TopView = $(this).scrollTop() + 80;
    var BotView = TopView + $(elementToBeChecked).height();
    var TopElement = $(elementToBeChecked).offset().top;
    var BotElement = TopElement + $(elementToBeChecked).height();
    TopElement = TopElement - 80;
    return ((BotView >= TopElement));
}

if($(".related-articles-list1").length != 0) {
	$(document).scroll(function(){
		var offset = $('.related-articles-list1').offset();
		var posY = offset.top - $(window).scrollTop();
		var isOnView = isElementCrossed('.related-articles-list2');

		if($('.related-articles-list1').css('position')=='fixed'){
			if (isOnView){
				$('.related-articles-list1').css('position','static');
			}
			if(($('#mw-content-text').offset().top + 10 ) >= $('.related-articles-list1').offset().top){
				$('.related-articles-list1').css('position','static');
			}
		}
		else {
			if (posY < 70 && !isOnView) {
				$('.related-articles-list1').css({'position':'fixed', 'top':'80px'});
			}
		}
	});
}
/* End Article Page - Related Articles */

/* Start Article Page - References */
$('.references-link').click(function(event) {
	$(this).children('.arrow').toggleClass('arrow-bottom arrow-top');
	$('.references-list').toggle();
});
/* End Article Page - References */

/* Start Move to  All Categories - Home Page */
$('.go-to-categories').click(function(event) {
	event.preventDefault();
	$('html, body').animate({scrollTop: ($('.container.home').offset().top-55)},500);
});
/* End Move to  All Categories - Home Page */

/* Start Search Result on The Same Page */
$(document).ready(function() {
	$("#mawdoo3_search_div").click(function() {
		$(".gs-title .gs-title").attr("target","_self");
	});
});
/* End Search Result on The Same Page */

/* Start PopUps */
$('.mawdoo3-rules').click(function() {
	$('#mawdoo3-rules').show();
});
$('.new-article').click(function() {
	$('#new-article').show();
});
$('.choose-article').click(function() {
	$('#choose-article').show();
});

$('.feedback-yes-option').click(function() {
	$('#feedback-yes-option').show();
});
$('.feedback-no-option').click(function() {
	$('#feedback-no-option').show();
});
/* End PopUps */

/* Start Footer height problem in page with short height  */
/*if ($(document).height() <= $(window).height()){
	$('footer').css({ 'position':'fixed', 'bottom':'0', 'width':'100%', 'height':'auto'});
}*/
/* End Footer height problem in page with short height  */
