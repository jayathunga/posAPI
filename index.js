const express=require('express');
const https=require('https');
const mongoose=require('mongoose');
mongoose.set('strictQuery',true);

const app=express();
mongoose.connect(
    'mongodb://localhost:27017/posDB'
).then(()=>{
    app.listen(3000,()=>{
        console.log("server started");
    });
})
