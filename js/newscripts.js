$(document).ready(function() {

	$.fn.extend({
	  toggleText: function (a, b){
	    if (this.text() == a){ this.text(b); }
	    else { this.text(a) }
	  }}
	);

	$('.js-compare').click(function() {
		$(this).next().toggleText("К сравнению", "В сравнении");
		$(this).next().toggleClass('is-active');
	});

});