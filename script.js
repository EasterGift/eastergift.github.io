var currentIndex = 1;
var clicked = false;
var loaded = 0;

var images = [
    '<img id="first-image-alpha" class="lazy returned" src="./images/44788279211_2e231bd959_k.png" loading="lazy" decoding="async"/>\n'+
    '<img id="gift" class="lazy returned" src="./images/IMG_20230408_150250529.png" loading="lazy" decoding="async" onclick="found()"/>\n'+
    '<img id="first-image" class="lazy returned" src="./images/44788279211_2e231bd959_k.jpg" loading="lazy" decoding="async"/>\n',
    '<img id="second-image" src="./images/16529177121_fa5daa3403_b.jpg"/>',
    '<img id="third-image" src="./images/8401710770_7e031f9658_k.jpg"/>'
]

function nextGarden() {
    if (clicked) {
        return;
    } else {
        clicked = true;
    }

    if (currentIndex < 2) {
        currentIndex++;
    } else {
        currentIndex=0;
    }

    document.getElementsByClassName("view-container")[0].innerHTML = images[currentIndex];

    clicked = false;
}

function previousGarden() {
    if (clicked) {
        return;
    } else {
        clicked = true;
    }

    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex=2;
    }

    document.getElementsByClassName("view-container")[0].innerHTML = images[currentIndex];
    
    clicked = false;
}

function found() {
    $('#foundModal').modal('show');
}

function toIntro1() {
    $('#intro1').modal('show');
}

function toIntro2() {
    $('#intro2').modal('show');
}

function toIntro3() {
    $('#intro3').modal('show');
}

function sendMessage() {
    window.open("sms://&body=encodeURIComponent('Ich habe es geschafft. :)'),'_blank'");
}