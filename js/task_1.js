
import users from './users.js';



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
//   return users.find((user)=>user.email === email)
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


// const totalSkills = users.reduce(function (skills, user) {
//  return [...skills,... user.skills];
// }, []);

// console.log(totalSkills);

//  const getSortedUniqueSkills = totalSkill.filter((skill, index) => {
//   return totalSkill.indexOf(skill) === index;
//  }).sort();
// console.log(getSortedUniqueSkills);
