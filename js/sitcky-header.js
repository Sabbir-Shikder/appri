	/*==================
    header sticky plugin
    ==================*/	
	var windows = $(window);
	var sticky = $('.header-sticky')
		windows.on('scroll', function() {
			var scroll = windows.scrollTop();
			if (scroll < 250) {
			sticky.removeClass('stick');
		} else {
			sticky.addClass('stick');
		}
	});