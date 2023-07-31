import { OutputColor } from "../utils/colors";
import Customer from "./Customer";
import CustomerQueue from "./CustomerQueue";
import SimulationLog from "./SimulationLog";

export default class CinemaSimulationLog {
    private log: SimulationLog;
    private customerQueue: CustomerQueue;
    constructor(log: SimulationLog, customerQueue: CustomerQueue) {
        this.log = log;
        this.customerQueue = customerQueue;
    }
    reset() {
        this.log = new SimulationLog();
    }
    show(): void {
        this.log.show();
    }
    joinCustomerToQueue(minutes: number, customer: Customer) {
        this.log.addRecord({
            minutes,
            content: `${customer.formatted} entró a la cola.`,
            color: OutputColor.Green
        });
    }
    startAttention(minutes: number, customer: Customer): void {
        this.log.addRecord({
            minutes,
            content: `${customer.formatted} empezó a atenderse.`,
            color: OutputColor.Magenta
        });
    }
    endAttention(minutes: number, customer: Customer): void {
        this.log.addRecord({
            minutes,
            content: `${customer.formatted} terminó de atenderse en ${customer.serviceTime} min y compró una entrada para "${customer.movie}".`,
            color: OutputColor.Red
        });
    }
    queueState(): void {
        this.log.addRecord({
            content: this.customerQueue.state,
            color: OutputColor.Yellow
        });
    }
    startSimulation(): void {
        this.log.addRecord({
            color: OutputColor.Cyan,
            content: "\n[La simulación ha empezado]\n"
        });
    }
    endSimulation(): void {
        this.log.addRecord({
            color: OutputColor.Cyan,
            content: "\n[La simulación ha finalizado]\n"
        });
    }
}