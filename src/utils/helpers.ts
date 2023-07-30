export const generateRandomInteger = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export const generateRandomDecimal = (min: number, max: number): number => {
    const randomNumber: number = Math.random() * (max - min) + min;
    return Math.round(randomNumber * 10) / 10;
}
export const probabilityAt = (probability: number): boolean => {
    return Math.random() < probability;
}