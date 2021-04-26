module.exports = {
    transpileDependencies: [
        'vuetify'
    ],
    devServer: {
        proxy: 'https://happylife-backend.herokuapp.com/',
    }
}