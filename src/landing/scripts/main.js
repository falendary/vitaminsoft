$(document).ready(function() {
	console.log('Scripts works');
	$('.did-tab-btn').click(function (e) {
		e.preventDefault();
		if (!$(this).hasClass('active-tab-btn')) {
			console.log($('.active-tab'));
			$('.did-tab-btn.active-tab-btn').removeClass('active-tab-btn');
			$('.active-tab').toggleClass('active-tab hide');
			$(this).addClass('active-tab-btn');
			var tab = $(this).attr('data-tab');
			$(tab).toggleClass('active-tab hide');
		}
	})





});