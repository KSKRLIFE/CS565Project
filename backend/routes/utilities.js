import {validOrder, validOrientations} from "../const";

export const checkValidOrderBy = (query) => {
    return validOrder.includes(query)
}

export const checkValidOrientation = (query) => {
    return validOrientations.includes(query)
}