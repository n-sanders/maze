class Cell {
    constructor() {
        this.fillColor = color(255);
    }

    ChangeColor(newcolor) {
        if (this.fillColor === color(255)) {
            this.fillColor = newColor;
        }
        else {
            this.fillColor = color(255);
        }
    }
}