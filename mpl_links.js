"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 1

   Author: Patrick M. Capuano
   Date:   9.18.19
   
   Filename: mpl_links.js

*/

// When the window loads, this code tells it to run an anonymous function, doing the following commands.
window.addEventListener("load", function () {

    // A local variable of "allSelect" is established and is set to the select elements within the govLinks forms.
    var allSelect = document.forms.govLinks.getElementsByTagName("select");

    // A for loop is created that runs through the "allSelect" local variable collection, doing the following commands. 
    for (var i = 0; i < allSelect.length; i++) {

        // Checking through every index of the "allSelect" collection, there is an event handler initiated through the "change" event that runs an anonymous function that uses the parameter "e" to...
        allSelect[i].addEventListener("change", function (e) {

            // Set the location through the "href" property to the event object's value that triggered the event listener in the first place.
            location.href = e.target.value;

        })

    };

});