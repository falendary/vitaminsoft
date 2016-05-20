$(document).ready(function() {
	console.log('Scripts works');
	$('.did-tab-btn').click(function (e) {
		e.preventDefault();
		if (!$(this).hasClass('active-tab-btn')) {	//	tabs
			//	Hide current tab
			$('.did-tab-btn.active-tab-btn').removeClass('active-tab-btn');
			$('.active-tab').toggleClass('active-tab hide');
			//	Show next tab
			$(this).addClass('active-tab-btn');
			var tab = $(this).attr('data-tab');	//	Get active tab
			$(tab).toggleClass('active-tab hide');
		}
	});
	$('.taboo-tab-btn').click(function (e) {	//	Taboo tabs
		e.preventDefault();
		if (!$(this).hasClass('taboo-btn-active')) {
			//	Hide current tab
			$('.taboo-tab-btn.taboo-btn-active').removeClass('taboo-btn-active');
			$('.taboo-active-img').toggleClass('taboo-active-img hide');
			//	Show next tab
			$(this).addClass('taboo-btn-active');
			var tab = $(this).attr('data-tab');	//	Get active tab
			$(tab).toggleClass('taboo-active-img hide');
		}
	})





});