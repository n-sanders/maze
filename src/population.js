class Population {
    constructor(popsize, brainsize) {
        this.size = popsize;
        this.brainsize = brainsize;
        this.currentBrainStep = 0;
        this.bestBrainTotalSteps = brainsize - 1;
        this.generation = 0;
        this.explorers = [];
        for (var i=0; i < popsize; i++) {
            this.explorers[i] = new Explorer(brainsize);
            this.explorers[i].brain.randomize();
        }

        this.bestExplorerStats = [];
        for (var i=0; i < 5; i++) {
            this.bestExplorerStats[i].fitness = 0;
            this.bestExplorerStats[i].brainStepsUsed = 0;
            this.bestExplorerStats[i].squaresExplored = 0;
        }
    }

    ReproduceNextGeneration() {
        for (var i=0; i < this.size; i++) {
            this.explorers[i].CalculateFitness();
        }

        this.explorers.sort(CompareExplorers);

        for (var i=0; i < 5; i++) {
            this.bestExplorerStats[i].fitness = this.explorers[this.size - 1 -i].fitness;
            this.bestExplorerStats[i].fitness = this.explorers[this.size - 1 -i].brainStep;
            this.bestExplorerStats[i].fitness = this.explorers[this.size - 1 -i].route.length;
        }

        this.bestBrainTotalSteps = this.explorers[this.size - 1].brainStep;
        if (!this.explorers[this.size - 1].didFinish) {
            this.brainsize + this.brainsize + 5;
            //this.bestBrainTotalSteps = this.brainsize - 1;
        }

        nextGenExplorers = [];
        for (i=0; i < this.size - 1; i++) {
            nextGenExplorers[i] = new Explorer(this.brainsize);
            nextGenExplorers[i].brain.MutateFrom(this.explorers[this.size - 1].brain.steps, 0.15);
        }
        nextGenExplorers[this.size - 1] = new Explorer(this.brainsize);
        nextGenExplorers[this.size - 1].brain.CloneFrom(this.explorers[this.size - 1].brain.steps);

        this.explorers = nextGenExplorers;
        this.explorers[size - 1].isBest = true;

        this.generation++;
        this.currentBrainStep = 0;
    }
}

function CompareExplorers(a, b) {
    if (a.fitness < b.fitness) {
        return -1;
    }
    if (a.fitness > b.fitness) {
        return 1;
    }
    return 0;
}