onload = function () {
    var button = document.getElementById("button");
    var button2 = document.getElementById("button2");

    var modal = document.getElementById("ca-popup-1");
    var close = document.getElementsByClassName("ca-exout")[0];
    var sub = document.getElementsByClassName("ca-subscribe")[0];

    button.onclick = function () {
        if (!localStorage.getItem("hide")) {
            // localStorage.setItem("hide", "true");
            modal.style.display = "block";
        }
    }

    button2.onclick = function () {
        localStorage.removeItem("hide");
    }

    function hide() {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target === modal) {
            hide();
        }
    }

    close.onclick = function () {
        hide();
    }

    sub.onclick = function () {
        hide();
    }
};
