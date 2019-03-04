var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SweetSweetBasil = (function () {
    function SweetSweetBasil(name, startColor) {
        console.log("Hello " + name);
        this.color = startColor;
    }
    SweetSweetBasil.prototype.getColor = function () {
        console.log(this.color);
    };
    return SweetSweetBasil;
}());
var world = new SweetSweetBasil("Basil", "bright green");
var Basil = (function (_super) {
    __extends(Basil, _super);
    function Basil(name, startColor) {
        return _super.call(this, name, startColor) || this;
    }
    Basil.prototype.setNewColor = function (newColor) {
        this.color = newColor;
    };
    return Basil;
}(SweetSweetBasil));
var basil3 = new Basil("Luiz Santos", "brite green");
basil3.getColor();
basil3.setNewColor("Red");
basil3.getColor();
