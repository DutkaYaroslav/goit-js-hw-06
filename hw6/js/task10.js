// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
import users from './users.js';

const getSortedUniqueSkills = users => {
    const newArray = [];
    users.forEach((user, ind) => newArray.push(...user.skills));
    return newArray.filter((el, ind, arr) => arr.indexOf(el) === ind).sort();



};

console.log(getSortedUniqueSkills(users));