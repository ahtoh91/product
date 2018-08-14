window.onscroll = function() {myFunction()};
function myFunction() {
	var navbar = document.getElementById("navbar");
	var sticky = navbar.offsetTop;

  if (window.pageYOffset <= sticky) {
    
    navbar.classList.remove("sticky");
  } else {
    navbar.classList.add("sticky");
  }
}
$( document ).ready(function() {
      $('.pr_main').slick({
		swipeToSlide: true,
		infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        verticalSwiping: false,
        nextArrow: '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
        prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
        asNavFor: '.pr_slick'
      });

      $('.pr_slick').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.pr_main',
        verticalSwiping: false,
        dots: false,
        focusOnSelect: true,
        nextArrow: '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
        prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
        responsive: [
            {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: false
            }
          },
        ]

     });
     $(".productView-image").zoom();
     $('#gallery-wrap').click(function(){
     	$('.productView-image #popup-gallery').click();
     })
	$(".quantity .button").on("click", function(e) {
	  var oldValue = $("#quantity").val(),
	      newVal = 1;
	  if ($(this).hasClass('button-plus')) {

	      newVal = parseInt(oldValue) + 1;
	    } else if (oldValue > 1) {
	      newVal = parseInt(oldValue) - 1;
	  }
	  $("#quantity").val(newVal);
	  e.preventDefault();
	});
	$('#product-add-to-cart').click(function(e){
		$('.cart-widget-side').addClass('open-cart');
		$('.woodmart-close-side').addClass('open-cart');
		e.preventDefault();
	});
	var closecart = function(){
		$('.woodmart-close-side').removeClass('open-cart');
		$('.cart-widget-side').removeClass('open-cart');
	};
	$('.woodmart-close-side').click(function(e){
		closecart();
	});
	$('.widget-close').click(function(e){
		closecart();
	});
	$('ul.nav-tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');
		$('ul.nav-tabs li').removeClass('active');
		$('.tab-content').removeClass('active');
		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	});
	$('.comment-form-rating .stars a').on( 'click', function() {
	    $(this).parent().find('a.active').removeClass('active');
	    $(this).addClass('active');
	});
	$('.size-chart a').click(function(){
		$('.modalDialog').addClass('open');
	})
	$('.size-chart a').click(function(){
		$('.modalDialog').addClass('open');
		$('body').addClass('open-popup');
	});
	$('.modalDialog .close').click(function(){
		$('.modalDialog').removeClass('open');
		$('body').removeClass('open-popup')
	});
	$('.product-tabs .title-tab').on( 'click', function() {
	    $(this).toggleClass('active');
	    $(this).next('.tab_wrapper').toggleClass('active');
	});
              
});