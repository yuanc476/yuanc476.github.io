$('#sidenav').click(function() {
  $('#sidenav').removeClass('closed');
  $('#sidenav').addClass('open');
  // $('#openbtn').hide();
  $('#closebtn').show();
})

$('#closeBtn').click(function() {
  $('#sidenav').removeClass('open');
  $('#sidenav').addClass('closed');
  $('#closebtn').hide();
  // $('#openBtn').show();
})