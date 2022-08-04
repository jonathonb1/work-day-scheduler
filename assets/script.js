$(document).ready(function () {

    getCurrentDay();

    pastPresentFuture();





    function pastPresentFuture() {
        // get current hour
        const currentHour = moment().hours();

        // target hour description
        const descriptions = $(".description");

        // loop
        $(descriptions).each(function (index, element) {
            // current time stored in description block
            const currentBlock = parseInt($(element).attr("data-time"));

            // if statement check for time
            if (currentBlock < currentHour) {
                $(element).addClass("past");
            } else if (currentBlock === currentHour) {
                $(element).addClass("present");
            } else {
                $(element).addClass("future");
            }
        })



    }



    function getCurrentDay() {

        // current day format
        const currentDay = moment().format("dddd, MMMM Do");
        // set text elemnt of current day
        $("#currentDay").text(currentDay);
    }



})


