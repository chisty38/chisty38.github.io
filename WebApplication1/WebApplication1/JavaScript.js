var http = new XMLHttpRequest();
var nowTimer;
var nowIndex = 0;
var imgArr = [];
var interArr = [];


function loadPic() {

    http.open("GET", "TextFile.txt");
    http.send();
    http.addEventListener("readystatechange", processData);
}
function processData() {
    if ((http.readyState == 4) && (http.status == 200)) {
        
        var rttp = http.responseText;
        var rttpArray = rttp.split(/[,\n]/);
        for (var i = 0; i < rttpArray.length; i++) {
            if (i % 2 == 0) {
                imgArr.push(rttpArray[i]);
            } else {
                interArr.push(rttpArray[i]);
            }
        }
        console.log(imgArr);
        console.log(interArr);              
        imgMod();      
    }
}

function imgMod() {
    $("#img").attr("src", "images/" + imgArr[nowIndex])
             .stop()
             .css({ opacity: 0 })
             .animate({ opacity: 1 }, 400);

    nowTimer = setTimeout(function () {
        console.log("timeout")
    },
    interArr[nowIndex]);
    nowTimer = setTimeout(imageNext, interArr[nowIndex]);
}

function imagePrev() {
    window.clearTimeout(nowTimer)
    if (nowIndex == 0) {
        nowIndex = imgArr.length - 1;
    }
    else {
        nowIndex--;
    }
    imgMod();
}
function imageNext() {
    window.clearTimeout(nowTimer)
    if (nowIndex == imgArr.length - 1) {
        nowIndex = 0;
    }
    else {
        nowIndex++;
    }
    imgMod();
}





window.onload = loadPic;
