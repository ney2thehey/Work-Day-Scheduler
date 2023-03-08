
//current hour and day 
var todayIs = dayjs();
var currentHour = dayjs().hour();
var todayIs = dayjs();
$('#currentDay').text(todayIs.format('MMM D, YYYY, h:mm'));

$(function () {
  $(".saveBtn").on("click", function(event) {   //create an event listener here 
    // console.log($(this).parent().attr("id"));
    var value = $(this).siblings("textarea").val();
    var key = $(this).parent().attr("id");
    localStorage.setItem(key,value);    //setting to localstorage
    // event.currentTarget.className = localStorage.getItem(value);
    // console.log(event.currentTarget);
$("#hour9").children("textarea").val(localStorage.getItem('hour-9'));

$("#hour10").children("textarea").val(localStorage.getItem('hour-10'));

$("#hour11").children("textarea").val(localStorage.getItem('hour-11'));

$("#hour12").children("textarea").val(localStorage.getItem('hour-12'));

$("#hour13").children("textarea").val(localStorage.getItem('hour-13'));

$("#hour14").children("textarea").val(localStorage.getItem('hour-14'));

$("#hour15").children("textarea").val(localStorage.getItem('hour-15'));

$("#hour16").children("textarea").val(localStorage.getItem('hour-16'));

$("#hour17").children("textarea").val(localStorage.getItem('hour-17'));
  });

$(".time-block").each(function() {
               // console.log(this.id);
      var showHours = this.id.substring(5);
     //show all hours here
      if (showHours>currentHour){
        this.classList.add("future");
      }
      else if (showHours = currentHour){
        this.classList.add("present");
      }
      else if (showHours = currentHour){
        this.classList.add("past");
      }

});

});