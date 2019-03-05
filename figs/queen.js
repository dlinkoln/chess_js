export default function Queen(colour="black") {
  this.validate = () => {
    console.log("Validation: ", this.colour)
  }
  this.colour = colour
}
