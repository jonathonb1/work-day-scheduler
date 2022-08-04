$(document).ready(function () {
    function getCurrentDay() {

        // current day format
        const currentDay = moment().format("dddd, MMMM Do");
        // set text elemnt of current day
        $("#currentDay").text(currentDay);
    }

    getCurrentDay();

})


