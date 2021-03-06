# Read Me

It is a project with both frond end and spring boot based back end.  It uses react, redux, redux-saga(for side-effect), typescript, webpack, spring boot and jpa. 

To use,
 1. clone/download the project
 2. run "gradle wrapper" 
 3. run "gradle build" (It will download jar files and js module dependency)
 4. Before importing the project into IDE,  comment out "//include 'src:main:frontend" from settings.gradle
 5. Import gradle project to IDE. (I use eclipse)
 6. create a postgre db named "pomotodo"
 7. Start the mid-tier by running Application.java
 8. UI development <br />
&nbsp;&nbsp;8.1 For production, navigate to /src/main/frontend and run "npm run build", and go to localhost:9080/pomotodo <br />
&nbsp;&nbsp;8.2 For development (hot reloading),  navigate to /src/main/frontend and run "npm start", and go to localhost:9090 <br />

![alt text](https://imgur.com/2ezIhcW.png)

It is a pomodoro tool, which has two watches. One is stop watch that triggers notification (chrome brower) once the time is up. The other indicates how much time has lasted in the current pomodoro. This watch doesn't stop until you cut off the task by clicking the 'stop' button. It is designed this way, so you don't have to interrupt immediately after time is up. 

You can adjust the length of pomodoro by adding 10 minutes or decreasing 5 minutes. 

It keeps track how much time it takes in total for a task.

It only displays finished tasks that done in the last 24 hours.
