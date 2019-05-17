/**
 * PLEASE CAREFULLY READ THE README, THE MANUAL, AND ALL OF THE ANNOTATIONS IN
 * THIS DOCUMENT TO UNDERSTAND HOW TO CHANGE THE TEXT, IMAGES, AND PROMOTION
 * SKU TO BE USED IN THE CHECKOUT AD ON BIGCOMMERCE. NOT FOLLOWING THEM WILL
 * RESULT IN UNDESIRED EFFECTS.
 * 
 * YOU HAVE BEEN WARNED . . .
 */

//-----------------------------------------------------------------------------
// v v v v v v v v v v v (DO NOT EDIT BELOW THIS LINE) v v v v v v v v v v v v
//-----------------------------------------------------------------------------
function loadtext() {
    var modal = document.getElementById("ca-popup-1")
    var title = modal.getElementsByTagName("h1")[0]
    var subtitle = modal.getElementsByTagName("h2")[0]
    var text = modal.getElementsByTagName("p")[0]
    var pictures = modal.getElementsByTagName("img")
    var sub = document.getElementsByClassName("ca-subscribe")[0]
    var cover = pictures[0]
    var button = pictures[1]
    var logo = pictures[2]
//-----------------------------------------------------------------------------
// ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ (DO NOT EDIT ABOVE THIS LINE) ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^
//-----------------------------------------------------------------------------

    /**
     * In this section you may ONLY EDIT THE DATA IN QUOTATION MARKS. DO NOT
     * REMOVE FIELDS, RENAME THEM, OR LEAVE THEM BLANK. Each field is
     * annotated, indicating what it corresponds to on the ad displayed at
     * checkout. Please read EVERY ANNOTATION.
     */

    /**
     * These first three fields contain the text to be used in the ad. You may
     * use standard HTML tags within the quotes to style the text
     * (https://www.w3schools.com/html/html_formatting.asp). For example, to
     * make some text bold:
     * 
     * "We're selling <b>GOOD STUFF</b>!"
     */

    // This is the header text displayed at the top of the ad
    title.innerHTML = "IT'S OUR WAY OF SAYING THANKS!"

    // This is text displayed under the title of the ad
    subtitle.innerHTML = "Cool savings on our magazine plus Digital Edition <b>FREE!</b>*"

    // This is the fine print displayed at the bottom of the ad
    text.innerHTML = "<i>*A one-year subscription will be added to your cart and you will be billed separately for the discounted price of $29.95. Offer only valid to those shipping within the United States. One offer per household.<i>"

    /**
     * These next three fields are the pathway to the images that are displayed
     * on the ad. Guidelines for the size of each image can be found in the
     * manual. The pathway should ALWAYS have the structure and naming
     * conventions below:
     * 
     * //s-storehash/product_images/uploaded_images/name.png
     */

    // This is the roughly half-width image displayed on one side of the ad
    cover.src = "images/cover.png"

    // This is the image for the subscribe button
    button.src = "images/button.png"

    // This is the image for the logo displayed below the subscribe button
    logo.src = "images/logo.png"

    // This is the SKU that will be added to the customers cart when they click
    // the subscribe button
    var sku = "MUS12CK"

//-----------------------------------------------------------------------------
// v v v v v v v v v v v (DO NOT EDIT BELOW THIS LINE) v v v v v v v v v v v v
//-----------------------------------------------------------------------------
    sub.onclick = function () {
        modal.style.display = "none";
        // location.href = `/cart.php?action=add&sku=${sku}`
    }
}
//-----------------------------------------------------------------------------
// ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ (DO NOT EDIT ABOVE THIS LINE) ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^
//-----------------------------------------------------------------------------
