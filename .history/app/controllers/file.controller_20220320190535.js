const { getAllTransactions, innitiateTranz, verifyTranz } = require('../services/payment.service');
const md5 = require('md5')
const fs = require("fs")
require("dotenv").config();

const fileServ = require("../services/files.service")

const uploadFile = async (req, res) => {
    console.log(req.query)
    const {name, size, currentChunkIndex, totalChunks} = req.query
    try{
        let n = name.split(".").pop()

        const data = req.body.toString().split(',')[1]
        const buffer = new Buffer(data, "base64") 
        const tempFileName = "tmp_"+md5(name+req.ip);
        if (firstChunk && fs.existsSync(tempFileName)){
            fs.unlink(tempFileName)
        }

        if(finalChunk){
            const finalName = name+""+md5(date.now()+name)
            fs.renameSync(tempFileName, finalName )
        }
        fs.appendFileSync(tempFileName, buffer)
        res.status(200).json("OK");
    }catch(err){
        console.log(err)
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
