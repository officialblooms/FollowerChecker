# About

Amateur coding project that reads my Instagram's followers and following list and prints out a list of people that are not following me back and I am not following back.
Updated 2025 from a horrible pom.xml thingy to a full-stack configuration with configured API calls and DOM manipulation that I learned from CSE 154: Web Development at UW lol. 

# Setup

Clone this project into your local machine by doing:
```bash
git clone https://github.com/officialblooms/FollowerChecker
```

Make sure that [Java](https://www.java.com/download/ie_manual.jsp) and [OpenJDK](https://openjdk.org/install/) are installed on your machine.

Drag your ```followers_1.json``` and ```following.json``` files into the ```data/``` directory. Open the terminal and make sure you are inside the FollowerChecker directory, then run
```bash
node app.js
```
Then go to ```localhost:8000/index.html``` and interact with the buttons to see the list of people who are not following you back, and vice versa.
