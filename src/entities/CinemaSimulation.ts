import { OutputColor } from "../utils/colors";
import { generateRandomInteger, probabilityAt } from "../utils/helpers";
import { ServiceTimeRange } from "../utils/types";
import CinemaSimulationLog from "./CinemaSimulationLog";
import Customer from "./Customer";
import CustomerQueue from "./CustomerQueue";
import SimulationLog from "./SimulationLog";

export default class CinemaSimulation {
    private customerQueue: CustomerQueue;
    private totalCustomers: number;
    private serviceTimeRange: ServiceTimeRange;
    private log: CinemaSimulationLog;
    private isAttending: boolean;
    constructor(totalCustomers: number, serviceTimeRange: ServiceTimeRange) {
        this.customerQueue = new CustomerQueue();
        this.totalCustomers = totalCustomers;
        this.log = new CinemaSimulationLog(new SimulationLog(), this.customerQueue);
        this.isAttending = false;
        this.serviceTimeRange = serviceTimeRange;
    }
    start(probability: number): void {
        this.log.reset();
        let minutes: number = 1;
        let customerCount: number = 0;
        this.log.startSimulation();
        while (
            customerCount < this.totalCustomers 
            || this.customerQueue.currentCustomer 
            || this.isAttending
        ) {
            // Simulando llegada aleatoria a la cola a cierta probabilidad
            if (probabilityAt(probability) && customerCount < this.totalCustomers) {
                this.arriveToQueue(minutes);
                customerCount++;
            }
            // Verificando si es la primera atención de la cola
            if (!this.customerQueue.currentCustomer) 
                this.attendCustomer(minutes);
            // Verificando si ya ha transcurrido el tiempo de servicio del cliente actual
            else if (minutes % this.customerQueue.currentCustomer.serviceTime === 0) 
                this.checkQueue(minutes, this.customerQueue.currentCustomer);
            minutes++;
        }
        this.log.endSimulation();
    }
    showLog(): void {
        this.log.show();
    }
    private arriveToQueue(minutes: number): void {
        const [limInf, limSup] = this.serviceTimeRange;
        const newCustomer = new Customer(generateRandomInteger(limInf, limSup));
        this.customerQueue.enqueu(newCustomer);
        this.log.joinCustomerToQueue(minutes, newCustomer);
        this.log.queueState();
    }
    private attendCustomer(minutes: number): void {
        const newAttendingCustomer = this.customerQueue.dequeue();
        if (!newAttendingCustomer) return;
        this.isAttending = true;
        this.log.startAttention(minutes, newAttendingCustomer);
        this.log.queueState();
    }
    private checkQueue(minutes: number, attendingCustomer: Customer): void {
        if (attendingCustomer) {
            this.log.endAttention(minutes, attendingCustomer);
            this.isAttending = false;
        }
        this.attendCustomer(minutes);
    }
}