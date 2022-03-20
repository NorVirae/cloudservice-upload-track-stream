const { getAllTransactions, innitiateTranz, verifyTranz } = require('../services/payment.service');

require("dotenv").config();

const fileServ = require("../services/files.service")

const uploadFile = async (req, res) => {
    console.log(req.query)
    const {name, size, currentChunkIndex, totalChunks} = req.query
    try{
        // const result = await fileServ.uploadFile();

        console.log(req.body, "HErE");
        const data = req.body.toString().split()
        console.log(data)
        res.status(200).json("OK");
    }catch(err){
        res.status(401).json({
            message:"error fetch data"
        })
    }
}

const deleteFile = async (req, res) =>{
    console.log(req.body)
    try{
        const result = await fileServ.deleteFile(req.body);
        console.log(result, "HErE");
        res.status(200).json(result);
    }catch(err){
        res.status(401).json({
            message:"error fetch data"
        })
    }
}



module.exports = {
    deleteFile,
    uploadFile,
}
