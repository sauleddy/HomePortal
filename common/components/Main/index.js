if (process.env.NODE_ENV === 'production') {
    module.exports = require('./Main')
} else {
    module.exports = require('./Main.dev')
}
