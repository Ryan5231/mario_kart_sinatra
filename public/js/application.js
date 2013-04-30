$(document).ready(function() {
  p1_username = prompt("What is your username?");
  p2_username = prompt("What is your username?");

  $.ajax({
    type: 'post',
    dataType: 'json',
    url: '/',
    data: {'p1_username' : p1_username, 'p2_username' : p2_username} 
  }).done(function(response) {
      if (response === 'true') {

      }
      // alert(response);
    }).fail(function(a, b, c) {
      // alert("Game is broken.");
      window.location = "/outoforder";
    });

    $('#p1').html(p1_username + " as Mario")
    $('#p2').html(p2_username + " as Sonic")

    var start = false;
    var position1 = 1;
    var position2 = 1;
    var length_of_track = 20;

    $(document).on('keyup', function(e) {
      // Detect which key was pressed and call the appropriate function
      // Google "jquery keyup what key was pressed" if you don't know how
      if (e.keyCode==13){
        start = true;
      }

      if (e.keyCode==32) {
        var active = $('.active');
        active.removeClass('active');
        $('#player1_strip td:first-child').addClass('active');
        $('#player2_strip td:first-child').addClass('active');
        position1 = 1;
        position2 = 1;
        start = false;
      }


      if (start && (position1 < length_of_track) && (position2 < length_of_track)) {

        if(e.keyCode==77){
          
          var active = $('#player1_strip .active');
          active.removeClass('active');
          active.next().addClass('active');
          ++position1;
          if (position1 == length_of_track) {
            start = false;
            alert("Mario wins!");
          }
        }
        if (e.keyCode==83){
          var active = $('#player2_strip .active');
          active.removeClass('active');
          active.next().addClass('active');
          ++position2;
          if (position2 == length_of_track) {
            alert("Sonic, the muthafucking, HedgeHog wins!");
            start = false;
          }
        }
      }


    });

});



// $(document).ready(function() {
//   var start = false;
//   var position1 = 1;
//   var position2 = 1;
//   var length_of_track = 20;

//   $(document).on('keyup', function(e) {
//     // Detect which key was pressed and call the appropriate function
//     // Google "jquery keyup what key was pressed" if you don't know how
//     if (e.keyCode==13){
//       start = true;
//     }

//     if (e.keyCode==32) {
//       var active = $('.active');
//       active.removeClass('active');
//       $('#player1_strip td:first-child').addClass('active');
//       $('#player2_strip td:first-child').addClass('active');
//       position1 = 1;
//       position2 = 1;
//       start = false;
//     }


//     if (start && (position1 < length_of_track) && (position2 < length_of_track)) {

//       if(e.keyCode==77){
        
//         var active = $('#player1_strip .active');
//         active.removeClass('active');
//         active.next().addClass('active');
//         ++position1;
//         if (position1 == length_of_track) {
//           start = false;
//           alert("Mario wins!");
//         }
//       }
//       if (e.keyCode==83){
//         var active = $('#player2_strip .active');
//         active.removeClass('active');
//         active.next().addClass('active');
//         ++position2;
//         if (position2 == length_of_track) {
//           alert("Sonic, the muthafucking, HedgeHog wins!");
//           start = false;
//         }
//       }
//     }


//   });
// });
