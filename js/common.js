

$('#fullpage').fullpage({
	anchors: ['section-billbord', 'section-about-top', 'section-about', 'section-layouts', 'section-get-free', 'section-locations', 'section-steps', 'section-buy', 'section-process', 'section-sertificats', 'section-instagram', 'section-footer'],
	responsiveHeight: 600,
	controlArrows: true,
	responsiveWidth: 1200,
	scrollingSpeed: 1000,
	menu: '.menu_list',
});

	

	$('.btn_top').click(function(event) {
		event.preventDefault();
		$.fn.fullpage.moveTo('firstPage', 1);
	});


$(document).ready(function() {


	//кнопка sandwich
	$(".btn-nav").click(function() {
		$(".sandwich").toggleClass("active");
		$(this).toggleClass("active");
		if ($(".header-menu").is(":hidden")) {
			$(".header-menu").fadeIn(200);
		} else {
			$(".header-menu").fadeOut(200);
		}
		
	});

	$(".menu a").click(function() {
		$(".header-menu").fadeOut(200);
		$(".sandwich").removeClass("active");
		$(".btn-nav").removeClass("active");
	});


	$(".pixelcompare").twentytwenty({
		
	});

	//слайдер


	var $slider = $('.slider-photos');

	if ($slider.length) {
		var currentSlide;
		var slidesCount;
		var sliderCounter = document.createElement('div');
		sliderCounter.classList.add('slider__counter');
		
		var updateSliderCounter = function(slick, currentIndex) {
			currentSlide = slick.slickCurrentSlide() + 1;
			slidesCount = slick.slideCount;
			$(sliderCounter).html('<span>0'+currentSlide + '</span> &nbsp;/&nbsp;' +'0'+slidesCount+ '')
		};

		$slider.on('init', function(event, slick) {
			$('.slider-count').append(sliderCounter);
			updateSliderCounter(slick);
			$(".slider_number").text("0" + slick.slideCount);
		});

		$slider.on('afterChange', function(event, slick, currentSlide) {
			updateSliderCounter(slick, currentSlide);
		});

		$slider.slick({
			arrows: true,
			dots: false,
			prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
			infinite: false,
			slidesToScroll: 1,
			slidesToShow: 1,
		});


	} 


	function setProgress(index) {
		var calc = ((index + 1) / ($slider.slick('getSlick').slideCount)) * 100;
		$progressBar
		.css('background-size', calc + '% 100%')
		.attr('aria-valuenow', calc );
	}
	var $slider = $('.slider-photos');
	var $progressBar = $('.progress');
	$slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
		setProgress(nextSlide);
	});
	setProgress(0);
	
var $status = $('.slider_number_review');
    var $slickElement = $('.slider_review');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.html('<span>' + i + '</span>'+ '/' + slick.slideCount);
    });


    $(".slider-process-nav").slick({
			arrows: true,
			dots: false,
			prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
			nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
			infinite: false,
			slidesToScroll: 1,
			focusOnSelect: true,
			slidesToShow: 6,
			asNavFor: '.slider-process-for',
			responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 5,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
			}
		}
		]
		});

    $(".slider-process-for").slick({
			arrows: false,
			dots: false,
			prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
			nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
			infinite: false,
			swipe: false,
			slidesToScroll: 1,
			slidesToShow: 1,
			asNavFor: '.slider-process-nav',
		});

     $(".slider-process-inner").slick({
			arrows: true,
			dots: false,
			prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
			nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
			infinite: true,
			slidesToScroll: 1,
			focusOnSelect: true,
			slidesToShow: 4,
			responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
		}
		]
		});

     $(".slider-sertificats").slick({
			arrows: true,
			dots: false,
			prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
			nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
			infinite: true,
			slidesToScroll: 1,
			focusOnSelect: true,
			slidesToShow: 3,
			responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
			}
		}
		]
		});

     $('.flipper').flipper('init');



$('.tabs li a').click(function(event) {
		event.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(".tab-pane").fadeOut(0);
		var selectTab = $(this).attr("href");
		$(selectTab).fadeIn(100);
	});




// mask-input 

$(".input-phone").mask("+7 (999) 999-99-99");

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

objectFitImages();

});

/*polifyl*/
/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();


