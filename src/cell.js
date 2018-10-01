class Cell {
    constructor() {
        this.fillColor = color(255);
        this.state = "open";
    }

    SetState(newState) {
        this.state = newState;
        switch(newState) {
            case "wall":
              this.fillColor = color(0);
            break;
            case "start":
              this.fillColor = color(0,255,0);
            break;
            case "goal":
              this.fillColor = color(255,0,0);
            break;
            default:
              this.state = "open";
              this.fillColor = color(255);
            break;
        }
    }
}