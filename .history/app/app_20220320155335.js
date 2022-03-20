const express = require('express');
const app = express();
const boodyParse

require("dotenv").config()
require("./middleware/app.middleware")(app)
// require("./db/index")


app.use("/api", require("./routes/payment.route"))
app.use("/file", require("./routes/files.route"))

app.get("/", (req, res) => {
    res.status(200).json({
        status:true,
        message:"Server by Vyrae",
        data:null
    })
})

const port = process.env.PORT || 8080;


app.listen(port, ()=>{
    console.log("Server Started at Port " + port);
})