$(document).ready(function () {

    getCurrentDay();

    pastPresentFuture();





    $(".saveBtn").on("click", function () {

        // get timeID from description
        const timeId = $(this).siblings(".description").attr("data-time");
        // get userInput text
        const userInput = $(this).siblings(".description").val();
        // set to local storage
        localStorage.setItem(timeId, userInput);

    })


    // timeblock check w/ colors and loop
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


