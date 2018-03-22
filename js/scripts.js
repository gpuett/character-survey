// var result = function(q1, q2, q3) {
//   return q1 + q2 + q3;
// }


$(document).ready(function(){
  $("#character").submit(function(event){
    event.preventDefault();
    var q1 = parseInt($("#q1").val());
    var q2 = parseInt($("#q2").val());
    var q3 = parseInt($("#q3").val());
    var result = q1 + q2 + q3
      if (result <= 3) {
        $(".charlie").show();
      } else if (result <= 6) {
        $(".mac").show();
      } else {
        $(".dennis").show();
      }
  });
});
