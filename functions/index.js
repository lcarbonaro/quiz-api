const functions = require('firebase-functions');

// set up database connection
const admin = require('firebase-admin');
admin.initializeApp( functions.config().firebase);
const db = admin.firestore();

// change default CORS policy, to enable calls to this API from any origin
const cors = require('cors')({  origin: true  });  // allows any origin to call API functions

exports.getData = functions.https.onRequest((req, res) => {

    // wrap main logic in cors middleware
    cors(req, res, () => {

        // assumes a collection in your Cloud Firestore named 'quiz'; edit accordingly
        // also assumes there's at least one document in that collection
        db.collection('quiz').get()
        .then( result => {
            let data = [];
            result.forEach( doc => {
                data.push(doc.data());
            });
            res.json(data);
            res.send();
        })
        .catch( err => {
            res.json({ success:false, error:err });
            res.send();
        });
        
    });  // cors 

});  // getData function
