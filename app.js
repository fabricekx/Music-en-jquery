$(document).ready(function () {

    function makeSound(letterClickedOrPressed) {

        switch (letterClickedOrPressed) {

            case "w":
                var tom1 = new Audio("sounds/w.mp3");
                tom1.play();
                break;

            case "a":
                var tom1 = new Audio("sounds/a.mp3");
                tom1.play();
                break;

            case "s":
                var tom1 = new Audio("sounds/s.mp3");
                tom1.play();
                break;

            case "d":
                var tom1 = new Audio("sounds/d.mp3");
                tom1.play();
                break;

            case "j":
                var tom1 = new Audio("sounds/j.mp3");
                tom1.play();
                break;

            case "k":
                var tom1 = new Audio("sounds/k.mp3");
                tom1.play();
                break;

            case "l":
                var tom1 = new Audio("sounds/l.mp3");
                tom1.play();
                break;

        }

        buttonAnimation(letterClickedOrPressed);

    }

    function buttonAnimation(letterClickedOrPressed) {

        $("." + letterClickedOrPressed).addClass("pressed");

        setTimeout(function () {
            $("." + letterClickedOrPressed).removeClass("pressed");
        }, 200);

    }

    $(".drum").click(function () {

        let letterClicked = $(this).text();
        makeSound(letterClicked);

    });

    $(document).keypress(function (event) {

        let letteredPressed = event.key;
        makeSound(letteredPressed);

    });

});