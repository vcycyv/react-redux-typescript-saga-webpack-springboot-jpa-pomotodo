# Read me

It is a project with both frond end and spring boot based back end.  It uses react, redux, redux-saga(for side-effect), typescript, webpack, spring boot and jpa. It can serve as a starting point for a typical web application. 

To use,
 1. clone/download the project
 2. run "gradle wrapper" 
 3. run "gradle build" (It will download jar files and js modules dependency)
 4. Before importing the project into IDE,  comment out "//include 'src:main:frontend" from settings.gradle
 5. Import gradle project to IDE. (I use eclipse)
 6. create a postgre db named "pomotodo"
 7. Start the mid-tier by running Application.java
 8. UI development <br />
&nbsp;&nbsp;8.1 For projection, navigate to /src/main/frontend and run "npm run build", and go to localhost:9080/pomotodo <br />
&nbsp;&nbsp;8.2 For development (hot reloading),  navigate to /src/main/frontend and run "npm start", and go to localhost:9090 <br />
