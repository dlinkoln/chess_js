import Figure from "./figs/figure.js"

function makeBoard() {
  var container=document.getElementById("app")

  var wSize = Math.min(window.innerHeight, window.innerWidth)
  container.style.width = wSize/2 + "px"
  container.style.height = wSize/2 + "px"


  var rects=[[]];

  var position = [[new Figure("b", "rook"), new Figure("b", "rook"), new Figure("b", "rook"), new Figure("b", "rook"), new Figure("b", "rook"), new Figure("b", "rook"), new Figure("b", "rook"), new Figure("b", "rook")], 
    [new Figure("b", "rook"), new Figure("b", "rook"), new Figure("b", "rook"), new Figure("b", "rook"), new Figure("b", "rook"), new Figure("b", "rook"), new Figure("b", "rook"), new Figure("b", "rook")], 
    [], 
    [], 
    [], 
    [], 
    [new Figure("w", "rook"), new Figure("w", "rook"), new Figure("w", "rook"), new Figure("w", "rook"), new Figure("w", "rook"), new Figure("w", "rook"), new Figure("w", "rook"), new Figure("w", "rook")], 
    [new Figure("w", "rook"), new Figure("w", "rook"), new Figure("w", "rook"), new Figure("w", "rook"), new Figure("w", "rook"), new Figure("w", "rook"), new Figure("w", "rook"), new Figure("w", "rook")]];

  console.log("Window size", wSize)
  console.log("i elem in Array", position[0][1])

  function createRect(size="50px", colour="black") {
    var el = document.createElement("div")
    el.style.width = size;
    el.style.height = size;
    el.style.background = colour;
    el.style.float = "left"
    rects.push(el)
    return el
  }

  for (var i=0; i<8;i++) {
    for (var j=0; j<8; j++) {
      container.appendChild(createRect(wSize/16+"px", ((i+j)%2==0)?"#a0a0a0":"#eee"))
    }
  }

  //rects = container.querySelectorAll("div");

  console.log(rects)
  setFigs(position)

  function setFigs(arr) {
    var fig;

    console.log(arr)

    for (var i=0; i<8;i++) {
      for (var j=0; j<8; j++) {
        debugger;
        if (arr[i][j]!=undefined) arr[i][j].draw(rects[8*i+j+1])
      }
    }
  }


}

//function play() {
//  var queen_w = new Queen("white")
//  queen_w.validate();
//}

window.onload = () => {
  makeBoard()
  //play()
};


