$('#sidenav').click(function() {
  $('#sidenav').removeClass('closed');
  $('#sidenav').addClass('open');
  // $('#openbtn').hide();
  $('#closebtn').show();
})

$('#closebtn').click(function() {
  $('#sidenav').removeClass('open');
  $('#sidenav').addClass('closed');
  $('#closebtn').hide();
  // $('#openbtn').show();
})