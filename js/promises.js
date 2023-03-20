"use strict"

function commitDay(username) {
    fetch('https://api.github.com/users/' + username + '/events/public', {headers: {'Authorization': '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'}})
        .then(response => response.json())
        .then(data => {console.log(data[0].created_at)})
}

commitDay("danielapsalas")