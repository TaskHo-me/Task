// JavaScript source code
var taskButtons = [];
var tasks = [];
$(document).ready(function () {
    loadState();
    $("#addButton").click(function () {
        for (i = 0; i < tasks.length; i++) {
            var btn = document.createElement("Button");
            var t = document.createTextNode(tasks[i].event);
            taskButtons[taskButtons.length] = btn;
            btn.appendChild(t);
            document.body.appendChild(btn);
        }

    });
   


});

var changeStatus = function(task)
{


}
var formatButton = function(task)
{



}
