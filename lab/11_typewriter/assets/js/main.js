var container = document.getElementById("container");

var letters = {
    KeyA: {
        url: "./assets/img/monster1.png",
        //width: 80%
    },
    KeyB: {
        url: "./assets/img/monster2.png",
        //width: 80%
    },
    KeyC: {
        url: "./assets/img/monster3.png",
        //width: 80%
    },
    KeyD: {
        url: "./assets/img/monster4.png",
        //width: 80%
    },
    KeyE: {
        url: "./assets/img/monster5.png",
        //width: 80%
    },
    KeyF: {
        url: "./assets/img/monster6.png",
        //width: 80%
    },
    KeyG: {
        url: "./assets/img/monster7.png",
        //width: 80%
    },
    KeyH: {
        url: "./assets/img/monster8.png",
        //width: 80%
    },
    KeyI: {
        url: "./assets/img/monster9.png",
        //width: 80%
    },
    KeyJ: {
        url: "./assets/img/monster10.png",
        //width: 80%
    },
    KeyK: {
        url: "./assets/img/monster11.png",
        //width: 80%
    },
    KeyL: {
        url: "./assets/img/monster12.png",
        //width: 80%
    },
    KeyM: {
        url: "./assets/img/monster13.png",
        //width: 80%
    },
    KeyN: {
        url: "./assets/img/monster14.png",
        //width: 80%
    },
    KeyO: {
        url: "./assets/img/monster15.png",
        //width: 80%
    },
    KeyP: {
        url: "./assets/img/monster16.png",
        //width: 80%
    },
    KeyQ: {
        url: "./assets/img/monster17.png",
        //width: 80%
    },
    KeyR: {
        url: "./assets/img/monster18.png",
        //width: 80%
    },
    KeyS: {
        url: "./assets/img/monster19.png",
       // width: 80%
    },
    KeyT: {
        url: "./assets/img/monster20.png",
        //width: 80%
    },
    KeyU: {
        url: "./assets/img/monster21.png",
        //width: 80%
    },
    KeyV: {
        url: "./assets/img/monster22.png",
        //width: 80%
    },
    KeyW: {
        url: "./assets/img/monster23.png",
        //width: 80%
    },
    KeyX: {
        url: "./assets/img/monster24.png",
        //width: 80%
    },
    KeyY: {
        url: "./assets/img/monster25.png",
        //width: 80%
    },
    KeyZ: {
        url: "./assets/img/monster26.png",
        //width: 80%
    }
};

document.addEventListener("keydown", function(event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        var img = document.createElement("img");
        //img.classList.add("letter");
        img.src = letters[event.code].url;
        container.appendChild(img);
    }
});

//img.src = letter[key.code].src

    // var simpsonButton = document.getElementById("simpson-button");
    // var simsponWrapper = document.getElementById("simpson-wrapper");

    // var simpsons = []
    // simpsons[0] = "media/fake_bart.png";
    // simpsons[1] = "media/krusty.gif";
    // simpsons[2] = "media/milhouse.gif";
    // simpsons[3] = "media/prince_lisa.png";

    // simpsonButton.addEventListener("click", function(event){
    //     var img = document.createElement("img");
    //     img.src = simpsons[Math.floor(Math.random() * 4)]; //random
    //     simsponWrapper.appendChild(img);

    //     event.stopPropagation();
    // });










