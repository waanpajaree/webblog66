module.exports ={
    port:8081,
    db:{
        database: process.env.DB_NAME || 'nvWebblogDb',
        user: process.env.DB_User || 'root',
        password: process.env.DIALECT || '',
        Option: {
            dialect: process.env.DIALECT || 'sqlite',
            Storage: './nvwebblog-db.sqlite'


        }
    }
}
       
