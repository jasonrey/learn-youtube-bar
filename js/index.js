$(function() {
	var $barFrame = $('.bar-frame'),
		$hoverBar = $('.bar-hover'),
		$progressBar = $('.bar-progress');

	$barFrame.on('mousemove', function(ev) {
		var x = ev.offsetX;

		$hoverBar.css('width', x);
	});

	$barFrame.on('mouseenter', function() {
	});

	$barFrame.on('mouseleave', function() {
	});

	$barFrame.on('click', function(ev) {
		if ($(ev.target).is('.progress-dot')) {
			return;
		}

		var x = ev.offsetX;

		$progressBar.css('width', x);
	});
});
