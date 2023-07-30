import { Output, OutputColor } from "../utils/colors";

export type SimulationLogRecord = {
    readonly minutes?: number;
    readonly content: string;
    readonly color: OutputColor;
};
export default class SimulationLog {
    private log: SimulationLogRecord[];
    constructor() {
        this.log = [];
    }
    addRecord(record: SimulationLogRecord) {
        this.log.push(record);
    }
    async show() {
        this.log.forEach(({ minutes, content, color }) => {
            let text: string = minutes ? `[${minutes} min] ` : "";
            text += content;
            Output.log(text, color);
        });
    }
}