$(document).ready(function () {
    $('#currentDay').text(dayjs().format('dddd, MMMM D'));
});


function refreshTable() {
    const rows = $('.row');
    let hour = dayjs().format('H');
    for (row of rows) {
        console.log(row);

    }
}