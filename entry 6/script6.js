const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const imageLoader = document.getElementById('imageLoader');
const stickers = document.querySelectorAll('.sticker');
const addTextBtn = document.getElementById('addTextBtn');
const textInput = document.getElementById('textInput');
const workspaceText = document.querySelector('.workspace-text'); // Add this line


let isDrawing = false;

imageLoader.addEventListener('change', handleImage, false);

function handleImage(e) {
  const reader = new FileReader();

  reader.onload = function(event) {
    const img = new Image();
    img.onload = function() {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
    }
    img.src = event.target.result;
  }
  reader.readAsDataURL(e.target.files[0]);
  workspaceText.style.display = 'block';
}

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', endDrawing);

function startDrawing(e) {
  isDrawing = true;
  draw(e);
}

function draw(e) {
  if (!isDrawing) return;

  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#000';

  ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

function endDrawing() {
  isDrawing = false;
}

stickers.forEach(sticker => {
  sticker.addEventListener('click', function() {
    const img = new Image();
    img.onload = function() {
      ctx.drawImage(img, 50, 50, 100, 100); // Change position and size as needed
    }
    img.src = sticker.src;
  });
});

addTextBtn.addEventListener('click', addText);

function addText() {
  const text = textInput.value;
  if (text.trim() !== '') {
    ctx.font = '30px Arial';
    ctx.fillStyle = '#000';
    ctx.fillText(text, 50, canvas.height - 50); // Adjust position as needed
    textInput.value = ''; // Clear the input field after adding text
  }
}

const clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click', clearCanvas);

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the entire canvas
}
