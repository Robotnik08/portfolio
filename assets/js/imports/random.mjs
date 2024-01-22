export class Random {
    constructor () {
        this.seed = Math.random() * Number.MAX_SAFE_INTEGER;
        this.getRand = () => {
            let x = Math.sin(this.seed++) * 10000;
            return x - Math.floor(x);
        }
        this.getRandInt = (min, max) => {
            return (this.getRand() * (max - min + 1) + min)|0;
        }
        this.getRandomChancePercent = (chance) => {
            return this.getRand()*100 < chance;
        }
        this.getRandomChance = (chance) => {
            return !this.getRandInt(0, chance);
        }


        this.setSeed = (seed) => {
            this.seed = seed;
        }
    }
}