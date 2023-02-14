const mongoose = require('mongoose');

 const  connectDatabase = () => {
         mongoose.connect(
             `mongodb+srv://gini:gini@cluster0.occxmut.mongodb.net/?retryWrites=true&w=majority` , {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })

        const db = mongoose.connection;
        db.once("open", function () {
        console.log("Connected to database successfully");
        });

        db.on("error", console.error.bind(console, "connection error: "));
}



module.exports = connectDatabase;
