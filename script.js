var currentIndex = 1;
var clicked = false;

var images = [
    '<img id="first-image-alpha" src="./images/44788279211_2e231bd959_k.png" loading="lazy" decoding="async"/>\n'+
    '<img id="gift" src="./images/IMG_20230408_150250529.png" loading="lazy" decoding="async" onclick="found()"/>\n'+
    '<img id="first-image" src="./images/44788279211_2e231bd959_k.jpg" loading="lazy" decoding="async"/>\n',
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

    console.log(currentIndex);

    document.getElementsByClassName("view-container")[0].innerHTML = images[currentIndex];

    if (currentIndex == 0) {
        //ToDo: Scroll to position
        document.getElementById("scroll").scrollLeft = 1100;
    }

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

    if (currentIndex == 0) {
        //ToDo: Scroll to position
        document.getElementById("scroll").scrollLeft = 1100;
    }

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