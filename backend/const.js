const baseAPI = 'https://api.unsplash.com'
const oauthURL = 'https://unsplash.com/oauth/token'
const access_key = 'NNAw7QdXUViq-LNrYe-i0mJiqiq3RBavlpHDoMpoYo4'
const client_secret = 'B_onOq3-_n0pTmS5Mvo2NYcaBDu5dmR90VSpXwNehGs'

const validOrder = ['latest', 'oldest', 'popular']
const validOrderTopics = ['latest', 'oldest', 'position', 'featured']
const validOrientations = ['landscape', 'portrait', 'squarish']

module.exports = {
    baseAPI,
    access_key,
    client_secret,
    validOrder,
    validOrientations,
    validOrderTopics,
    oauthURL
}