const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());

app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "empconcor"
})

//ADMIN LOGIN API
app.post('/login', (req, res) => {
    const {username, password} =  req.body
    const sql = `SELECT * FROM admin WHERE email = '${username}'`;
    db.query(sql, (err, data) => {
        if(data.length === 0){
            res.json(false)
            res.status(400)
        }else{
            if (data[0].password === password){
                res.json(true)
            }else{
                res.json(false)
            }
        }
    })
})

//HR LOGIN API
app.post('/hrlogin', (req, res) => {
    const {email, password} =  req.body
    const sql = `SELECT * FROM hrdetails WHERE email = '${email}'`;
    db.query(sql, (err, data) => {
        if(data.length === 0){
            res.json(false)
        }else{
            if (data[0].password === password){
                res.json(true)
            }else{
                res.json(false)
            }
        }
    })
})

//POST CANDIT REGESTER
app.post('/user', (req, res) => {
    const sql = "INSERT INTO user (`name`, `email`, `password`, `phone`, `country`, `compeny`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password,
        req.body.phoneNo,
        req.body.country,
        req.body.compeny,
    ]
    db.query(sql, [values], (err, data) => {
        if(err) return  res.json("Error")
        return res.json(data)
    })
})

//POST HR REGESTER API
app.post('/hrdetails', (req, res) => {
    const sql = "INSERT INTO hrdetails (`name`, `email`, `password`, `phone`, `compeny`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password,
        req.body.phoneNo,
        req.body.compeny,
    ]
    db.query(sql, [values], (err, data) => {
        if(err) return  res.json("Error")
        return res.json(data)
    })
})

//DELETE USER API
app.delete("/user/:id", (req, res) => {
    const sql = "DELETE FROM user WHERE id =  ?"
    const id = req.params.id
    db.query(sql, [id], (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})



//GET USER API
app.get("/user", (req, res) => {
    const sql = "SELECT * FROM user"
    db.query(sql, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    }
    ) 
})

//GET HRDetails API
app.get("/hrdetails", (req, res) => {
    console.log(req.body)
    const sql = `SELECT * FROM hrdetails`
    db.query(sql, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    }
    ) 
})




app.post('/send-email', (req, res) => {
    const { to, subject, body } = req.body;
  
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ramkalinga0@gmail.com',
        pass: 'Ram.@123',
      },
    });
  
    const mailOptions = {
      from: 'ramkalinga0@gmail.com',
      to,
      subject,
      text: body,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error)
        return res.status(500).send(error.toString());
      }
      res.status(200).send('Email sent: ' + info.response);
    });
  });



// SERVER RUNNING STATUS
app.listen(5000, () => {
    console.log("Server is running at http://localhost:5000")
})










