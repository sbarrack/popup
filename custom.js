function loadtext() {
    var modal = document.getElementById("ca-popup-1");
    var title = modal.getElementsByTagName("h1")[0];
    var subtitle = modal.getElementsByTagName("h2")[0];
    var text = modal.getElementsByTagName("p")[0];
    var pictures = modal.getElementsByTagName("img");
    var cover = pictures[0];
    var button = pictures[1];
    var logo = pictures[2];

    title.innerHTML = "IT'S OUR WAY OF SAYING THANKS!";
    subtitle.innerHTML = "Cool savings on our magazine plus Digital Edition <b>FREE!</b>*";
    text.innerHTML = "*A one-year subscription will be added to your cart and you will be billed separately for the discounted price of $29.95. Offer only valid to those shipping within the United States. One offer per household.";
    cover.src = "images/cover.png";
    button.src = "images/button.png";
    logo.src = "images/logo.png";
}
