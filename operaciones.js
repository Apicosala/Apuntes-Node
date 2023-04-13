import { logger } from './logs.js';

export const add = (a, b) => {
    logger("add");
    return a + b;
}
export const substract = (a, b) => {
    logger("substract");
    return a - b;
}
export const multiply = (a, b) => {
    logger("multiply");
    return a * b;
}
export const divide = (a, b) => {
    logger("divide");
    return a / b;
}



/*module.exports = { add, substract, multiply, divide };*/