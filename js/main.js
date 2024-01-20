(function () {

	'use strict';

	window.addEventListener('DOMContentLoaded', function () {
		var urlParams = new URLSearchParams(window.location.search);
		var contentParam = urlParams.get('contact');
		if (contentParam !== null) {
			$('#main_page').removeClass('active');
			$('#connect').addClass('active');

			$('.sg-tab-content.active').removeClass('active animated fadeOutDown fadeInUp');
			$('.sg-tab-content[data-content=6]').addClass('animated fadeInUp active');
			getHeight();
		}
	});


	var isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var getHeight = function () {
		var extraHeight = 0;

		if (isMobile.any()) extraHeight = 50;

		setTimeout(function () {
			$('#sg-main').stop().animate({
				'height': $('.sg-tab-content.active').height() + extraHeight
			});
		}, 200);
	};


	var tabContainer = function () {
		getHeight();
		$(window).resize(function () {
			getHeight();
		})
	};

	var tabClickTrigger = function () {
		$('.sg-tab-menu a').on('click', function (event) {
			event.preventDefault();
			var $this = $(this),
				data = $this.data('tab'),
				pie = $this.data('pie');

			$('.sg-tab-menu li').removeClass('active');
			$this.closest('li').addClass('active');

			$('.sg-tab-content.active').addClass('animated fadeOutDown');

			setTimeout(function () {
				$('.sg-tab-content.active').removeClass('active animated fadeOutDown fadeInUp');
				$('.sg-tab-content[data-content="' + data + '"]').addClass('animated fadeInUp active');
				getHeight();
			}, 500);

		})
	};

	$(function () {
		tabContainer();
		tabClickTrigger();
	});


}());