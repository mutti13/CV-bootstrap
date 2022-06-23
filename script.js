$(window).on("load", function() {
    //when the page completely loads
    alert("HELLO TO THE WEBPAGE !!! ");
});
$(document).ready(function(){
  $("#bt2").click(function(){
    $("#expe").toggle();
  });
});
$(document).ready(function(){
  $("#bt1").click(function(){
    $("#proff").toggle();
  });
});
$(document).ready(function(){
  $("#bt3").click(function(){
    $("#skil").toggle();
  });
});
$(document).ready(function(){
  $("#bt4").click(function(){
    $("#hb").toggle();
  });
});
