
function initBoard() {
  var container=document.getElementById("app")
  var wSize = Math.min(window.innerHeight, window.innerWidth)/16
  console.log("Window size", wSize)
  function createRect(size="50px", colour="black") {
    var el = document.createElement("div")
    el.style.width = size;
    el.style.height = size;
    el.style.background = colour;
    el.style.display = "inline-block"
    return el
  }

  function createFig(el=container.querySelector("div"), fig="queen", c="w") {
    var r_w, r_h
    r_w = el.offsetWidth
    r_h = el.offsetHeight
    el.innerHTML = "<img src=\"png/"+fig+"_"+c+".png\""+" alt=\"\" width="+r_w+" height="+r_h+">"
  }

  for (var i=0; i<8;i++) {
    for (var j=0; j<8; j++) container.appendChild(createRect(wSize+"px", ((i+j)%2==0)?"#a0a0a0":"#eee"))
    container.appendChild(document.createElement("br"))
  }

  createFig()

}

window.onload = initBoard;


