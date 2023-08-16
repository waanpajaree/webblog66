const UserController = require('./controllers/userController')

module.exports = (app) =>{
    //get all user
    app.get('/users', UserController.index),

    //create
    app.post('/users', UserController.create),

    //edit
    app.put('/users/:userId', UserController.put)

    //delete
    app.delete('/users/:userId', UserController.delete)

    //show by id
    app.get('/users/:userId', UserController.show)

}







