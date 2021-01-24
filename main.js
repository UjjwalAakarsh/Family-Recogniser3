Webcam.set({
    width: 300,
    height: 300,
    image_format:"png",
    png_quality: 90,
});

Webcam.attach("#camera");

function capture(){
Webcam.snap(
    function(pic){
        document.getElementById("snapshot").innerHTML=`<img src=${pic} id="picture">`
    }
)
}
console.log(ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/-kXTs5E-Z/model.json",modelloaded)
function modelloaded(){
    console.log("The Model Has Benn Successfully Loaded")
}

function identify(){
    img=document.getElementById("picture")
    classifier.classify(img,getresults);
}

function getresults(error,results){
    if (error) {
        console.log(error);
    }

    else{
        console.log(results);
        document.getElementById("family_results").innerHTML=results[0].label;
        document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3)
    }
}