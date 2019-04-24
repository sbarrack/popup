/**
 * This is called by script.js "onload" to replace the text and images for
 * the ad. If this is not present or a field is commented, the demo text
 * and images will be shown. Only edit fields marked for editing.
 */
function loadtext() {
    var modal = document.getElementById("ca-popup-1");
    var title = modal.getElementsByTagName("h1")[0];
    var subtitle = modal.getElementsByTagName("h2")[0];
    var text = modal.getElementsByTagName("p")[0];
    var pictures = modal.getElementsByTagName("img");
    var cover = pictures[0];
    var button = pictures[1];
    var logo = pictures[2];

    /**
     * EDIT
     * These are the text for each part of the ad. You may also use HTML to style the text.
     * DO NOT insert more elements (such as divs) into the text here. If you wish to remove 
     * one of these fields, be sure to use "display: none;" in the appropriate media query 
     * inside custom.css.
     */
    title.innerHTML = "IT'S OUR WAY OF SAYING THANKS!";
    subtitle.innerHTML = "Cool savings on our magazine plus Digital Edition <b>FREE!</b>*";
    text.innerHTML = "*A one-year subscription will be added to your cart and you will be billed separately for the discounted price of $29.95. Offer only valid to those shipping within the United States. One offer per household.";
    
    /**
     * EDIT
     * These are the images as they appear in the ad. They should be stored in the Image 
     * Manager on BigCommerce, the path of which is below:
     * 
     * //store-abc123.mybigcommerce.com/product_images/uploaded_images/example.png
     */
    cover.src = "images/cover.png";
    button.src = "images/button.png";
    logo.src = "images/logo.png";
}
