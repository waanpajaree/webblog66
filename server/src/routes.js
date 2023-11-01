const UserController = require('./controllers/UserController')
const UserAuthenController = require('./controllers/UserAuthenController')
const LipstickController = require('./controllers/LipstickController')


module.exports = (app) => {

    // create user
    app.post('/user',
        UserController.create
    )

    // edit user, suspend, active
    app.put('/user/:userId', UserController.put)

    // delete user
    app.delete('/user/:userId',
        UserController.remove
    )

    // get user by id
    app.get('/user/:userId',
        UserController.show
    )

    // get all user
    app.get('/users',
        UserController.index
    )
    // login 
    app.post('login',
        UserAuthenController.login
    )

    app.get('/lipsticks', LipstickController.index)

    app.post('/lipstick', LipstickController.create)

    app.put('/lipstick/:lipstickId', LipstickController.put)

    app.delete('/lipstick/:lipstickId', LipstickController.delete)

    app.get('/lipstick/:lipstickId', LipstickController.show)

    

}