import fs from 'fs';
export const logger = (fname) => {
    const date = new Date();
    fs.appendFileSync("./logs.txt", `Se ejecuta la función ${fname} el ${date} \n`);

}
