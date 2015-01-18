// JavaScript source code
var tasks = [];
var taskButtons = [];
$(document).ready(function () {
    loadstate();
    //displayButtons();
    $("#target").click(function () {
        alert("Handler for .click() called.");
    });
    console.log("hi");



});

function loadstate() {
    tasks = JSON.parse(localStorage.getItem("allTasks"));
    if (!tasks)
        return;
}

function saveState() {
    localStorage.setItem("allTasks", JSON.stringify(tasks));
}

function deleteTask(index) {
    tasks.splice(index, index);
    saveState();
}
var displayButtons = function()
{
    var btn = document.createElement("Button");
    //var t = document.createTextNode(tasks[i].event);
    taskButtons[taskButtons.length] = btn;
    btn.appendChild(t);
    document.body.appendChild(btn);



}
var changeStatus = function(task)
{


}
var formatButton = function(task)
{



}
