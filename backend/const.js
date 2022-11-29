const baseAPI = 'https://api.unsplash.com'
const access_key = '2b49bba071a9f09d53cc8811ff6e1a137e230063abf92aebc473ae1ce7f3239b'
const client_secret = 'c497c84fe84713d394f750394541078580edde481bcaf41a77b8280544a338c3'

const validOrder = ['latest', 'oldest', 'popular']
const validOrderTopics = ['latest', 'oldest', 'position', 'featured']
const validOrientations = ['landscape', 'portrait', 'squarish']

module.exports = {
    baseAPI,
    access_key,
    client_secret,
    validOrder,
    validOrientations,
    validOrderTopics
}