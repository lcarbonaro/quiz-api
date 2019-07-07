# quiz-api


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


Related links and references

- [Firebase CLI](https://firebase.google.com/docs/cli)
- [Firebase functions](https://firebase.google.com/docs/functions/write-firebase-functions)
- [Firestore CRUD & queries](https://firebase.google.com/docs/firestore/quickstart)
- [CORS](https://www.npmjs.com/package/cors)
