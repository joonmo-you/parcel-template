// ESM (Browser) : import, export
// Node.js (Common JS) : require(), module.exports

// import autoprefixer from 'autoprefixer'
const autoprefixer = require('autoprefixer')

// export { plugins: [autoprefixer] }
module.exports = {
    plugins: [
        // require('autoprefixer')
        autoprefixer
    ]
}