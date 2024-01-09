let taskData = {};
const currentDay = dayjs().format('DD-MM-YY');

// check if the task manager data exist in the local storage
let savedData = localStorage.getItem('taskManager');
if (savedData) {
    savedData = JSON.parse(savedData);
    if (savedData[currentDay]) {
        taskData = savedData[currentDay];
    } else {
        taskData = {};
    }
} else {
    savedData ={};
}

$(document).ready(function () {
    $('#currentDay').text(dayjs().format('dddd, MMMM D'));
    refreshTable();
});


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
        
    })
}

$('.saveBtn').click(function (e) {
    
    const clickedInput = $(this).prev();
    const id = clickedInput.attr('id');
    const value = clickedInput.val();
    if (value) {
        taskData[id] = value; 
        savedData[currentDay] = taskData;
        localStorage.setItem('taskManager', JSON.stringify(savedData));
    }      
})


