const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userInfo = require("./modals/user-modal");
const userContacts = require("./modals/contacts-modal");
const { ContactsValidator } = require("./utility");

mongoose.connect("mongodb+srv://ContactManager-project:project_!23@contactmanager-project.yoixj.mongodb.net/main?retryWrites=true&w=majority")
    .then((res) => {
        // console.log(res);
        console.log("mongoDB connected to DB");
    }).then(() => {

        // userInfo.create({
        //     username: "dineshborse",
        //     password: "pass123"
        // }).then((val) => {
        //     console.log(val);
        //     let obj = {
        //         name: "saurabh",
        //         designation: "student",
        //         company: "10x academy",
        //         industry: "logistic",
        //         email: "saurabh@test.com",
        //         phoneNo: "1234567890",
        //         country: "India"
        //     };
        //     if (ContactsValidator(obj)) {
        //         userContacts.create({
        //             username: "dineshborse",
        //             contacts: [obj]
        //         }).then((val) => {
        //             console.log(val);
        //         }).catch((err) => {
        //             console.log(err);
        //         })
        //     }
        //     else{
        //         console.log("ERROR: the contact object is Invalid")
        //     }
        // }).catch((err) => {
        //     console.log(err);
        // })
    })
    .catch((err) => {
        console.log(err);
    })

app.listen(3001, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("server is running on port 3001");
    }
})