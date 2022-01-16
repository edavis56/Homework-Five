// This is where moment.js source is being used to setup a variable for the date and time
var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");

//This setup an interval to repeat a function every second to update the variable created above
var timeInterval = setInterval(function() {
  var now = moment();
  //This is updating the html id with the current
  $('#currentDay').html(currentDate + " " + now.format('hh:mm:ss A'));
}, 1000);


// These variables will be used late to update the html
var eightAm = $('#8am');
var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#1pm");
var twoPm = $("#2pm");
var threePm = $("#3pm");
var fourPm = $("#4pm");
var fivePm = $("#5pm");
var sixPm = $("#6pm");

function initPage() {

  var init8 = JSON.parse(localStorage.getItem("08:00 am"));
  eightAm.val(init8);

  var init9 = JSON.parse(localStorage.getItem("09:00 am"))
  nineAm.val(init9);
  
  var init10 = JSON.parse(localStorage.getItem("10:00 am"))
  elevenAm.val(init10);
  
  var init11 = JSON.parse(localStorage.getItem("11:00 pm"))
  twelvePm.val(init11);
  
  var init12 = JSON.parse(localStorage.getItem("12:00 pm"))
  onePm.val(init12);
  
  var init1 = JSON.parse(localStorage.getItem("01:00 pm"))
  twoPm.val(init1);
  
  var init2 = JSON.parse(localStorage.getItem("02:00 pm"))
  threePm.val(init2);
 
  var init3 = JSON.parse(localStorage.getItem("03:00 pm"))
  fourPm.val(init3);
  
  var init4 = JSON.parse(localStorage.getItem("04:00 pm"))
  fivePm.val(init4);
  
  var init5 = JSON.parse(localStorage.getItem("05:00 pm"))
  sixPm.val(init5);

  var init7 = JSON.parse(localStorage.getItem("06:00 pm"))
  sixPm.val(init7);
} 



$(document).ready(function(){
  initPage()

  // This sets up the save function, place the input to the local storage to be recalled later
  $(".saveBtn").on("click", function(){
    userInput = $(this).siblings(".form-control").val().trim();
    console.log(userInput);
    hourSpan = $(this).siblings(".input-group-prepend").text().trim();
    console.log(hourSpan);
    localStorage.setItem(hourSpan, JSON.stringify(userInput));

  })
  // This is the function for the delete button to clear the input
  $(".deleBtn").on("click", function(){
    userInput = $(this).siblings(".form-control").val().trim();
    hourSpan = $(this).siblings(".input-group-prepend").text().trim();
    localStorage.clear(hourSpan, JSON.stringify(userInput));
    initPage()
  }) 

});