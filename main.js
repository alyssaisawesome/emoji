prediction1 = "";
prediction2 = "";

Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function takesnap() {

Webcam.snap(function (data_uri){

  document.getElementById("result").innerHTML = "<img id='capture_img' src='" + data_uri + "'>";

});

}

console.log("ml5 version:", ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/s9Oq96kt7/model.json',modelLoaded);


function modelLoaded() {

  console.log("model loaded");


}

function check() {

  img =  document.getElementById("capture_img");
  classifier.classify(img, gotResult);
  
  }
  
  
  
  function gotResult(error, results) {
  
  if (error) {
  console.error(error);
  }
}