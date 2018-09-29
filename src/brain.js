class Brain {
    constructor(brainsize) {
        this.stepcount = 0;
        this.steps = [];
    }

    Randomize() {
        for (i=0; i < this.steps.length; i++) {
            this.steps[i] = this.RandomDirection();
        }
    }

    RandomDirection() {
        directionString = "";
        direction = Math.floor(Math.random() * 4);
        switch(direction) {
            case 0:
              directionString = "up";
            break;
            case 1:
              directionString = "down";
            break;
            case 2:
              directionString = "left";
            break;
            default:
              directionString = "right";
            break
        }

        return directionString;
    }

    CloneFrom(stepsToClone) {
        this.Randomize();
        for (i=0; i < stepsToClone.length; i++) {
            this.steps[i] = stepsToClone[i];
        }
    }

    MutateFrom(stepsToMutate, entropyfactor) {
        this.Randomize();
        for (i=0; i < stepsToMutate.length; i++) {
            if (Math.random() < entropyfactor) {
                steps[i] = this.RandomDirection();
            }
            else {
                steps[i] = stepsToMutate[i];
            }
        }
    }
}