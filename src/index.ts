import { CUSTOMER_COUNT, PROBABILITY_OF_APPEARING } from "./config";
import CinemaSimulation from "./entities/CinemaSimulation";

const simulation: CinemaSimulation = new CinemaSimulation(CUSTOMER_COUNT);
simulation.start(PROBABILITY_OF_APPEARING);
simulation.showLog();