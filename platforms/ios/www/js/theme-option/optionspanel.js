jQuery(document).ready(function($) {
	
	$('.options_toggle').bind('click', function() {
		if($('#panel').css('left') == '0px'){
			$('#panel').stop(false, true).animate({left:'-230px'}, 400, 'easeOutExpo');
		}else {
			$('#panel').stop(false, true).animate({left:'0px'}, 400, 'easeOutExpo');
		}	
	});

	
	$('#accent_color').ColorPicker({
		onSubmit: function(hsb, hex, rgb, el) {
			$(el).val(hex);
			$(el).ColorPickerHide();
		},
		onBeforeShow: function () {
			$(this).ColorPickerSetColor(this.value);
		},
		onChange: function (hsb, hex, rgb) {
			$('#accent_color').val(hex);
			$('#accent_color').css('backgroundColor', '#' + hex);
			accentColorUpdate(hex);
		}
	})
	.bind('keyup', function(){
		$(this).ColorPickerSetColor(this.value);
	});

	
function accentColorUpdate(hex){

	hex = '#'+hex;

	$('#custom_styles').html('<style>'+
		'a, a:hover, .btn-link, .btn-link:hover, .color, header .navbar-nav li a:hover, .img-title h6 a:hover, .social-wrapper .social-icon:hover, ul.featured-list li i, .meta-post li a:hover, .media-heading h5 a:hover{ color:'+ hex +'; }' +
		'#filter-bar ul#filters li a.selected, #filter-bar ul#filters li a:hover, .zoom, #bottom, #toTop, .pricing-table li ul li.plan_name , .pricing-table li ul li.plan_price, .pricing-table li.featured ul li.plan_price, .contact-box, .tabber li:hover { background-color:'+ hex +';}' +
		'#intro, #page-head, .form-wrapper legend span, header .navbar-nav li.active a, #featured .heading span, ul.featured-list li span, #team, .heading span.left, .heading span.right, gray-bg .heading span.left, gray-bg .heading span.right, .accordion-body.in span, .accordion-heading span { background-color:'+ hex +';}' +
		'textarea:focus, input[type="text"]:focus, input[type="password"]:focus, input[type="datetime"]:focus, input[type="datetime-local"]:focus, input[type="date"]:focus, input[type="month"]:focus, input[type="time"]:focus, input[type="week"]:focus, input[type="number"]:focus, input[type="email"]:focus, input[type="url"]:focus, input[type="search"]:focus, input[type="tel"]:focus, input[type="color"]:focus, .uneditable-input:focus,  .postdate span, .testimo-avatar:hover, .form-control:focus, #focusedInput { border-color:'+ hex +';}'+
		'header .navbar-nav > .dropdown > a:hover .caret { border-top-color:'+ hex +';}'+
		'header .navbar-nav > .dropdown > a:hover .caret { border-bottom-color:'+ hex +';}'+
		'</style>');
}

function bodybgColorUpdate(hex){
	$('body').css('background', '#'+hex);
}
	
});