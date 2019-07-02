const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

const admin = require('firebase-admin');
admin.initializeApp( functions.config().firebase);
const db = admin.firestore();

const cors = require('cors')({
    origin: 'https://quiz-mc.netlify.com'     
});

exports.helloWorld = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        res.send("hi from Mississauga Coding");
    });  
});

exports.getData = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        /*
        let data = {
            question: "What is the capital city of Norway?",
            answer: "Oslo"
        };
        */

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
            console.error(err);
        });
        
    }); 
});
