import Customer from "./Customer";

export default class CustomerQueue {
    private customers: Customer[];
    private _currentCustomer: Customer | undefined;
    constructor() {
        this.customers = [];
    }
    enqueu(customer: Customer): void {
        this.customers.push(customer);
    }
    dequeue(): Customer | undefined {
        this._currentCustomer = this.customers.shift();
        return this._currentCustomer;
    }
    get currentCustomer(): Customer | undefined {
        return this._currentCustomer;
    }
    get state(): string {
        const content: string = this.customers.length > 0
            ? this.customers.map(({ id }) => `       ${id}`).join("\n")
            : "\t -";
        const customerQueued: string = this._currentCustomer 
            ? `      [${this._currentCustomer.id}]\n\n` 
            : "        [-]\n\n";
        return `| Estado de la cola |\n\t[T]\n${customerQueued}${content}`;
    }
    get count(): number {
        return this.customers.length;
    }
}