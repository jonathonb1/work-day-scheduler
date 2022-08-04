$(document).ready(function () {

    getCurrentDay();

    pastPresentFuture();

    function pastPresentFuture() {
        // get current hour
        const currentHour = moment().hours();

        // target hour description
        const descriptions = $(".description");

        // current time stored in description block
        const currentBlock = $(descriptions[0]).attr("data-time");

        // if statement check for time
        if (currentBlock < currentHour) {
            $(descriptions[0]).addClass("past");
        } else if (currentBlock == currentHour) {
            $(descriptions[0]).addClass("present");
        }

    }



    function getCurrentDay() {

        // current day format
        const currentDay = moment().format("dddd, MMMM Do");
        // set text elemnt of current day
        $("#currentDay").text(currentDay);
    }



})


