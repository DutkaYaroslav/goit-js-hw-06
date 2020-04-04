import users from './users.js';

// Получить массив имен пользователей по полу (поле gender).

const getUsersWithGender = (users, gender) => {
    return users
        .filter(user => {
            return user.gender === gender;
        })
        .map(user => user.name);
    // твой код
};

console.log(getUsersWithGender(users, 'male')); //
