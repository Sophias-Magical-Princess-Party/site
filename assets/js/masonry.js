 /* $('.grid').masonry({
  //set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.grid-item',
  columnWidth: 100,
  //use element for option
  columnWidth: '.grid-sizer',
  percentPosition: true
}) */

// init Masonry
var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  fitWidth: true,
  gutter: 10,
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry();
});