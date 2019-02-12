$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();
    var firstNameInput = $("input#first-name").val();
    console.log(firstNameInput);
    var lastNameInput = $("input#last-name").val();
    console.log(lastNameInput);
    var date1Input= $("input#date").val();
    console.log(date1Input);
    var startingTime = $("input#starttime").val();
    var endingTime = $("input#endtime").val();


    $("#f-name").text(firstNameInput);
    $("#l-name").text(lastNameInput);
    $("#calendar-date").text(date1Input);
    $("#time1").text(startingTime);
    $("#time2").text(endingTime);
    // $(".verb").text(verbInput);


    $("#appointment-details").show();

  });
});
