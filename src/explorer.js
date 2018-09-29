class Explorer {
    constructor(newbrainsize) {
        this.brain = new Brain(newbrainsize);
        this.X = 0;
        this.Y = 0;
        this.brainStep = 0;
        this.distanceTraveled = 0;
        this.didFinish = false;
        this.isBest = false;
        this.route = [];
        this.fitness = 0;
    }

    Show() {
        xOffSet = cellWidth / 2 - 10;
        yOffSet = cellHeight / 2 - 10;
        if (this.isBest) {
            fill(0,255,255);
        }
        else {
            fill(0,0,255);
        }
        rect(cellWidth * this.X + xOffSet, cellHeight * this.Y + yOffSet, 20, 20);
        // still need to draw the direction arrow //
    }

    GetNextStep() {
        return this.brain.steps[this.brainStep++];
    }

    GetCurrentDirection() {
        return this.brain.steps[this.brainStep];
    }

    SetLocation(newX, newY) {
        this.X = newX;
        this.Y = newY;
        this.distanceTraveled++;
        // route map?
    }

    GetFitness() {
        if (this.didFinish) {
            this.fitness = 3000 - (10 * this.brainStep);
        }
        else {
            this.fitness = 1000 * this.distanceTraveled;
        }
        
        return this.fitness;
    }
}