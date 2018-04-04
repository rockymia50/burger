$(function () {
    $("#burgerForm").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger: $("[name=burger]").val().trim(),
            eat_Me: false
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    function eatBurger(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        //console.log(burger)

        var btn = event.currentTarget;
        var id = btn.getAttribute('data-id');

        // get burger id value
        var eatBurger = {
            eat_Me: true
        }

        // update the burger

        var newBurger = {
            burger: $("[name=burger]").val().trim()
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eatBurger
        }).then(
            function () {
                console.log("updated the burger");
                location.reload();
            }
        );

    };
    window.eatBurger = eatBurger;

})