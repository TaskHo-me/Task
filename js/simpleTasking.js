$(document).ready(function () {

    $("#addButton").click(function () {
        console.log("hi");
    });

    /*$('#signOut').hover(function () {
        $(this).fadeTo(200,.2);
    }, function () {
        $(this).fadeTo(200,1);
    });

    $("#addTask").blur(function () {
        alert("Handler for .blur() called.");
    });*/
});
var mainOrganizer = {
    tasks: [],
    categories: [],
    tags: []
}


var addTag = function (task, tag) {
    task.tags[task.tags.length] = tag;
    if (mainOrganizer.tags.indexOf(tag) === -1)
        mainOrganizer.addCategory(tag)
}

var addCategory = function (name)
{
    mainOrganizer.categories[categories.length] = name;

}

var changeStatus = function ()
{
    if (task.status === true)
        task.status = false;
    task.status = true;

};

var editDescription = function(description)
{
    task.description = description;
}

function task(name,date,index)
{
    this.name = name;
    this.status = false;
    this.tags = [];
    this.date = date;
    this.index = index;
    this.description = "";

}

var displayTags = function (task)
{
    for(var i = 0; i<task.tags.length; i++)
    {
        console.log(task.tags[i]);
    }
}

var displayName = function (task)
{
    console.log(task.name);

}

var displayStatus = function (task)
{
    console.log(task.status);

}


var deleteTask = function(task)
{
    mainOrganizer.tasks.splice(task.index, task.index);
}
