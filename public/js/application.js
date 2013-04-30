$(document).ready(function() {
  p1_username = prompt("What is your username?");
  p2_username = prompt("What is your username?");

  $.ajax({
    type: 'post',
    dataType: 'json',
    url: '/',
    data: {'p1_username' : p1_username, 'p2_username' : p2_username} 
  }).done(function(response) {
      alert(response);
    }).fail(function(a, b, c) {
      alert("Game is broken.");
    });

});
