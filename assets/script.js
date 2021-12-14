var eight = $("#8AM");
var nine = $("#9AM");
var ten = $("#10AM");
var eleven = $("#11AM");
var noon = $("#12PM");
var one = $("#1PM");
var two = $("#2PM");
var three = $("#3PM");
var four = $("#4PM");
var five = $("#5PM");
var six = $("#6PM");

var input;
var hour;

function init() {
    let initEight = JSON.parse(localStorage.getItem("08:00 AM"));
    eight.val(initEight);

    let initNine = JSON.parse(localStorage.getItem("09:00 AM"));
    nine.val(initNine);

    let initTen = JSON.parse(localStorage.getItem("10:00 AM"));
    ten.val(initTen);

    let initEleven = JSON.parse(localStorage.getItem("11:00 AM"));
    eleven.val(initEleven);

    let initNoon = JSON.parse(localStorage.getItem("12:00 PM"));
    noon.val(initNoon);

    let initOne = JSON.parse(localStorage.getItem("01:00 PM"));
    one.val(initOne);

    let initTwo = JSON.parse(localStorage.getItem("02:00 PM"));
    two.val(initTwo);

    let initThree = JSON.parse(localStorage.getItem("03:00 PM"));
    three.val(initThree);

    let initFour = JSON.parse(localStorage.getItem("04:00 PM"));
    four.val(initFour);

    let initFive = JSON.parse(localStorage.getItem("05:00 PM"));
    five.val(initNinitFiveine);

    let initSix = JSON.parse(localStorage.getItem("06:00 PM"));
    six.val(initSix);
}


$(document).ready(function(){
    init()

$(".saveBtn").on("click", function(){
   input = $(this).siblings(".form-control").val();
   hour = $(this).siblings(".input-group-prepend").text();
   localStorage.setItem(hour, JSON.stringify(input));
})

}