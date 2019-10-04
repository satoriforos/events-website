
var slideIndex = 0;

jQuery(document).ready(function($) {
  $('#price').change(function(e) {
  	self = $(this);
  	if (self.is(":checked")) {
  		$("#annualy").css("display", "flex");
  		$("#monthly").css("display", "none");
	    $('#billed-monthly').addClass('active');
	    $('#billed-annually').removeClass('active');
	} else {
  		$("#annualy").css("display", "none");
  		$("#monthly").css("display", "flex");
	    $('#billed-monthly').removeClass('active');
	    $('#billed-annually').addClass('active');
	}
  });

  showSlides();

  bodyID = $('body').attr('id');
  if (bodyID == 'squeeze-page') {
      $("a#newsletter_example_trigger").fancybox({
        'hideOnContentClick': true
      });

      $("a#investor_example_trigger").fancybox({
        'hideOnContentClick': true
      });

      /* Apply fancybox to multiple items */
      
      $("a.group").fancybox({
        'transitionIn'  : 'elastic',
        'transitionOut' : 'elastic',
        'speedIn'   : 600, 
        'speedOut'    : 200, 
        'overlayShow' : false
      });
  }
});


function showSlides() {
  var timeout_ms = 4 * 1000;
  var slides = $(".mySlides");
  var dots = $(".dot");
  for (i = 0; i < slides.length; i++) {
    if (i == slideIndex) {
      $(slides[i]).show();
    } else {
      //if (i != (slideIndex < 1)) {
        $(slides[i]).hide(); 
      //}
    }
  }
  for (i = 0; i < dots.length; i++) {
    if (i == slideIndex) {
      $(dots[i]).addClass('active');
    } else {
      $(dots[i]).removeClass('active');
    }
  }

  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    

  setTimeout(showSlides, timeout_ms); 
}
