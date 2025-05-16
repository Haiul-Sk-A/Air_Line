import express from 'express';
import mysqlPool from './database/dataBase.js';

const Port = 5000;


const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello,Backend!')
});

app.get('/test',(req,res)=>{
    res.status(200).send("Node js Mysql App")
});

app.listen(Port,() =>{
    console.log(`Server Running https://localhost:${Port}`)
})