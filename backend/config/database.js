const mongoose = require('mongoose');

 const  connectDatabase = () => {
    const username = "loca";
    const password = "loca";
    const dbname = "dressit";

         mongoose.connect(
             `mongodb+srv://${username}:${password}@cluster0.vh4u5.mongodb.net/${dbname}?retryWrites=true&w=majority` , {
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