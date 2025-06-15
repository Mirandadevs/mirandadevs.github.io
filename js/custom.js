// Offset for Site Navigation
$('#siteNav').affix({
	offset: {
		top: 100
	}
})

$(document).ready(function(){
                  $('a[href^="#top"]').on('click',function (e) {
                                              e.preventDefault();
                                              
                                              var target = this.hash,
                                              $target = $(target);
                                              
                                              $('html, body').stop().animate({
                                                                             'scrollTop': 0
                                                                             }, 900, 'swing', function () {
                                                                             window.location.hash = target;
                                                                             });
                                              });
                  });

$(document).ready(function(){
                  $('a[href^="#contact"]').on('click',function (e) {
                                       e.preventDefault();
                                       
                                       var target = this.hash,
                                       $target = $(target);
                                       
                                       $('html, body').stop().animate({
                                                                      'scrollTop': $target.offset().top
                                                                      }, 900, 'swing', function () {
                                                                      window.location.hash = target;
                                                                      });
                                       });
                  });