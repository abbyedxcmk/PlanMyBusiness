// setup the initial variables
let taskData = {};
const currentDay = dayjs().format('DD-MM-YY');

// check if the task manager data exist in the local storage
let savedData = localStorage.getItem('taskManager');
if (savedData) {
    savedData = JSON.parse(savedData);
    // check if the current day was already in the local storage
    if (savedData[currentDay]) {
        taskData = savedData[currentDay];
    } else {
        taskData = {};
    }
} else {
    savedData = {};
}

// Update current day on the page and refresh the table
$(document).ready(function () {
    $('#currentDay').text(dayjs().format('dddd, MMMM D'));
    refreshTable();
});

// refresh the table and update task input fields from local storage
function refreshTable() {
    const rows = $('.row');
    let currentHour = Number(dayjs().format('H'));
    rows.each(function (index, row) {
        let currentInput = row.children[1];
        if (Number(currentInput.id) < currentHour) {
            $(row.children[1]).addClass('past');
        } else if (Number(currentInput.id) === currentHour) {
            $(row.children[1]).addClass('present');
        } else {
            $(row.children[1]).addClass('future');
        }
        // Update input field if there is a task previously saved
        if (savedData[currentDay]) {
            if (savedData[currentDay][currentInput.id]) {
                $(row.children[1]).val(savedData[currentDay][currentInput.id]);
            }
        }
    });
}

// Add click event to the buttons and update task data
$('.saveBtn').click(function (e) {
    const clickedInput = $(this).prev();
    const id = clickedInput.attr('id');
    const value = clickedInput.val();

    // check if the task was changed and update task data in local storage
    if (value.trim()) {
        taskData[id] = value;
        savedData[currentDay] = taskData;
        localStorage.setItem('taskManager', JSON.stringify(savedData));
        refreshTable();
    } else {
        if (savedData[currentDay][id]) {
            delete taskData[id];
            savedData[currentDay] = taskData;
            localStorage.setItem('taskManager', JSON.stringify(savedData));
            refreshTable();
        }
    }
});