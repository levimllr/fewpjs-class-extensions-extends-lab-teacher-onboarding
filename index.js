// Your code here
class Polygon {
    constructor(intArr) {
        this.intArr = intArr
    };

    get countSides() {
        return this.intArr.length;
    };

    get perimeter() {
        return this.intArr.reduce((total, side) => {return total + side}, 0);
    };
};

class Triangle extends Polygon {
    get isValid() {
        const sideA = this.intArr[0];
        const sideB = this.intArr[1];
        const sideC = this.intArr[2];
        let isValid = false;
        if (sideA + sideB > sideC && 
            sideB + sideC > sideA && 
            sideC + sideA > sideB) {
            isValid = true;
        }; 
        return isValid;
    };
};

class Square extends Polygon {
    get isValid() {
        const sideA = this.intArr[0];
        const sideB = this.intArr[1];
        const sideC = this.intArr[2];
        const sideD = this.intArr[3];
        let isValid = false;
        if (sideA == sideB &&
            sideB == sideC &&
            sideC == sideD) {
            isValid = true;
        }; 
        return isValid;
    };
    get area() {
        const sideA = this.intArr[0];
        const sideB = this.intArr[1];
        return sideA * sideB;
    };
};