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

var Input;
var hour;

function init() {
    let initNine = JSON.parse(localStorage.getItem("08:00 AM"));
    eight.val(initNine);

    let initNine = JSON.parse(localStorage.getItem("09:00 AM"));
    eight.val(initNine);

    let initNine = JSON.parse(localStorage.getItem("10:00 AM"));
    eight.val(initNine);

    let initNine = JSON.parse(localStorage.getItem("11:00 AM"));
    eight.val(initNine);

    let initNine = JSON.parse(localStorage.getItem("12:00 PM"));
    eight.val(initNine);

    let initNine = JSON.parse(localStorage.getItem("01:00 PM"));
    eight.val(initNine);

    let initNine = JSON.parse(localStorage.getItem("02:00 PM"));
    eight.val(initNine);

    let initNine = JSON.parse(localStorage.getItem("03:00 PM"));
    eight.val(initNine);

    let initNine = JSON.parse(localStorage.getItem("04:00 PM"));
    eight.val(initNine);

    let initNine = JSON.parse(localStorage.getItem("05:00 PM"));
    eight.val(initNine);

    let initNine = JSON.parse(localStorage.getItem("06:00 PM"));
    eight.val(initNine);
}

$(".saveBtn").on("click", function(){
   Input = $(this).siblings(".form-control").val();
   hour = $(this).siblings(".input-group-prepend").text();
   localStorage.setItem(hour, JSON.stringify(Input)); 
   console.log(Input);

   $(document).ready(function(){
    initPage()

}

