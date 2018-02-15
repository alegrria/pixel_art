// Select size input
const table = document.getElementById("pixelCanvas");
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWeight'); 


// Built the table
function makeGrid() {
	table.innerHTML = ""

	for (let i = 0; i < height.value; i++) {
		const row = table.insertRow();
		for (let j = 0; j < width.value; j++) {
			let cell = row.insertCell();
		}
	}
}

// Select color input
const color = document.getElementById('colorPicker');

// Change cell color
$(document).on("click" , "td" , function(){
  $(this).css("background-color" , color.value);
});

// Draw continuously
let mouseClick = false;
$(document).on("mousedown", "td", function() {
  mouseClick = true;
  $(this).css("background-color", color.value);
});
$(document).on("mouseenter", "td", function() {
  if (mouseClick) {
    $(this).css("background-color", color.value);
  }
});
$('body').on("mouseup", function() {
  mouseClick = false;
});