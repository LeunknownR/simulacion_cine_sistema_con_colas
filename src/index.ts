import { CUSTOMER_COUNT, CUSTOMER_SERVICE_TIME_RANGE, PROBABILITY_OF_CUSTOMER_APPEARING_EVERY_MINUTE } from "./config";
import CinemaSimulation from "./entities/CinemaSimulation";

const simulation: CinemaSimulation = new CinemaSimulation(
    CUSTOMER_COUNT, 
    CUSTOMER_SERVICE_TIME_RANGE
);
simulation.start(PROBABILITY_OF_CUSTOMER_APPEARING_EVERY_MINUTE);
simulation.showLog();