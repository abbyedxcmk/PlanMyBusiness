$(document).ready(function () {
    console.log(dayjs().format('DD/MM/YYYY')) // '25/01/2019'
    $('#currentDay').text(dayjs().format('dddd, MMMM D'));


});


