/*
    32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
    • Make a list of five or more usernames called current_users.
    • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
    • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
    new username. If a username has not been used, print a message saying that the username is available.
    • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/

let current_users: string[] = ['User1', 'admin', 'user2', 'User3', 'user4', 'user5'];
let new_users: string[] = ['user12', 'Admin', 'user8', 'user3', 'user10', 'user11'];

// convert current users in lower case to match case-sensitive 
let current_users_lowercase = current_users.map((ele: string) => ele.toLowerCase());

new_users.forEach((usr) => console.log(`checking for ${usr} => ` + (current_users_lowercase.indexOf(usr.toLowerCase()) > -1 ? 'the person will need to enter a new username.' : `${usr} is available.`)));