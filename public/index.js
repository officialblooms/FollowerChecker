'use strict';
(function () {
  window.addEventListener("load", init);

  let followers;
  let following;

  function init() {
    getFiles();
    document.getElementById('fakefans').addEventListener('click', getFakeFans);
    document.getElementById('opps').addEventListener('click', getOpps);
  }

  async function getFiles() {
    try {
      let followerCall = await fetch('/getfollowers');
      followers = await followerCall.json();
      let followingCall = await fetch('/getfollowing');
      following = await followingCall.json();
    } catch (err) {
      console.err('erm what the sigma');
    }
  }

  function getFakeFans() {
    let fakeFans = [];

    for (let i = 0; i < following.length; i++) {
      if (!followers.includes(following[i])) {
        fakeFans.push(following[i]);
      }
    }

    let list = document.getElementById('fakefanslist'); 
    let fakeFanCountText = document.createElement('p');
    fakeFanCountText.textContent = 'Count: ' + fakeFans.length;
    list.appendChild(fakeFanCountText);
    fakeFans.forEach((fakeFan) => {
      let listItem = document.createElement('li');
      listItem.textContent = fakeFan;
      list.appendChild(listItem);
    });

    this.disabled = true;
  }

  function getOpps() {
    let opps = [];

    for (let i = 0; i < followers.length; i++) {
      if (!following.includes(followers[i])) {
        opps.push(followers[i]);
      }
    }

    let list = document.getElementById('oppslist'); 
    let oppsCountText = document.createElement('p');
    oppsCountText.textContent = 'Count: ' + opps.length;
    list.appendChild(oppsCountText);
    opps.forEach((opp) => {
      let listItem = document.createElement('li');
      listItem.textContent = opp;
      list.appendChild(listItem);
    });

    this.disabled = true;
  }
})();