
const payments = require("./payments.controller")


 const login = (req, res) => {
    const result = payments.getTransactions(req.body);
    res.status(200).send({
        message:"Payment fetch successful",
        status:true,
        data: result
    })
}

module.exports = {

}