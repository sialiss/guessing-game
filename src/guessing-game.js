class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min + 1;
        this.max = max - 1;
    }

    guess() {
        this.res = Math.ceil((this.min + this.max) / 2)
        return this.res
    }

    lower() {
        this.max = this.res - 1
    }

    greater() {
        this.min = this.res + 1
    }
}

module.exports = GuessingGame;
