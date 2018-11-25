/*
 * Name: Mowgli Hovik
 * Date: September 30, 2018
 * Section: CSE 154 AB
 * This is the JS to implement the interaction and dynamic colors of my website.
 * It detects changes colors randomly depending on user interaction.
 */
(function() {

    "use strict";
    window.addEventListener("load", initialize);
    let timer = null;

    /**
     * Contains all of the eventListeners for interactivity.
     */
    function initialize() {

        //detects a click on the screen
        let screen = document.getElementById("screen");
        screen.addEventListener("click", backgroundColorTimer);

        //detects the center text being moused over
        let text = document.getElementById("text");
        text.addEventListener("mouseover", randColorText);
    }

    /**
     * Sets up the timer for changing the color of the screen.
     * Also clears the timer if it is already active.
     * Adds text whenever the timer is started.
     */
    function backgroundColorTimer() {
        console.log("CLICK!");
        let changedText = document.getElementById("text");

        if(timer === null) {
            timer = setInterval(randColorBackground, 1);
            changedText.appendChild(document.createTextNode("WOWOOWWOAH COLORS!"));
        } else {
            clearInterval(timer);
            timer = null;
        }
    }
    
    /**
     * Changes the color of the background to a random color.
     */
    function randColorBackground() {
        document.getElementById("screen").style.backgroundColor = getRandomColor(); 
    }

    /**
     * Changes the color of the center text to a random color.
     */
    function randColorText() {
        document.getElementById("text").style.color = getRandomColor();
    }

    /**
     * Generates a random color.
     * @returns A random color in Hex code.
     */
    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
})();