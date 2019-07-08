const functions = require('firebase-functions');

// set up database connection
const admin = require('firebase-admin');
admin.initializeApp( functions.config().firebase);
const db = admin.firestore();

// change default CORS policy
// allow calls to this API from any origin
const cors = require('cors')({ origin: true });  
// allow calls to this API only from example.com
//const cors = require('cors')({ origin: 'http://example.com' });  

exports.getData = functions.https.onRequest((req, res) => {

    // wrap main logic in cors middleware
    cors(req, res, () => {

        // assumes a collection in your Cloud Firestore named 'quiz'; edit accordingly
        // preferably there's also some data there, i.e. documents in the collection
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
