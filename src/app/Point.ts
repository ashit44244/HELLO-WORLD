
export interface Point {
    x: number;
    y: number;
    z: number;

}

export class Line implements Point {
    /*  x: number;
     y: number;
     z: number; */

    /*  constructor(x: number, y: number, z: number) {
         this.x = x;
         this.y = y;
         this.z = z;
     } */
    // good way of creating constructor,  it will automaticaly declare fields, ? is used as optional param 
    constructor(private _x?: number, private _y?: number, private _z?: number) {


    }
    // property methods 
    get x() {
        return this._x;
    }
    set x(value) {
        this._x = value;
    }
    get y() {
        return this._y;
    }
    set y(value) {
        this._y= value;
    }
    get z() {
        return this._z;
    }
    set z(value) {
        this._z = value;
    }


    display = () => console.log("  x: " + this.x +" y: " +this.y +" z: " +this.z);

}