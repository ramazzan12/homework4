
Rectangle.prototype.area = function() {
    return this.w*this.h;
}
class Square extends Rectangle {
    constructor(l){
        super(l,l);
    }
}
/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */

/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
