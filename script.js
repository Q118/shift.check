console.log("hi");

/*
create function to track of the id of the last checked box and 
when when another checkbox is checked they use the shiftKey event 
attribute to see if shift was held while clicking the checkbox. 
If so they set the checked property of each checkbox in between the two to true.
To determine when a box is checked they probably use an onclick event on the checkboxes */

// grab all of the checkboxes to listeh to whehn they get checked
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));


function handleCheck(event) {
    
    
    //reference to the input that was checked last
    lastChecked = this;
}