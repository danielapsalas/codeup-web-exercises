"use strict"

function commitDay(username) {
    fetch('http://api.github.com/users/' + username + '/events/public', {headers: {'Authorization': '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'}})
        .then(response)
}