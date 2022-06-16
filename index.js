let drums = document.querySelectorAll(".drum").length;

for (let i = 0; i < drums; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let insidebutton = this.innerHTML;
        makesound(insidebutton);
        buttonanimation(insidebutton);
    });

}

document.addEventListener("keydown", function (event) {
    buttonanimation(event.key);
    makesound(event.key);
})

function makesound(key) {
    switch (key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let tom5 = new Audio("sounds/snare.mp3");
            tom5.play();
            break;
        case "k":
            let tom6 = new Audio("sounds/crash.mp3");
            tom6.play();
            break;
        case "l":
            let tom7 = new Audio("sounds/kick-bass.mp3");
            tom7.play();
            break;

        default: console.log("No sound");
            break;
    }
}

function buttonanimation(currentkey) {
    var activebutton = document.querySelector("." + currentkey);
    activebutton.classList.add("pressed");
    setTimeout(() => {
        activebutton.classList.remove("pressed");
    }, 100);
}