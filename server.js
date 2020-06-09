const functions = require("firebase-functions");
var admin = require("firebase-admin");
var serviceAccount = require("F:/MERN/KEY.json");
admin.initializeApp({credential: admin.credential.cert(serviceAccount),databaseURL: "https://mern-5e2ac.firebaseio.com"});


var db = admin.firestore();

const express = require("express");
var app=express();
const hbs=require('hbs');
var cors = require("cors");

app.get('/',(req,res)=>{
 return res.render('form.hbs',{
   title:'Online Reservation Portal',
   title1:'SignUp'
 });
});
app.get('/l',(req,res)=>{
 return res.render('login.hbs',{
   title:'Online Reservation Portal',
   title1:'Login'
 });
});


app.listen(3000,(res,req)=>{
  console.log("server running at 3000 port");
});
