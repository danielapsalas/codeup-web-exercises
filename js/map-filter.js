const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


// 1st - Use .filter to create an array of user objects where each user
// object has at least 3 languages in the languages array.
let usersLanguages = users.filter(function(user){
    return user.languages.length >= 3;
})
console.log("languages: " + usersLanguages);


// 2nd - Use .map to create an array of strings where each element is
// a user's email address
let usersEmails = users.map(function(user){
    return user.email;
})
console.log("emails: " + usersEmails);


// 3rd - Use .reduce to get the total years of experience from the list of users.
// Once you get the total of years you can use the result to calculate the average.
let usersYears = users.reduce(function(totalYears, user){
    return (totalYears + user.yearsOfExperience)

},0)
console.log("average years of experience: " + usersYears/users.length);


// 4th -  Use .reduce to get the longest email from the list of users.
let longestEmail = users.reduce(function(longestMail, user){
    // console.log(longestMail);
    // console.log(user.email);
    if(longestMail.length < user.email.length){
        return user.email;
    }else{
        return longestMail;
    }

}, " ")
console.log("longest email: " + longestEmail);


// 5th - Use .reduce to get the list of user's names in a single string.
// Example: Your instructors are: ryan, luis, zach, fernando, justin.
let instructorString = users.reduce(function(stringAccum, user){
    return stringAccum + " , " + user.name;
}, "")

console.log(instructorString);


// Convert Address to Object
// Write a function named convertAddressToObject that accepts a string that contains
// a street number (as a string) and street name separated by a space characters, and
// returns an object with properties streetNumber and streetName.
//
// Examples

// convertAddressToObject('8626 Sunny Oaks') ➞ {streetNumber: '8646', streetName: 'Sunny Oaks'}
// convertAddressToObject('5408 Villa Nueva') ➞ {streetNumber: '5408', streetName: 'Villa Nueva'}



// Count total pets
// Write a function named totalPets that accepts an array of objects where each object represents
// a person, and has a 'pets' property for their owned pets. The function should return the sum of
// every object's numPets property.
const pets = ([
    {name: 'Fernando Mendoza', pets: 1},
    {name: 'Douglas Hirsh', pets: 8},
    {name: 'Kenneth Howell', pets: 2}
])

let petNumber = pets.reduce(function(totalPet,number){
    return totalPet + number.pets;
}, 0)

console.log("number of pets: " + petNumber);