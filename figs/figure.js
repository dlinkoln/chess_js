export default function Figure(colour, name, fmt="svg") {
  this.colour = colour
  this.name = name
  this.validate = () => {
    console.log("Validation: ", this.colour)
  }
  this.draw = (el) => {
    var path = fmt+"/"+name+"_"+colour+"."+fmt
    var r_w, r_h
    r_w = el.offsetWidth
    r_h = el.offsetHeight
    el.innerHTML = '<img src="'+path+'" alt="" width="'+r_w+'" height="'+r_h+'">'
  }

}
