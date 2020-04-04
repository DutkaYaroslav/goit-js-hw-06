import users from './users.js';

// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

const getNamesSortedByFriendsCount = users => {
    return users.sort((user1, user2) => user1.friends.length - user2.friends.length).map(user => user.name);
    // твой код
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharle