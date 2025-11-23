'use strict';

const express = require('express');
const app = express();
const fs = require('fs').promises;

app.get('/getfollowers', async (req, res) => {
  try {
    let followers = await fs.readFile('data/followers_1.json', 'utf8');
    followers = JSON.parse(followers);
    let result = [];
    for (let i = 0; i < followers.length; i++) {
      result.push(followers[i]['string_list_data'][0]['value']);
    }
    res.status(200).type('json').send(result);
  } catch (err) {
    res.status(400).type('text').send('Server error occurred.');
  }
});

app.get('/getfollowing', async (req, res) => {
  try {
    let following = await fs.readFile('data/following.json', 'utf8');
    following = JSON.parse(following)['relationships_following'];
    let result = [];
    for (let i = 0; i < following.length; i++) {
      result.push(following[i]['title']);
    }
    res.status(200).type('json').send(result);
  } catch (err) {
    res.status(400).type('text').send('Server error occurred.');
  }
});

app.use(express.static('public'));
const PORT = process.env.PORT || 8000;
app.listen(PORT);