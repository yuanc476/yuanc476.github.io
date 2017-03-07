$('#btn1').click(function() {
  $('#slideshow').addClass('one');
  $('#slideshow').removeClass('two');
  $('#slideshow').removeClass('three');
  $('#a').removeClass('hidden');
  $('#b').addClass('hidden');
  $('#c').addClass('hidden');

})

$('#btn2').click(function() {
  $('#slideshow').addClass('two');
  $('#slideshow').removeClass('one');
  $('#slideshow').removeClass('three');
  $('#b').removeClass('hidden');
  $('#a').addClass('hidden');
  $('#c').addClass('hidden');
})

$('#btn3').click(function() {
  $('#slideshow').addClass('three');
  $('#slideshow').removeClass('one');
  $('#slideshow').removeClass('two');
  $('#c').removeClass('hidden');
  $('#b').addClass('hidden');
  $('#a').addClass('hidden');
})
