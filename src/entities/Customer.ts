export default class Customer {
    private static counter: number = 0;
    readonly id: string;
    readonly serviceTime: number;
    constructor(serviceTime: number) {
        Customer.counter++;
        this.id = Customer.counter.toString().padStart(5, "0");
        this.serviceTime = serviceTime;
    }
    get formatted(): string {
        return `Cliente ${this.id}`;
    }
}