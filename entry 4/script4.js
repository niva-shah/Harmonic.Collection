// Get access to the user's camera
navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
        var video = document.getElementById('camera-screen');
        video.srcObject = stream;
    })
    .catch(function (error) {
        console.error('Error accessing the camera: ', error);
    });

// Capture button click event
var captureButton = document.getElementById('capture-button');
captureButton.addEventListener('click', function () {
    var video = document.getElementById('camera-screen');
    var canvas = document.getElementById('captured-image');
    var context = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Capture image and apply a black and white filter
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < imageData.data.length; i += 4) {
        var avg = (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3;
        imageData.data[i] = avg;
        imageData.data[i + 1] = avg;
        imageData.data[i + 2] = avg;
    }
    context.putImageData(imageData, 0, 0);

    // Show the captured image
    canvas.style.display = 'block';
});