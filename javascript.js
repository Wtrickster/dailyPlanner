//set Vars
var timeBlocks = $(".container");
var timeDisplay = moment().format('MMMM Do YYYY');
var timeDiv = $("#currentDay");
var saveButton = document.querySelectorAll("button");
var checkTime = setInterval(hourUpdater, 15000);
var timeList = [
    "9 AM",
    "10 AM",
    "11 AM",
    "12 AM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM"
];
var TimeId = [
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17"
];

//show current date
timeDiv.append(timeDisplay);

//create schedule blocks
for (var i = 0; i < timeList.length; i++) {
    var newRow = $("<div class='row time-block'>").attr("id", TimeId[i]);
    var newhour = $("<div class='hour col-1'>")
    var newDiv = $("<textarea class='col-10'>");
    var newBtn = $("<button type='button' class='saveBtn col-1 far fa-save'>");

    //add attr
    timeBlocks.append(newRow);
    newhour.text(timeList[i]);
    newDiv.text();
    newBtn.text();
    newRow.append(newhour).append(newDiv).append(newBtn);
};

//call function
localStorageFunction();
hourUpdater();

//get current hour
function hourUpdater() {
    var currentHour = moment().hours();
    $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split(" ")[0]);

        //set textbox color
        if (blockHour < currentHour) {
            $(this).addClass("past");
        } else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        };
    });
};

//localStorage
function localStorageFunction() {
    $("textarea")[0].value = localStorage.getItem("textarea1");
    $("textarea")[1].value = localStorage.getItem("textarea2");
    $("textarea")[2].value = localStorage.getItem("textarea3");
    $("textarea")[3].value = localStorage.getItem("textarea4");
    $("textarea")[4].value = localStorage.getItem("textarea5");
    $("textarea")[5].value = localStorage.getItem("textarea6");
    $("textarea")[6].value = localStorage.getItem("textarea7");
    $("textarea")[7].value = localStorage.getItem("textarea8");
    $("textarea")[8].value = localStorage.getItem("textarea9");
};

//on click
$("button").on("click", function(event) {
    event.preventDefault();
    var textArea1 = $("textarea")[0].value;
    var textArea2 = $("textarea")[1].value;
    var textArea3 = $("textarea")[2].value;
    var textArea4 = $("textarea")[3].value;
    var textArea5 = $("textarea")[4].value;
    var textArea6 = $("textarea")[5].value;
    var textArea7 = $("textarea")[6].value;
    var textArea8 = $("textarea")[7].value;
    var textArea9 = $("textarea")[8].value;

    //set localStorage
    localStorage.setItem("textarea1", textArea1);
    localStorage.setItem("textarea2", textArea2);
    localStorage.setItem("textarea3", textArea3);
    localStorage.setItem("textarea4", textArea4);
    localStorage.setItem("textarea5", textArea5);
    localStorage.setItem("textarea6", textArea6);
    localStorage.setItem("textarea7", textArea7);
    localStorage.setItem("textarea8", textArea8);
    localStorage.setItem("textarea9", textArea9);
});