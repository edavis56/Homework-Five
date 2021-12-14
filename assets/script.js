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


function init() {
    let initNine = JSON.parse(localStorage.getItem("08:00 AM"));
    eight.val(initNine);
}