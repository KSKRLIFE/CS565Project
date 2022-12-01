const {validOrder, validOrientations} = require("../const")

const checkValidOrderBy = (query) => {
    return validOrder.includes(query)
}

const checkValidOrientation = (query) => {
    return validOrientations.includes(query)
}
module.exports = {
    checkValidOrderBy,
    checkValidOrientation
}