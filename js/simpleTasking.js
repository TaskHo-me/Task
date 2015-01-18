var tasks = [];
var totalminutes1 = 0;
var totalminutes2 = 0;
$(document).ready(function () {
    if (typeof (storage) !== "undefined") {
        function loadState() {
            tasks = JSON.parse(localStorage.getItem("allTasks"));
            if (!tasks)
                return;
        }
        function saveState() {
            localStorage.setItem("allTasks", JSON.stringify(tasks));
        }
        function deleteTask(index) {
            tasks.splice(index, index);
        }
    }

    if(JSON.parse(localStorage.getItem("allTasks")) !== null)
    {
        loadState();
    }

    $("TaskHome").click(function () {


    });

    $("#addButton").click(function () {
        var eventA = document.getElementById("event").value;
        var month = document.getElementById("month").value;
        var day = parseInt(document.getElementById("day").value);
        var year = parseInt(document.getElementById("year").value);
        var hour = parseInt(document.getElementById("hour").value);
        var minute = parseInt(document.getElementById("minute").value);
        var AmPm = document.getElementById("y").value;
        var description = document.getElementById("notes").value;
        var monthID = toMonthID(month);
        
        var task1 = new task(eventA, month, monthID, day, year, hour, minute, AmPm, description, tasks.length)
        
        tasks[tasks.length] = task1
        var temp,temp2;
        totalminutes1 = task1.minute + task1.hour*60 + task1.day*1440 + task1.monthID*44640 + task1.year*535680
        if(task1.AmPm === "PM") {
        totalminutes1 += 720
        }

        if (tasks.length > 1)
        {
            for(i=0; i<tasks.length; i++)
            {
               totalminutes2 = tasks[i].minute + tasks[i].hour*60 + tasks[i].day*1440 + tasks[i].monthID*44640 + tasks[i].year*535680;
                if(tasks[i].AmPm === "PM") 
                {
                     totalminutes2 += 720
                }
                if (totalminutes1 < totalminutes2) 
                {
                    task1.index1 = i
                    temp2 = tasks[i]
                    temp = task1
                    for(j = i; j<tasks.length-1;j++)
                    {
                        task[j] = temp
                        temp = tasks[j+1]
                        tasks[j+1] = temp2
                        tasks[j+1].index1 = j
                        temp2 = temp
                    }
                    tasks[i]=task1;
                    break;
                }
            }
        }
        for(i=0; i<tasks.length; i++)
        {
            tasks[i].index1 = i;

        }
        displayName(task1);
        displayDate(task1);
        saveState();

    });

});

var toMonthID = function (month) {
    switch (month){
        case "mm":
            return "NaN";
        case "January":
            return 1;
        case "February":
            return 2;
        case "March":
            return 3;
        case "April":
            return 4;
        case "May":
            return 5;
        case "June":
            return 6;
        case "July":
            return 7;
        case "August":
            return 8;
        case "September":
            return 9;
        case "October":
            return 10;
        case "November":
            return 11;
        case "December":
            return 12;
    }
}

var addTag = function (task, tag) {
    task.tags[task.tags.length] = tag;
    if (mainOrganizer.tags.index1Of(tag) === -1)
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

function task(eventA, month, monthID, day, year, hour, minute, AmPm, description, index1)
{
    this.eventA = eventA;
    this.status = false;
    //this.tags = [];
    this.month = month;
    this.monthID = monthID;
    this.day = day;
    this.year = year;
    this.hour = hour;
    this.minute = minute;
    this.AmPm = AmPm;
    this.description = description;
    this.index1 = index1;

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
    console.log(task.eventA);
}

var displayDate = function(task)
{
    console.log(task.month);
    console.log(task.day);
    console.log(task.year);
}
var displayStatus = function (task)
{
    console.log(task.status);

}


var deleteTask = function(task)
{
    mainOrganizer.tasks.splice(task.index1, task.index1);
}
