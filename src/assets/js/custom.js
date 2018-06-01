// [MASTER JAVASCRIPT]
//	Project     :	CHARITY Page
//	Version     :	1.0
//	Last Change : 	20/10/2017
//	Primary Use :   CHARITY Page
$(document).on('ready', function () {

	"use strict"; //Start of Use Strict

	//After Scroll Menu Created, Menu Bgcolor and Text Color
	var menu_bg = $('.menu-bg');
	if (menu_bg.length) {
		var menu_bar = $('.navbar-default');
		var top_nav = $('#top-nav');

		var x = top_nav.offset().top
		if (x > 0) {
			menu_bar.fadeIn().css({
				"background-color": "#000000",
				"box-shadow": "0px 0px 5px rgba(0,0,0,0.3)"
			});
		} else {
			menu_bar.css({
				"background-color": "rgba(0, 0, 0, 0.5)",
				"box-shadow": "none",

			});
		}

		$(document).on('scroll', function () {
			var y = $(this).scrollTop();
			if (y > 50) {
				menu_bar.fadeIn().css({
					"background-color": "#000000",
					"box-shadow": "0px 0px 5px rgba(0,0,0,0.3)"
				});
			} else {
				menu_bar.css({
					"background-color": "rgba(0, 0, 0, 0.5)",
					"box-shadow": "none"
				});
			}
		});
	}

	//MENU BAR SMOOTH SCROLLING FUNCTION
	var menu_bg = $('.menu-bg');
	if (menu_bg.length) {
		$('ul.nav a[href^="#"]').on('click', function (event) {
			if (!$(this).hasClass('dropdown-toggle')) {

				var toggle = $(".navbar-toggle").is(":visible");
				if (toggle) {
					$(".navbar-collapse").collapse('hide');
				}
				if ($($.attr(this, 'href')).length) {
					$('html, body').animate({
						scrollTop: $($.attr(this, 'href')).offset().top - 50
					}, 2000);
					return false;
				}
			}
			event.preventDefault();
		});
	}

	//COUNTER JS	
	if ($('.count').length) {
		$('.count').counterUp({
			delay: 10,
			time: 2000
		});
	}

	//VERTICAL-CAROUSEL JS	
	var about_common = $('.about_common');
	if (about_common.length) {
		$(".about-verticalcarousel").verticalCarousel({
			currentItem: 1,
			showItems: 2
		});
	}

	var events_common = $('.events_common');
	if (events_common.length) {
		$(".events").verticalCarousel({
			currentItem: 1,
			showItems: 3
		});
	}

	//TESTIMONIAL JS	
	var owl_testimonial = $('#owl-testimonial');
	if (owl_testimonial.length) {
		$('#owl-testimonial .owl-prev, #owl-testimonial .owl-next').on("click", function () {
			var $this = $(this);
			var currentItem = $this.parent().prev().find('.owl-item.active.center');
			var currentHref = currentItem.find('a').attr('href');
			$('.tab-pane').removeClass('active in');
			$(currentHref).addClass('active in');
		});

	}

	// YOUTUBE BACKGROUND VIDEO FUNCTION	
	var player = $('.player');
	if (player.length) {
		player.mb_YTPlayer();
	}

	return false;

});