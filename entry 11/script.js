// Get image, input and slider elements 
const img = document.getElementById("myImage");
const input = document.getElementById("imageInput");  
const slider = document.getElementById("brightnessSlider");

// Image upload
input.addEventListener("change", uploadImage); 

function uploadImage(e) {  
  let reader = new FileReader();    
  reader.onload = function() {
    img.src = reader.result;
  }
  reader.readAsDataURL(input.files[0]);   
}
function restoreOriginal() {
    img.style.removeProperty('filter'); 
  }

// Update brightness slider
slider.onchange = function(e) {
  let brightness = e.target.value;   
  img.style.filter = `brightness(${brightness}%)`;
}  

// Black and white effect
function makeBlackAndWhite() {

    // Remove any existing filters
    img.style.filter = ""; 
    
    // Add black and white filter
    img.style.filter = "grayscale(100%) contrast(100%)";
  
  }

// More effects...

// Download image 
function downloadImage() {
  let imageURL = img.src;  
  let fileName = getFileName(imageURL);  
  saveAs(imageURL, fileName);  
}

// Helper functions
function getFileName(url) {
  return url.substring(url.lastIndexOf('/') + 1);
}

function saveAs(uri, filename) {

  let link = document.createElement('a');

  if (typeof link.download === 'string') {
    link.href = uri;
    link.download = filename;   

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    window.open(uri);
  }
}
let colorBalance = false;
let redRange = document.getElementById("redRange");
let greenRange = document.getElementById("greenRange");
let blueRange = document.getElementById("blueRange"); 

let curveSlider = document.getElementById("curve");

// Toggle color balance
function toggleColorBalance() {
  colorBalance = !colorBalance;
  updateFilter(); 
}
  
// Update filter on input change
redRange.oninput = 
greenRange.oninput =
blueRange.oninput =
curveSlider.oninput = updateFilter;

// Apply updated filter
function updateFilter() {
  
  let filter = "";
  
  if (colorBalance) {
    let r = redRange.value;
    let g = greenRange.value; 
    let b = blueRange.value;
    
    filter += `color-matrix(${colorMatrixValues(r, g, b)}) `;
  }  

  let c = curveSlider.value;
  filter += `contrast(${c}) `;  

  img.style.filter = filter;
}

// Generate matrix values
function colorMatrixValues(r, g, b) {
   // calculates values  
}