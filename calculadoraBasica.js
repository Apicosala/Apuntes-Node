/*const { add, substract } = require('./operaciones');*/
import colors from "colors";
import { add, substract } from "./operaciones.js";
const result1 = add(3, 2);
const result2 = substract(8, 2);
console.log(result1, result2);
console.log(colors.red(result1));
console.log(colors.green(result2));