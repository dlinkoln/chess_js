// import Figure from "./figs/figure.js"

function makeBoard() {
    let container = document.getElementById("app");
    let wSize = Math.min(window.innerHeight, window.innerWidth);

    // if(window.inner){

    // }
    console.log(wSize);
    container.style.cssText =
        `
        width: ${wSize / 1.5}px;
        height: ${wSize / 1.5}px;
        display:flex;
        justify-self: center;
        justify-content:center;
        margin-top: 10%;
        flex-wrap:wrap;
    `
    let rects = [[]];

    // var position = [[new Figure("b", "rook"), new Figure("b", "rook"), new Figure("b", "rook"), new Figure("b", "rook"), new Figure("b", "rook"), new Figure("b", "rook"), new Figure("b", "rook"), new Figure("b", "rook")],
    // [new Figure("b", "rook"), new Figure("b", "rook"), new Figure("b", "rook"), new Figure("b", "rook"), new Figure("b", "rook"), new Figure("b", "rook"), new Figure("b", "rook"), new Figure("b", "rook")],
    // [],
    // [],
    // [],
    // [],
    // [new Figure("w", "rook"), new Figure("w", "rook"), new Figure("w", "rook"), new Figure("w", "rook"), new Figure("w", "rook"), new Figure("w", "rook"), new Figure("w", "rook"), new Figure("w", "rook")],
    // [new Figure("w", "rook"), new Figure("w", "rook"), new Figure("w", "rook"), new Figure("w", "rook"), new Figure("w", "rook"), new Figure("w", "rook"), new Figure("w", "rook"), new Figure("w", "rook")]];
    // console.log("i elem in Array", position[0][1])


    function createRect(size = "50px", colour = "black") {
        var el = document.createElement("div");
        el.style.cssText = `
            width: ${size};
            height: ${size};
            background: ${colour};
        `

        rects.push(el);
        return el;
    }
    (function () {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                container.appendChild(createRect(Math.floor(wSize / 12) + "px", ((i + j) % 2 == 0) ? "#a0a0a0" : "#eee"));
            }
        }
        rects = container.querySelectorAll("div");
    }());

    // (function () {
    //     let numFlag = 0;
    //     let alpFlag = 0;
    //     for (let i = 0; i < rects.length; i++) {
    //         console.log(alpFlag)
    //         if (alpFlag === 7) {
    //             alpFlag = 0;
    //             console.log(alpFlag);
    //         }
    //         if (i % 7 === 0) {
    //             numFlag++;
    //             console.log(numFlag);
    //         }
    //     }
    // }(rects))

    // setFigs(position)

    // function setFigs(arr) {
    //     var fig;

    //     console.log(arr)

    //     for (let i = 0; i < 8; i++) {
    //         for (let j = 0; j < 8; j++) {
    //             if (arr[i][j] != undefined) {
    //                 arr[i][j].draw(rects[8 * i + j + 1])
    //             }
    //         }
    //     }
    // }
}

//function play() {
//  var queen_w = new Queen("white")
//  queen_w.validate();
//}
window.onload = () => {
    makeBoard()
    // play();
};

