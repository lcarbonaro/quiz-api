# quiz-api

This is part 1 of a two-part series covering a [full-stack application example](https://quiz-mc.netlify.com/).

In this part we walk through setting up a back-end data API, using Google Cloud Functions and Cloud Firestore. 

Usage steps:

1. Log into [Google Firebase console](https://firebase.google.com/)
2. Create project
3. Database -> Cloud Firestore
4. Add a collection called 'quiz'
5. Add some documents in that collection

Then:

1. `npm install -g firebase-tools`
2. `mkdir project-folder && cd project-folder`
    - make sure you're inside the project folder before the next step
3. `firebase init`
    -  select `Functions` with spacebar and press Enter
4. open `functions/index.js` in code editor
5. paste in code from this repo's `functions/index.js`
6. `firebase deploy`


Related links and references

- [Firebase CLI](https://firebase.google.com/docs/cli)
- [Firebase functions](https://firebase.google.com/docs/functions/write-firebase-functions)
- [Firestore CRUD & queries](https://firebase.google.com/docs/firestore/quickstart)
- [CORS](https://www.npmjs.com/package/cors)


-----

Join us at Mississauga Coding! 
=================================

Find out about upcoming events by checking out: 
----------------------------------------------

- [Our meetup page](http://www.meetup.com/Mississauga-Coding/) 
- [Our freeCodeCamp page](https://bit.ly/2MVVQLb)
- [Our Slack channel](https://goo.gl/J69cro)

Post your questions on any of these forums, attend our events, learn and share.

Happy Coding!


![Mississauga Coding](https://github.com/MississaugaCoding/mississaugacoding.github.io/blob/master/favicon-32x32.png "Mississauga Coding")

