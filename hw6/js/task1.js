import users from './users.js'


// const log = array => console.log(array)


// const getUserNames = users.map(user => {
//     return user.name
// });


const getUserNames = users => {
    return users.map(user => user.name)
}

console.log(getUserNames(users))