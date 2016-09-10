var color = 'white';

var colors = 'white red blue green yellow';

$('.box').on('click', function() {
  $(this).addClass(color);
})

$('.box').on('dblclick', function() {
  $(this).removeClass(colors);
})

$('#reset').on('click', function() {
  $('.box').removeClass(colors);
})

$('#blue').on('click', function() {
  color = 'blue';
})

$('#yellow').on('click', function() {
  color = 'yellow';
})

$('#red').on('click', function() {
  color = 'red';
})

$('#white').on('click', function() {
  color = 'white';
})

$('#green').on('click', function() {
  color = 'green';
})
