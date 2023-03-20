"use strict"


// 1.Generate a Personal Access Token for the GitHub API.
//
//     We will use this so that we don't get rate limited when talking to the GitHub API. You can add the token to your requests like this:
//
//
// fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})
// Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user
// made. Reference the github api documentation to achieve this.
function commitDay(username) {
    fetch('https://api.github.com/users/' + username + '/events/public', {headers: {'Authorization': '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'}})
        .then(response => response.json())
        .then(data => {console.log(data[0].created_at)})
}

commitDay("danielapsalas")

// 2.Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
//
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
// As a bonus make sure the promise resolves with the milliseconds in return, so you can make the console log message more dynamic.
function wait(num){
    return new Promise(resolve => setTimeout(() => resolve(num), num));
}
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));