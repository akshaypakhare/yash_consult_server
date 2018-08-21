(function ($) {
	"use strict";
	var html = '';
	var widthBox = $('#boxOpenTime').width();
	$('.img-box-right-border').css('border-left-width', widthBox + 'px');
	$(document).ready(function () {
		$(window).resize(function () {
			widthBox = $('#boxOpenTime').width();
			$('.img-box-right-border').css('border-left-width', widthBox + 'px');
		});
		$('a[href=#top]').click(function () {
			$('html, body').animate({
				scrollTop : 0
			}, 'slow');
			return false;
		});

		$('#to-bottom').click(function () {
			$('html, body').animate({
				scrollTop : $(this).offset().top
			}, 'slow');
			return false;

		});
		$('#select-demo').click(function () {
			$('html, body').animate({
				scrollTop : $('#to-bottom').offset().top
			}, 'slow');
			return false;

		});

		$('.about-con').each(function () {
			if ($(this).index() == 1) {
				$(this).addClass('block-item-special');
			}
		});

		$('.about-con').hover(function () {
			if (!$(this).hasClass('block-item-special') && !$(this).hasClass('blockItemFirst')) {
				$('.block-item-special').removeClass('block-item-special');
				$(this).addClass('block-item-special');
			}
		});

		$('.img-class').each(function (index) {
			$(this).waypoint(function () {
				$(this).animate({
					width : "auto"
				}, 0, function () {
					$(this).addClass('move_to_center');
				});
			}, {
				offset : '100%'
			});
		});

		$('.content-main-right .title-men, .content-main-right .desc-content, .content-main-right .join').each(function (index) {
			$(this).waypoint(function () {
				$(this).delay(400 * index + 700).animate({
					width : "auto"
				}, 0, function () {
					$(this).addClass('move_to_center');
				});
			}, {
				offset : '100%'
			});
		});
		$('.content-main-left .title-men, .content-main-left .desc-content, .content-main-left .join').each(function (index) {
			$(this).waypoint(function () {
				$(this).delay(400 * index + 700).animate({
					width : "auto"
				}, 0, function () {
					$(this).addClass('move_to_center');
				});
			}, {
				offset : '100%'
			});
		});

		$('.title-about').each(function (index) {
			$(this).waypoint(function () {
				$(this).animate({
					width : "auto"
				}, 0, function () {
					$(this).addClass('move_from_top');
				});
			}, {
				offset : '100%'
			});
		});

		$('.box-right').each(function (index) {
			$(this).waypoint(function () {
				$(this).delay(400 * index + 650).animate({
					width : "auto"
				}, 0, function () {
					$(this).addClass('move_to_center');
				});
			}, {
				offset : '100%'
			});
		});

		$('.box-left').each(function (index) {
			$(this).waypoint(function () {
				$(this).delay(400 * index + 650).animate({
					width : "auto"
				}, 0, function () {
					$(this).addClass('move_to_center');
				});
			}, {
				offset : '100%'
			});
		});

		$('.timetable').waypoint(function () {
			$('.title-time, .octember, .monday, .tuesday, .wednesday , .thursday, .friday , .saturday, .sunday').each(function (index) {
				$(this).delay(500 * index + 650).animate({
					width : "auto"
				}, 0, function () {
					$(this).addClass('move_to_fadein_top');
				});
			});
		}, {
			offset : '100%'
		});

		$('.demos-home').waypoint(function () {
			$('.demos-content').each(function (index) {
				$(this).delay(500 * index + 650).animate({
					width : "auto"
				}, 0, function () {
					$(this).addClass('move_to_fadein_top');
				});
			});
		}, {
			offset : '100%'
		});

		$('.banner-text').waypoint(function () {
			$('.athlete-html, .athlete-welcome, .athlete-desc, .link-to').each(function (index) {
				$(this).delay(500 * index + 650).animate({
					width : "auto"
				}, 0, function () {
					$(this).addClass('move_to_fadein_top');
				});
			});
		}, {
			offset : '100%'
		});

		$('.image-price-right, .image-price-left, .boxing-card-content, .yoga-card-content').each(function (index) {
			$(this).waypoint(function () {
				$(this).animate({
					width : "auto"
				}, 0, function () {
					$(this).addClass('move_to_center_img');
				});
			}, {
				offset : '100%'
			});
		});

		$('.ch-info-wrap, .success').each(function (index) {
			$(this).waypoint(function () {
				$(this).animate({
					width : "auto"
				}, 0, function () {
					$(this).addClass('move_to_fadein_title');
				});
			}, {
				offset : '100%'
			});
		});

		$('.fit-strong-left').waypoint(function () {
			$('.fit-strong-text, .fit-strong-sub, .fit-strong-bottom').each(function (index) {
				$(this).delay(600 * index).animate({
					width : "auto"
				}, 0, function () {
					$(this).addClass('move_to_fadein_title');
				});
			});
		}, {
			offset : '100%'
		});

		$('.fit-strong-right, .img-box-right').each(function (index) {
			$(this).waypoint(function () {
				$(this).delay(600 * index + 1000).animate({
					width : "auto"
				}, 0, function () {
					$(this).addClass('move_to_fadein_title');
				});
			}, {
				offset : '100%'
			});
		});

		$('.img-box-right').waypoint(function () {
			$('.img-box, .open-hour, .text-box').each(function (index) {
				$(this).delay(600 * index + 2000).animate({
					width : "auto"
				}, 0, function () {
					$(this).addClass('move_to_fadein_title');
				});
			});
		}, {
			offset : '100%'
		});

		$('.facts-page').waypoint(function () {
			$('.title-facts').each(function (index) {
				$(this).animate({
					width : "auto"
				}, 0, function () {
					$(this).addClass('move_to_fadein_title');
				});
			});
			
			var counter = 0;
			$('.facts-content .count span').each(function(){
				var el = this;
				counter++;
				var y = parseInt($(el).html());
					setTimeout(function(){
					$({someValue: 0}).animate({someValue: y}, {
					  duration: 2000,
					  easing:'swing', // can be anything
					  step: function() { // called on every step
						$(el).html(Math.round(this.someValue));
					  },
					  complete:function(){
						$(el).html(y);
					  }				  
					});
				},1000 * counter);
			});
			
		}, {
			offset : '100%'
		});

		$('.facts-page').waypoint(function () {
			$('.facts-content').each(function (index) {
				$(this).delay(600 * index + 2000).animate({
					width : "auto"
				}, 0, function () {
					$(this).addClass('move_to_center');
				});
			});
		}, {
			offset : '100%'
		});

		$('.introduction').waypoint(function () {
			$('.intro-content').each(function (index) {
				$(this).delay(1000 * index + 2000).animate({
					width : "auto"
				}, 0, function () {
					$(this).addClass('move_to_fadein_title');
				});
			});
		}, {
			offset : '100%'
		});
		
		$('.masonry-small, .masonry-lagar').each(function (index) {
			$(this).waypoint(function () {
				$(this).delay(300 * index + 500).animate({
					width : "auto"
				}, 0, function () {
					$(this).addClass('move_to_center');
				});
			}, {
				offset : '100%'
			});
		});
		
		$('.product-store').waypoint(function () {
			$('.product-store .product-image-wrapper').each(function (index) {
				$(this).delay(500 * index + 650).animate({
					width : "auto"
				}, 0, function () {
					$(this).addClass('move_to_fadein_top');
				});
			});
		}, {
			offset : '100%'
		});
		
		$('.sport-box').each(function (index) {
			$(this).waypoint(function () {
				$(this).delay(500 * index + 650).animate({
					width : "auto"
				}, 0, function () {
					$(this).addClass('move_to_center_img');
				});
			}, {
				offset : '100%'
			});
		});

	});

	window.showEvent = function(id) {
		$('.calendar-details').hide();
		$('.calendar-active.active').removeClass('active');
		$('#' + id + '-pop').show("slow");
		$('#' + id).addClass('active');
	}
	$('.calendar-note').mouseleave(function () {
		$('.calendar-details').hide();
		$('.calendar-active.active').removeClass('active');
	});
	
	$('#contents-main .scroll-to').each(function (index) {
		$(this).waypoint(function (direction) {
			if (direction === 'down') {
				$('.header').removeClass('alt');
			} else if (direction === 'up') {
				$('.header').addClass('alt');
			}
		}, {
			offset : '100%'
		});

	});
	
	$('#load-more-trainer').click(function () {
		$.ajax({
			type : "GET",
			url : 'ajax-trainer.html',
			cache : false,
			success : function (transport) {
				if (html != transport) {
					html = transport;
					var $moreBlocks = $(transport).filter('.our-trainer-box');
					$('#our-trainers').append($moreBlocks);
				}
			}
		});
	});

	$('#load-more-listing').click(function () {
		$.ajax({
			type : "GET",
			url : 'ajax-listing-grid.html',
			cache : false,
			success : function (transport) {
				if (html != transport) {
					html = transport;
					var $moreBlocks = $(transport).filter('.listing-grid');
					$('#our-listing-grid').append($moreBlocks);
				}
			}
		});
	});
	$('.owl-page').click(function () {
		var owl1 = $('#carousel-text').data('owlCarousel');
		var owl2 = $('#carousel-image').data('owlCarousel');
		$('.owl-page').removeClass('active');
		$(this).addClass('active');
		owl1.goTo($(this).attr('data-page'));
		owl2.goTo($(this).attr('data-page'));
	});
	function showproduct() {
		var url = 'product-detail.html';
		window.location.href = url;
	}
	var heightW = $(window).height();
	$('#contents-main').css('margin-top', heightW + 'px');
	$(window).resize(function () {
		var heightW = $(window).height();
		$('#contents-main').css('margin-top', heightW + 'px');
	});

	/** PARALLAX LAYERS EFFECT FOR WELCOME PAGE**/
	if (typeof Parallax !== 'undefined') {
		$('#scene .layer-bg').css({
			height : ($(window).height() + 400) + 'px',
			width : ($(window).width() + 400) + 'px'
		});
		$(window).resize(function () {
			$('#scene .layer-bg').css({
				height : ($(window).height() + 400) + 'px',
				width : ($(window).width() + 400) + 'px'
			});
		})
		new Parallax(document.getElementById('scene'));
	}

	/** CONTACT FORM **/
	$('.main-contact-form').submit(function (e) {
		$.ajax({
			type : "POST",
			url : 'contact.php',
			data : $(this).serialize(),
			dataType : "json",
			success : function (result) {
				if (result.status) {
					$('.btn-submit').addClass('btn-success');
				} else {
					$('.btn-submit').addClass('btn-error');

				}
				setTimeout(function () {
					//$('.btn-submit').removeClass('btn-error');
					//$('.btn-submit').removeClass('btn-success');
				}, 1000);
			}
		});
		e.preventDefault();
	});
	$('.main-contact-form input,.main-contact-form textarea').focus(function () {
		$('.btn-submit').removeClass('btn-error');
		$('.btn-submit').removeClass('btn-success');
	})
	/** COOKIE FUNCTION */
	function setCookie(cname, cvalue, exdays) {
		var expires = "";
		if(exdays){
			var d = new Date();
			d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
			expires = " expires=" + d.toUTCString();	
		}
		document.cookie = cname + "=" + cvalue + ";" + expires;
	}
	function getCookie(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ')
				c = c.substring(1);
			if (c.indexOf(name) == 0)
				return c.substring(name.length, c.length);
		}
		return "";
	}
})(jQuery);
