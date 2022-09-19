const friends = [12, 23, 34, 45, 56, 67, 78, 98, 76, 65, 54, 43, 43, 32, 21];
const partOfFriends = friends.splice(3, 10, 111,222);
console.log(partOfFriends);
console.log(friends);