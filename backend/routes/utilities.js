const {validOrder,validOrderTopics, validOrientations} = require("../const")

const checkValidOrderBy = (query) => {
    return validOrder.includes(query)
}

const checkValidOrientation = (query) => {
    return validOrientations.includes(query)
}
const checkValidOrderByTopics = (query) => {
    return validOrderTopics.includes(query)
}
module.exports = {
    checkValidOrderBy,
    checkValidOrientation,
    checkValidOrderByTopics
}