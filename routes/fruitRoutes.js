var express = require('express');
var router = express.Router();
const modelFruit = require('../models/fruit')

router.get('/test', function(reg, res, next) {
    res.send('respond with a resource Fruit test');
});

//add data
router.post('/add', async(reg, res) =>{
    try {
        const model = new modelFruit(reg.body)
        const result = await model.save();
        if(result) {
            res.json({
                "status":200,
                "message": "Thêm thành công",
                "data": result
            })
        }else{
            res.json({
                "status":400,
                "message": "Thêm thất bại",
                "data": []
            })
        }
        //res.send(result)
    } catch (error) {
        console.log(error);
    }
})
router.get('/list', async(reg, res) =>{
    const result = await modelDistributor.find({})
    try {
        res.send(result)
    } catch (error) {
        console.log(error);
    }
})

router.get('/getbyid/:id', async(reg, res) =>{
    try {
        const result = await modelFruit.findById(reg.params.id).populate(' id_distributor')
        if(result){
            res.send(result)
        }else{
            res.json({
                "status":400,
                "message": "không tìm thấy id",
                "data": []
            })
        }
        } catch (error) {
        if(error.name === 'CastError'){
            res.status(404).send('Invalid ID format')
        }else{
            console.log(error);
            res.status(500).send('Internal Server Error')

        }
    }
})


router.patch('/edit/:id', async(reg, res) =>{
    try {
        const result = await modelFruit.findByIdAndUpdate(reg.params.id,reg.body)
        if(result){
            const rs = await result.save()
            res.send(rs)
        }else{
            res.json({
                "status":400,
                "message": "không tìm thấy id",
                "data": []
            })
        }
        } catch (error) {
        if(error.name === 'CastError'){
            res.status(404).send('Invalid ID format')
        }else{
            console.log(error);
            res.status(500).send('Internal Server Error')

        }
    }
})


router.delete('/delete/:id', async(reg, res) =>{
    try {
        const result = await modelFruit.findByIdAndDelete(reg.params.id)
        if(result){
            res.json({
                "status":200,
                "message": "xóa thành công",
                "data": result
            })
        }else{
            res.json({
                "status":400,
                "message": "xóa thất bại",
                "data": []
            })
        }
        } catch (error) {
            console.log(error);
    }
})

module.exports = router;