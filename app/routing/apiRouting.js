var friends = require("../data/friends.js");
// var surveyData= require("../../server.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    })



var newFriend = [];
var oldFriend = [];


// newFriend.push(newPerson);
// res.json(newFriend);

//get answers from the survey, 
//req.body into a variable


//compare user and database,
//create a variable that holds user and data totals
//for loop to compare the totals
//if > number then compatible, if not then not compatible

//push into an array, 
//variable into an empty array 

//display closest match. res.json

// app.post("/api/friends", function(req, res) {

// })


    app.post("/api/friends", function (req, res) {
        // console.log(data);
        // res.json(data);

        for (var i = 0; i < friends.length; i++) {
            var oldFriendResult = friends[i].answers[i];
            oldFriend.push(oldFriendResult);

        }
        for (var x = 0; x < newPerson.length; i++) {
            var newFriendResult = newPerson[i].answers[i];
            newFriend.push(newFriendResult);

        }
        // var totalDifference = 

        // var oldFriendResults = 

        // newFriend.push(newPerson);
        // res.json(newFriend);
        // $("input").val("");

    })



}