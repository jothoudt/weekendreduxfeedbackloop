# Project Name
Feedback Loop
===

## Description
I created a reflection/feedback form. The feedback is collected from different pages that dispatch values to reducers. Then select the values from the reducers on a review page. Then from the review page the information is sent to the database on submit. The app also has an admin page to view all of the submissions.

Steps to complete
---

- [x] Create a database
- [x] Create a router for the server
- [x] Set up index.js defining reducers and creating a store
- [x] Create a component for each page of the app
- [x] Utilize Hashrouter and create links for each page
- [x] Add a button on home that brings user to first page of the form
- [x] Build the feelings component.
- [x] Dispatch input from feelings component into reducers and useHistory to navigate to the understanding component
- [x] Build the understanding component
- [x] Dispatch input from understanding component into reducers and useHistory to navigate to the support component
- [x] Build support component
- [x] Dispatch input from support component into reducers and useHistory to navigate to the comments component
- [x] Build comments component
- [x] Dispatch input from comments component into reducers and useHistory to navigate to the review component
- [x] Build Review component
- [x] Select all the items from the reducer and display so the user can review inputs.
- [x] Create a submit button that uses axios post to submit all of the information to the database and directs you to Thank you page
- [x] Create a Thank you component that user sees when information is submitted. 
- [x] Add a take new survey button that clears reducers and takes user to the first component of the form


For this assignment, you will be creating a reflection/feedback form modeled after Prime's system. Feedback will be collected over 4 views. In a separate review page, display the current feedback values and a submit button. and when all steps are complete, your app will save the feedback in the database.

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
