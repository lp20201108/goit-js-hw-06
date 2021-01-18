
 import users from './js.users.js';



//  const users = [
//   {
//     id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     id: '249b6175-5c30-44c6-b154-f120923736f5',
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     id: '150b00fb-dd82-427d-9faf-2879ea87c695',
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     id: 'e1bf46ab-7168-491e-925e-f01e21394812',
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];

// 1.Получить массив имен всех пользователей (поле name).


// const getUserNames = users => {
//    return users.map(function (user) {
//    return user.name;
// })
// };

// console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// //2 Получить массив объектов пользователей по цвету глаз (поле eyeColor).

// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(user => user.eyeColor === color);
// };

// console.log(getUsersWithEyeColor(users, 'blue'));


// //3.Получить массив имен пользователей по полу (поле gender).

// const getUsersWithGender = (users, gender) => {
//   return users.filter(function (user) {
//  return user.gender === gender;
//  }); 
// };

// console.log(getUsersWithGender(users, 'male'));


// //4.Получить массив только неактивных пользователей (поле isActive).

// const getInactiveUsers = users => {
//   return users.filter(function (user) {
//   return !user.isActive;
// });
// };

// console.table(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]



// // //5. Получить пользоваля (не массив) по email (поле email, он уникальный).


// const getUserWithEmail = (users, email) => {
//   return users.find(function (user, email){
//     return user.email === email
//   });
// };

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com'));

// //6.Получить массив пользователей попадающих в возрастную
// //категорию от min до max лет(поле age).

// const getUsersWithAge = (users, min, max) => {
//   return users.filter(function (user) {
//   return user.age > min &&  user.age < max;
// });
// };

// console.log(getUsersWithAge(users, 20, 30));
// // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
// console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]


// //7.Получить общую сумму баланса (поле balance) всех пользователей.

// const calculateTotalBalance = users => {
//   return users.reduce(function (balance, user) {
//  return balance + user.balance
//  }, 0);
// };

// console.log(calculateTotalBalance(users));  // 20916


// // //8.Массив имен всех пользователей у которых есть друг с указанным именем.
// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(function ({ friends }) {
//     return friends.includes(friendName)
     
//   });
// };


// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]


// //9.Массив имен (поле name) людей, отсортированных в зависимости от 
// //количества их друзей(поле friends)

// const getNamesSortedByFriendsCount = 
// console.log(getNamesSortedByFriendsCount);

// const getNamesSortedByFriendsCount = users => {
//  return [...users].sort((firstUser, secondUser) =>
//  firstUser.friends.length - secondUser.friends.length)
//  .map((user) => user.name);

// };

// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
  

// //10. Получить массив всех умений всех пользователей (поле skills), при этом не
// //должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

// const getSortedUniqueSkills = users => {
  
// };

// console.log(getSortedUniqueSkills(users));


// const totalSkills = users.reduce(function (skills, user) {
//   return skills + user.skills;
//  },[]);

// console.log(totalSkills);


// let totalSkill =  ['ipsum','lorempto','adipisicing', 'amet', 'adipisicing', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident','proident', 'tempor', 'velit', 'veniam' ]

// const uniqueSkills = totalSkill.filter((skill, index) => {
//   return totalSkill.indexOf(skill) === index;
// }).sort();
// console.log(uniqueSkills);