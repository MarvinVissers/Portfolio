
/**
 * File with all main JavaScript functions
 */

// Function to open and close navbar
function toggleMobileNavbar() {
    // Getting the navbar and overlay
    document.getElementById("mobile-navbar").classList.toggle("mobile__wrapper--active");
}

// Function to hide navbar on scrolldown and show on scroll up
var lastScrollTop = 0;

// Functie toevoegen op scroll
window.addEventListener("scroll", function(){ 
    // Getting the offset of the page with the header
    var st = window.pageYOffset || document.documentElement.scrollTop; 
    var header = document.getElementById("header");

    // Checking if user scrolls down or up
    if (st > lastScrollTop){
        // downscroll code
        header.classList.add("navbar--hide");
    } else {
        // upscroll code
        header.classList.remove("navbar--hide");
    }

    // For Mobile or negative scrolling
    lastScrollTop = st <= 0 ? 0 : st;

    // Adding boxshadow after the of the top
    if (st >= 75) {
        header.classList.add("navbar--shadow");
    } else {
        header.classList.remove("navbar--shadow");
    }
}, false);

// Function to open work panel on tab click
function openWorkPanel(panelNumber) {
    // Creating the variables
    var tab, panel, activePanel, activeItemSpan, activeOffsetY, activeItemSpanMobile, activeOffsetXMobile;

    // Getting the tab and the panel
    tab = document.getElementById("tab-" + panelNumber);
    panel = document.getElementById("workpanel" + panelNumber);   
    // Getting all the tabs and panels
    activePanel = document.getElementsByClassName("panel--active");
    // Getting the active-item span
    activeItemSpan = document.getElementById("item-active");
    activeItemSpanMobile = document.getElementById("item-active-mobile");

    // Removing all active classes
    for (let i = 0; i < activePanel.length; i++) {
        activePanel[i].classList.remove("panel--active");
    }

    // Adding the active class to the new active work panel
    panel.classList.add("panel--active");

    // Setting the active span next to the work item
    activeOffsetY = panelNumber * 4.2;
    activeOffsetXMobile = panelNumber * 24;

    activeItemSpan.style.transform = "translateY(" + activeOffsetY + "rem)";
    activeItemSpanMobile.style.transform = "translateX(" + activeOffsetXMobile + "rem)";
}
