// JavaScript source code
var tasks = [];
var taskButtons = [];
var deleting = false;
$(document).ready(function () {
    loadstate();
    displayButtons();
    //console.log($("#taskClicked").content);
    $(".button").click(function () {
        if (deleting)
        {
            deleteTask(parseInt($(".button").attr("index1")))
        }
        else{
        console.log(parseInt($(".button").attr("index1")));
        console.log((tasks[0].index1))
        changeStatus($(".button").attr("index1"))
        }
        //$("taskClicked").text(tasks[$("#taskClicked").index].eventA);
    })
    $("#DeleteMode").click(function () {
        if (deleting)
            deleting = false;
        else
        deleting = true;
    })

});



function createButton(eventA,backcolor,index,date)
{
    $("<button/>",{
        class: "button btn-default",
        text: eventA+", "+(date),
        id: 'taskClicked',
        index1: parseInt(index),
        css:
        {
            color: backcolor
        }
    }).appendTo("#buttons");
    
}
function loadstate() {
    tasks = JSON.parse(localStorage.getItem("allTasks"));
    if (!tasks)
        return;
}
function displayButtons()
{
    for(i = 0; i < tasks.length; i++)
    {
        if ((tasks[i].minute>0) && (tasks[i].minute <10)){
            date = tasks[i].month+" "+(tasks[i].day)+", "+(tasks[i].year)+" "+(tasks[i].hour)+":"+"0"+(tasks[i].minute);
        }
        else if (tasks[i].minute===0){
            date = tasks[i].month+" "+(tasks[i].day)+", "+(tasks[i].year)+" "+(tasks[i].hour)+":"+"00";
        }
        else{
            date = tasks[i].month+" "+(tasks[i].day)+", "+(tasks[i].year)+" "+(tasks[i].hour)+":"+(tasks[i].minute);
        }
        createButton(tasks[i].eventA, getColor(tasks[i].status), tasks[i].index1, date)
    }


}
function saveState() {
    localStorage.setItem("allTasks", JSON.stringify(tasks));
}

function deleteTask(index) {
    if (index === 0)
        tasks.shift();
    else
    tasks.splice(index, index);
    saveState();
    $(".button").remove();
    displayButtons();
    $("#DeleteMode").click(function () {
        if (deleting)
            deleting = false;
        else
            deleting = true;
    })
    $(".button").click(function () {
        if (deleting) {
            deleteTask(parseInt($(".button").attr("index1")))
        }
        else {
            console.log(parseInt($(".button").attr("index1")));
            console.log((tasks[1].index1))
            changeStatus($(".button").attr("index1"))
        }
        //$("taskClicked").text(tasks[$("#taskClicked").index].eventA);
    })
    sort();
}

var changeStatus = function(index)
{
    if (tasks[index].status === true)
        tasks[index].status = false;
    else
    tasks[index].status = true
    saveState();
    $(".button").remove();
    displayButtons();
    $(".button").click(function () {
        if (deleting) {
            deleteTask(parseInt($(".button").attr("index1")))
        }
        else {
            console.log(parseInt($(".button").attr("index1")));
            console.log((tasks[1].index1))
            changeStatus($(".button").attr("index1"))
        }
        //$("taskClicked").text(tasks[$("#taskClicked").index].eventA);
    })
    sort();
}
var getColor = function(status)
{
    if (status)
        return 'whitesmoke';
    return 'blueviolet'
}

var sort = function () {
    for(i = 0; i < tasks.length; i++)
    {
        tasks[i].index1 = i;
    }
}
