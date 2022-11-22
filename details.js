Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90,
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function takeSnapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<br><br><img id="captured_image" src="'+data_uri+'"/>'
    });
}

function changeColor() {
    document.getElementById("back-button").style.color = "yellow";
}

function resetColor() {
    document.getElementById("back-button").style.color = "white";
}

function back() {
    window.location = "booktype.html";
}

function submit_request() {
   alert("Your request has been sent!");
}

function logout() {
    window.location = "index.html";
}