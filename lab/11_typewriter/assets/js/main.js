var container = document.getElementById("container");

var letters = {
    KeyA: {
        url: "./assets/img/monster1.png",
        left: "59%",
        top: "32%",
        width: "4%"
    },
    KeyB: {
        url: "./assets/img/monster2.png",
        left: "42%",
        top: "50%",
        width: "4%"
    },
    KeyC: {
        url: "./assets/img/monster3.png",
        left: "48%",
        top: "34%",
        width: "7%"
    },
    KeyD: {
        url: "./assets/img/monster4.png",
        left: "56%",
        top: "56%",
        width: "5%"
    },
    KeyE: {
        url: "./assets/img/monster5.png",
        left: "55.5%",
        top: "40%",
        width: "4.5%"
    },
    KeyF: {
        url: "./assets/img/monster6.png",
        left: "42%",
        top: "25%",
        width: "7%"
    },
    KeyG: {
        url: "./assets/img/monster7.png",
        left: "20%",
        top: "60%",
        width: "20%"
    },
    KeyH: {
        url: "./assets/img/monster8.png",
        left: "56%",
        top: "70%",
        width: "34%"
    },
    KeyI: {
        url: "./assets/img/monster9.png",
        left: "66.5%",
        top: "39%",
        width: "6%"
    },
    KeyJ: {
        url: "./assets/img/monster10.png",
        left: "35.5%",
        top: "39%",
        width: "6%"
    },
    KeyK: {
        url: "./assets/img/monster11.png",
        left: "50%",
        top: "10%",
        width: "10%"
    },
    KeyL: {
        url: "./assets/img/monster12.png",
        left: "61%",
        top: "13%",
        width: "13%"
    },
    KeyM: {
        url: "./assets/img/monster13.png",
        left: "50%",
        top: "22%",
        width: "12%"
    },
    KeyN: {
        url: "./assets/img/monster14.png",
        left: "50%",
        top: "60%",
        width: "7%"
    },
    KeyO: {
        url: "./assets/img/monster15.png",
        left: "37%",
        top: "60%",
        width: "9%"
    },
    KeyP: {
        url: "./assets/img/monster16.png",
        left: "35%",
        top: "80%",
        width: "12%"
    },
    KeyQ: {
        url: "./assets/img/monster17.png",
        left: "59%",
        top: "67%",
        width: "4%"
    },
    KeyR: {
        url: "./assets/img/monster18.png",
        left: "44%",
        top: "57%",
        width: "5.2%"
    },
    KeyS: {
        url: "./assets/img/monster19.png",
        left: "40%",
        top: "39%",
        width: "7%"
    },
    KeyT: {
        url: "./assets/img/monster20.png",
        left: "54%",
        top: "31.5%",
        width: "4%"
    },
    KeyU: {
        url: "./assets/img/monster21.png",
        left: "48%",
        top: "73%",
        width: "3.3%"
    },
    KeyV: {
        url: "./assets/img/monster22.png",
        left: "60%",
        top: "46%",
        width: "6%"
    },
    KeyW: {
        url: "./assets/img/monster23.png",
        left: "66.1%",
        top: "29%",
        width: "3.3%"
    },
    KeyX: {
        url: "./assets/img/monster24.png",
        left: "27%",
        top: "40%",
        width: "9%"
    },
    KeyY: {
        url: "./assets/img/monster25.png",
        left: "46%",
        top: "84%",
        width: "13%"
    },
    KeyZ: {
        url: "./assets/img/monster26.png",
        left: "30%",
        top: "58%",
        width: "5%"
    }
};

document.addEventListener("keydown", function(event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        var img = document.createElement("img");
        img.src = letters[event.code].url;
        img.style.width = letters[event.code].width;
        img.style.left = letters[event.code].left;
        img.style.top = letters[event.code].top;
        container.appendChild(img);
    } else if (event.keyCode == 8) {
        container.removeChild(container.lastChild);
    }
});

