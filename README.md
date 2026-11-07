# About

Amateur coding project that reads my Instagram's followers and following list and prints out a list of people that are not following me back and I am not following back.

# Obtaining Followers and Following List

You'll need to request a .json file of the list of followers and people you follow from Instagram, and name them `followers_1.json` and `following.json`, respectively. 

To request it, go to the [Meta Account Center](https://accountscenter.instagram.com/?theme=dark&entry_point=app_settings) > Your information and permissions > Export your information > Create export > `<username>` Instagram > Export to device.

Then change "Customize Information" to only include "Followers and Following", the "Date Range" to "All time", and "Format" to "JSON". Then click "Start Export". It may take a few minutes for the process to complete; download them once complete.

# Running the Website

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

# Changelog
10/1/24: Minor bug fixes
11/22/25: Updated from a horrible `pom.xml` model to a full-stack configuration with configured API calls and DOM manipulation
11/6/26: Updated README.md

