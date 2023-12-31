export enum OutputColor {
    // Colores de texto
    Black = '\x1b[30m',
    Red = '\x1b[31m',
    Green = '\x1b[32m',
    Yellow = '\x1b[33m',
    Blue = '\x1b[34m',
    Magenta = '\x1b[35m',
    Cyan = '\x1b[36m',
    White = '\x1b[37m',
}
export abstract class Output {
    static log(text: string, color: OutputColor) {
        console.log(`${color}%s\x1b[0m`, text);
    }
}