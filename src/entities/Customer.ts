import { generateRandomInteger } from "../utils/helpers";

const MOVIES: string[] = [
    "Oppenheimer",
    "Barbie",
    "Spiderman Across The Spiderverse",
    "John Wick 69",
    "Alexis Texas: Returns"
];

export default class Customer {
    private static counter: number = 0;
    readonly id: string;
    readonly serviceTime: number;
    readonly movie: string;
    constructor(serviceTime: number) {
        Customer.counter++;
        this.id = Customer.counter.toString().padStart(5, "0");
        this.serviceTime = serviceTime;
        this.movie = MOVIES[generateRandomInteger(0, MOVIES.length - 1)];
    }
    get formatted(): string {
        return `Cliente ${this.id}`;
    }
}