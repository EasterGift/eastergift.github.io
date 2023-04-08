var currentIndex = 1;
var clicked = false;

var images = [
    '<img id="first-image-alpha" src="./images/44788279211_2e231bd959_k.png"/>\n'+
    '<img id="gift" src="./images/IMG_20230408_150250529.png" onclick="found()"/>\n'+
    '<img id="first-image" src="./images/44788279211_2e231bd959_k.jpg"/>\n',
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
    }

    console.log(currentIndex);

    document.getElementsByClassName("view-container")[0].innerHTML = images[currentIndex];

    if (currentIndex == 0) {
        //ToDo: Scroll to position
        document.getElementById("scroll").scrollLeft = 200;
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
    }

    document.getElementsByClassName("view-container")[0].innerHTML = images[currentIndex];

    if (currentIndex == 0) {
        //ToDo: Scroll to position
        document.getElementById("scroll").scrollLeft = 200;
    }
    
    clicked = false;
}

function found() {
    console.log("Found!!!");
}