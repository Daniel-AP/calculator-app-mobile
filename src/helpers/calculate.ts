/* eslint-disable indent */
import { Operation } from "../types/types.d";

export const calculate = (value1: number, value2: number, operation: Operation) => {

    switch (operation) {
        case Operation.DIVISION:
            return (value1/value2).toString();

        case Operation.MULTIPLICATION:
            return (value1*value2).toString();

        case Operation.SUBSTRACTION:
            return (value1-value2).toString();

        case Operation.ADDITION:
            return (value1+value2).toString();

        default:
            return value2.toString();
    }

};