// array of users that are online in a group chat
const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

switch (users.length) {
    // the users array is empty
    case 0:
        console.log("no one is online");
        break;

    // If there is 1 user
    case 1:
        console.log(`${users[0]} is online`);
        break;

    // If there are 2 users
    case 2:
        console.log(`${users[0]} and ${users[1]} are online`);
        break;

    // If there are more than 2 users
    default:
        console.log(`${users[0]}, ${users[1]} and ${users.length - 2} are online`);
        break;
}