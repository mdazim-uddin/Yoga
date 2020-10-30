(function ($) {

'use strict'

	$('.owl-carousel').owlCarousel({
     loop:true,
     margin:10,
     nav:true,
     autoplay:true,
     autoplayTimeout:2000,
     responsive:{
         0:{
             items:1
         },
         600:{
             items:3
         },
         1000:{
             items:5
         }
     } }) 
$('.menu-icon i').on( 'click' , function (){
        $('.menu').slideToggle();
    });
    $(window).resize(function(){
        var screansize = $(window).width();
        if (screansize >768) {
            $('.menu').removeAttr('style');
        }
    })
    $('yoga-benner').ripples();
//     filter items on button click
// $('.filter-button-group').on( 'click', 'button', function() {
//   var filterValue = $(this).attr('data-filter');
//   $grid.isotope({ filter: filterValue });
// });
// var $grid = $('.grid').isotope({
//   // set itemSelector so .grid-sizer is not used in layout
//   itemSelector: '.grid-item',
//   percentPosition: true,
//   masonry: {
//     // use element for option
//     columnWidth: '.grid-item'
//   }
// })

}) (jQuery);