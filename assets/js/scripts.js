$(document).ready(function() {
	'use strict';
	/*-----------------------------------------------------------------------------------*/
	/*	STICKY HEADER
	/*-----------------------------------------------------------------------------------*/
   if($("#search-input").length > 0){
   		var sjs = SimpleJekyllSearch({
       searchInput: document.getElementById('search-input'),
       resultsContainer: document.getElementById('results-container'),
       json: '/search.json'
    });
   }


	
	if ($(".navbar").length) {
		var options = {
			offset: 350,
			offsetSide: 'top',
			classes: {
				clone: 'banner--clone fixed',
				stick: 'banner--stick',
				unstick: 'banner--unstick'
			},
			onStick: function() {
				$($.SmartMenus.Bootstrap.init);
			},
			onUnstick: function() {
				$('.search-dropdown .dropdown-menu').collapse('hide');
			}
		};
		var banner = new Headhesive('.navbar', options);
	}
	/*-----------------------------------------------------------------------------------*/
	/*	HEADER BUTTONS
	/*-----------------------------------------------------------------------------------*/
	var $header_hamburger = $('.hamburger.animate');
	var $header_search = $('.search-dropdown .dropdown-menu');
	var $header_cart = $('.cart-dropdown .dropdown-menu');
	var $navbar_offcanvas = $('.offcanvas-nav');
	var $navbar_offcanvas_toggle = $('[data-toggle="offcanvas-nav"]');
	var $navbar_offcanvas_close = $('.offcanvas-nav-close');
	var $navbar_search_toggle = $('.search-dropdown .collapse-toggle');
	var $navbar_search_close = $(".search-dropdown .dropdown-menu .dropdown-close");
	var $info_offcanvas = $('.offcanvas-info');
	var $info_offcanvas_close = $('.offcanvas-info-close');
	var $info_offcanvas_toggle = $('[data-toggle="offcanvas-info"]');
	$header_hamburger.on("click", function() {
		$header_hamburger.toggleClass("active");
		$header_search.collapse('hide');
	});
	$header_search.on('click', function(e) {
		e.stopPropagation();
	});
	$navbar_search_close.click(function() {
		$header_search.collapse('hide');
	});
	$navbar_search_toggle.on('click', function(e) {
		$navbar_offcanvas.removeClass('open');
		$header_hamburger.removeClass('active');
	});
	$navbar_offcanvas_toggle.on("click", function(e) {
		e.stopPropagation();
		$navbar_offcanvas.toggleClass('open');
	});
	$navbar_offcanvas.on("click", function(e) {
		e.stopPropagation();
	});
	$header_cart.on('click', function(e) {
		e.stopPropagation();
	});
	$navbar_offcanvas_close.on("click", function(e) {
		$navbar_offcanvas.removeClass('open');
		$header_hamburger.removeClass('active');
	});
	$info_offcanvas_toggle.on("click", function(e) {
		e.stopPropagation();
		$info_offcanvas.toggleClass('open');
		$header_search.collapse('hide');
	});
	$info_offcanvas.on("click", function(e) {
		e.stopPropagation();
	});
	$(document).on('click', function() {
		$header_search.collapse('hide');
		$navbar_offcanvas.removeClass('open');
		$info_offcanvas.removeClass('open');
		$header_hamburger.removeClass('active');
	});
	$info_offcanvas_close.on("click", function(e) {
		$info_offcanvas.removeClass('open');
	});
	$('.onepage .navbar li a').on('click', function() {
		$navbar_offcanvas.removeClass('open');
		$header_hamburger.removeClass('active');
	});
	/*-----------------------------------------------------------------------------------*/
	/*	ONEPAGE NAV LINKS
	/*-----------------------------------------------------------------------------------*/
	var empty_a = $('.onepage .navbar ul.navbar-nav a[href="#"]');
	empty_a.on('click', function(e) {
		e.preventDefault();
	});
	/*-----------------------------------------------------------------------------------*/
	/*	ONEPAGE SMOOTH SCROLL
	/*-----------------------------------------------------------------------------------*/
	$(function() {
		setTimeout(function() {
			if (location.hash) {
				window.scrollTo(0, 0);
				var target = location.hash.split('#');
				smoothScrollTo($('#' + target[1]));
			}
		}, 1);
		$('a.scroll[href*="#"]:not([href="#"])').on('click', function() {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				smoothScrollTo($(this.hash));
				return false;
			}
		});
		function smoothScrollTo(target) {
			var target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1500, 'easeInOutExpo');
			}
		}
	});
	/*-----------------------------------------------------------------------------------*/
	/*	BACKGROUND IMAGE
	/*-----------------------------------------------------------------------------------*/
	$(".bg-image").css('background-image', function() {
		var bg = ('url(' + $(this).data("image-src") + ')');
		return bg;
	});
	/*-----------------------------------------------------------------------------------*/
	/*	IMAGE ICON HOVER
	/*-----------------------------------------------------------------------------------*/
	$('.overlay:not(.caption) > a, .overlay:not(.caption) > span, .overlay.caption-overlay > a, .overlay.caption-overlay > span').prepend('<span class="bg"></span>');
	/*-----------------------------------------------------------------------------------*/
	/*	ISOTOPE GRID
	/*-----------------------------------------------------------------------------------*/
	function enableIsotope() {
	  // for each container
	  $('.grid').each( function( i, gridContainer ) {
	    var $gridContainer = $( gridContainer );
	    // init isotope for container
	    var $grid = $gridContainer.find('.isotope').imagesLoaded( function() {
	      $grid.isotope({
	        itemSelector: '.item',
	        layoutMode: 'masonry',
	        percentPosition: true,
	        masonry: {
	            columnWidth: $grid.width() / 12
	        },
			transitionDuration: '0.7s'
	      })
	    });
			$(window).resize(function() {
				$grid.isotope({
					masonry: {
						columnWidth: $grid.width() / 12
					}
				});
			});
			$(window).on("load", function() {
				$grid.isotope({
					masonry: {
						columnWidth: $grid.width() / 12
					}
				});
			});
	    // initi filters for container
	    $gridContainer.find('.isotope-filter').on( 'click', '.button', function() {
	      var filterValue = $( this ).attr('data-filter');
	      $grid.isotope({ filter: filterValue });
	    });
	  });
	    
	  $('.isotope-filter').each( function( i, buttonGroup ) {
	    var $buttonGroup = $( buttonGroup );
	    $buttonGroup.on( 'click', '.button', function() {
	      $buttonGroup.find('.active').removeClass('active');
	      $( this ).addClass('active');
	    });
	  });
	
	};
	enableIsotope();
	
	/*-----------------------------------------------------------------------------------*/
	/*	VIDEO WRAPPER
	/*-----------------------------------------------------------------------------------*/
	$('.video-wrapper video').backgroundVideo({
		$outerWrap: $('.video-wrapper'),
		pauseVideoOnViewLoss: false,
		parallaxOptions: {
			effect: 3
		}
	});
	/*-----------------------------------------------------------------------------------*/
	/*	IMAGE WRAPPER MOBILE
	/*-----------------------------------------------------------------------------------*/
	if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i)) {
		$('.image-wrapper').addClass('mobile');
	}
	/*-----------------------------------------------------------------------------------*/
	/*	PRICING
	/*-----------------------------------------------------------------------------------*/
	$('.pricing-wrapper').each(function(i, container) {
		var $container = $(container);
		$container.find(".pricing-switcher").on('click', function() {
			$container.find(".pricing-switcher").toggleClass('pricing-switcher-active');
			$container.find(".price").removeClass('price-hidden');
			$container.find(".price").toggleClass('price-show price-hide');
		});
	});


});