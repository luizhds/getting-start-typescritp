class SweetSweetBasil {
    color: string;
    constructor(name:string, startColor:string) {
        console.log("Hello " + name)
        this.color = startColor
    }
    getColor(){
        console.log(this.color)
    }
}

//let basil = new SweetSweetBasil("World", "green")
let world = new SweetSweetBasil("Basil", "bright green")

//basil.getColor()
//world.getColor()

//console.log(world.color)


class Basil extends SweetSweetBasil {
    constructor(name:string, startColor:string) {
        super(name, startColor);
    }

    setNewColor(newColor:string){
        this.color = newColor;
    }
}

let basil3 = new Basil("Luiz Santos", "brite green")

basil3.getColor()
basil3.setNewColor("Red")
basil3.getColor()
