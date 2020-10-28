/** @format */

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

function handleCheck(event) {
	// check if they had the shift key down
	//and check that they are checking it. (not unchecking it)
	let inBetween = false;
	if (event.shiftKey && this.checked) {
		// loop over every single checkbox
		checkboxes.forEach((checkbox) => {
			console.log(checkbox);
			if (checkbox === this || checkbox === lastChecked) {
				inBetween = !inBetween;
				console.log("Starting to check them in between!");
			}
			if (inBetween) {
				checkbox.checked = true;
			}
		});
	}

	//reference to the input that was checked last
	lastChecked = this;
}

checkboxes.forEach((checkbox) =>
	checkbox.addEventListener("click", handleCheck)
);
