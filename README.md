# Pet Sitting Application by Group 15 (S12)

This is a Pet Sitting App where users are able to book Sitters to take care fo their pets and as well as rate the sitters that are available.

## Prerequisites 
NodeJS and MongoDB must be installed in the PC.

## Contents:

- [controllers](https://github.com/ccapdev1920T2/s12g15/tree/master/controllers) - This folder contains files which defines callback functions for client requests.
- [models](https://github.com/ccapdev1920T2/s12g15/tree/master/models) - This folder contains files for database modeling and access.
- [public](https://github.com/ccapdev1920T2/s12g15/tree/master/public) - This folder contains static assets such as css, js, and image files.
- [routes](https://github.com/ccapdev1920T2/s12g15/tree/master/routes) - This folder contains files which describes the response of the server for each HTTP method request to a specific path in the server.
- [views](https://github.com/ccapdev1920T2/s12g15/tree/master/views) - This folder contains all hbs files to be rendered when requested from the server.
- [index.js](https://github.com/ccapdev1920T2/s12g15/blob/master/index.js) - The main entry point of the web application.

## Instructions
1. Download the zip or create a clone of the repsitory
2. Open Command Prompt 
3. Navigate to the project folder 
4. Run the following commands:
```
npm install
```
5. After running the installation,run the following command:
```
node index.js
```
6. If ran successfully the following message would be displayed in the command prompt, that it has ran successfully 
```
app listening at port 9090
Connected to: mongodb://localhost:27017/ccapdev-group15

7. To test our web application. Go to the link below to access the web application:
```
http://localhost:9090/
```
8. After doing this the predefined Sitters will be put into the database, by going to the homepage before logging in, and the data added will be shown in the command prompt as well. Even if you repeatedly go back to the homepage it should be able to check whether there are already sitters in the DB or not.
```

9. After this Press on the Account Button on the Navigation Bar, which would lead you to thew login/register page. So first you would need to register an account.
```

10. After Registering an account, it should redirect you into your profile page where you can see the data you have entered about yourself. 
```

11. After doing this then you can start using our application unless when you choose to logout, whcih then you will not be able to do any of the functions to be able to book a sitter. The you can login to your account again.

##Authors
* LING, LANZ PHILIP	
* ABELGAS, KEVIN
* BOOL, JEREMIAH

## Acknowledgements
* Sir Arren Antioquia, for the knowlege he gave us prior to developing the MP.

##Notes
1) All Views are Complete
2) All routes are implemented and accessible with navigational links/buttons within the app. 
3) Data is being loaded from the backend and could be retrieved from MongoDB database.
4) All the bookings made by a user is shown in their profile pages'
5) You must login first in order to view profile of a sitter and view the ratings and comment given to them in their profile page.
