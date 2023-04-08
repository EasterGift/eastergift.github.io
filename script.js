var currentIndex = 1;
var clicked = false;
var loaded = 0;

var images = [
    '<img id="first-image-alpha" class="lazy" src="./images/44788279211_2e231bd959_k.png" loading="lazy" decoding="async"/>\n'+
    '<img id="gift" class="lazy" src="./images/IMG_20230408_150250529.png" loading="lazy" decoding="async" onclick="found()"/>\n'+
    '<img id="first-image" class="lazy" src="./images/44788279211_2e231bd959_k.jpg" loading="lazy" decoding="async"/>\n',
    '<img id="second-image" src="./images/16529177121_fa5daa3403_b.jpg"/>',
    '<img id="third-image" src="./images/8401710770_7e031f9658_k.jpg"/>'
]

function loadedCallback() {
    if (loaded < 2) {
        loaded++;
    } else {
        setTimeout(() => {
            document.getElementById("loading").classList.add("dis-none");
        }, 200);
        loaded = 0;
        clicked = false;
    }
}

function nextGarden() {
    if (clicked) {
        return;
    } else {
        clicked = true;
    }

    document.getElementById("loading").classList.remove("dis-none");

    if (currentIndex < 2) {
        currentIndex++;
    } else {
        currentIndex=0;
    }

    document.getElementsByClassName("view-container")[0].innerHTML = images[currentIndex];

    if (currentIndex == 0) {
        setTimeout(() => {
            let lazyElements = document.getElementsByClassName("lazy");
            for (let i = 0; i < lazyElements.length; i++) {
                lazyElements[i].onLoad = loadedCallback();
            }
        }, 100);

        document.getElementById("scroll").scrollTo(1100,0);
    } else {
        setTimeout(() => {
            document.getElementById("loading").classList.add("dis-none");

            clicked = false;
        }, 1000);
    }
}

function previousGarden() {
    if (clicked) {
        return;
    } else {
        clicked = true;
    }

    document.getElementById("loading").classList.remove("dis-none");

    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex=2;
    }

    document.getElementsByClassName("view-container")[0].innerHTML = images[currentIndex];

    if (currentIndex == 0) {
        setTimeout(() => {
            let lazyElements = document.getElementsByClassName("lazy");
            for (let i = 0; i < lazyElements.length; i++) {
                lazyElements[i].onLoad = loadedCallback();
            }
        }, 100);

        document.getElementById("scroll").scrollTo(1100,0);
    } else {
        setTimeout(() => {
            document.getElementById("loading").classList.add("dis-none");

            clicked = false;
        }, 1000);
    }
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