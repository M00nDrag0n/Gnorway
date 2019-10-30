$(document).ready(function() {
  $("#questions").submit(function(event) {
    var year = $("input#year").val();
    if (!((year % 4) === 0)) {
      leapYear(false);
    } else if (!((year % 100)===0)){
      leapYear(true);
    } else if (!((year % 400)===0)){
      leapYear(false);
    } else {
      leapYear(true);
    }
    event.preventDefault();
  })

  function leapYear(leapYear) {
    $("#Leap").hide();
    $("#roLeap").hide();        
    if(leapYear) {
      $("#Leap").show();
    } else {
      $("#roLeap").show();
    }
  }

  // $("body").click(function(event) {
  //   alert("NO RO GRUMP ANIIIIIIIIKE. RO NO GRUMP.");
  // });
});
