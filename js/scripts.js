$(document).ready(function() {
    $("#formOne").submit(function(event) {
      var name = $("input#name").val();

      $(".name").text(name);
      $("#landing").hide();
      $("#survey").show();

      event.preventDefault();
    });
});