DONE 1) store all the questions into mongodb database 
DONE 2) query the question 
    - need to set up API routes beforehand
DONE 3) display the question on web app (front end)
    - need to know the difference between app.get vs app.use
DONE 4) Plan the flow of the app for users
DONE 5) Make a login page with react js
    - need to install material ui
    - need to make a form for rendering 
    - make the form fetch api/userlogin
    - set up connection to db so that the username and score is stored in db
    - fixed username insertion issue by adding body parser module for json data
DONE 6) Display 3 contents in the front page 4 times
    - display them in radio buttons style
    - need to set up controller to query emotion type question from db
    - extract the question content from the query and display it on the radio buttons
    - need to make next button so user can go to next page of questions
DONE 7) make the questionpage and learningpage save the states after user press next button
    - To restore a previous state after a page reload in browser, you have to save state locally (localstorage/IndexedDB)
8) Make use of score, and use score to determine category and amount of questions per page
    - Need to read about props of ReactJS 
9) Make the query in question controller to get exactly 9 (randomized) japanese words based on score of users
- need to look into mongoose find using where()
10) Display the chosen questions in the same way as before (3 questions per page)
11) Finally, make the quiz page to test the user those 9 words


17/2/2020
1) what have i done today
2) create questions content
3) cannot fix the name of undefined bug

Use 'npm dev run' command to start up the web app and server

this link is useful for fetching API data for react js => https://www.youtube.com/watch?v=T3Px88x_PsA
21/2/2020


REACT JS SELF LEARN NOTES

1) component={ Link } to="/learning" 
    if this line is present, setstate will not set the new states immediately

