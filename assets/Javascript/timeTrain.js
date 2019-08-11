var firebaseConfig = {
    apiKey: "AIzaSyBeIazvF7-B5yCf9KxaJqnL7PgUraEAVP4",
    authDomain: "train-tracker-aadc0.firebaseapp.com",
    databaseURL: "https://train-tracker-aadc0.firebaseio.com",
    projectId: "train-tracker-aadc0",
    storageBucket: "",
    messagingSenderId: "287193120956",
    appId: "1:287193120956:web:229d7fac1fdc4285"
  };

  firebase.initializeApp(firebaseConfig);

  var database= firebase.database();

  $("#submit-train").on("click", function(event) {
      event.preventDefault();

    var trainName = $("#train-name").val().trim();
    var tDestination = $("#destination").val().trim();
    var firstTrain = $("#first-train").val().trim();
    var  tFrequency = $("#frequency").val().trim();

    database.ref().push({
        name: trainName,
        destination: tDestination,
        arrivalTime: firstTrain,
        frequency:  tFrequency,
        dataAdded: firebase.database.ServerValue.TIMESTAMP
    });
  

   

// Needed to create a way to upload train data to database
// Next I would need to create an event for adding train/row to the table
//Was unable to link my tables to my actual code



  });