$('#sidenav').click(function() {
  $('#sidenav').removeClass('closed');
  $('#sidenav').addClass('open');
  // $('#openbtn').hide();
  $('#closebtn').show(500);
})

$('#closebtn').click(function() {
  $('#sidenav').removeClass('open');
  $('#sidenav').addClass('closed');
  $('#closebtn').hide();
  // $('#openbtn').show();
})