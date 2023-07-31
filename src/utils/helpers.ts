export const generateRandomInteger = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export const probabilityAt = (probability: number): boolean => {
    return Math.random() < probability;
}