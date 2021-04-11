// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'Cory',
//     age: 33,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };

enum Role {ADMIN, READ_ONLY, AUTHOR};

const person = {
    name: 'Cory',
    age: 33,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase())
}

if (Role.ADMIN === person.role) {
    console.log('IS ADMIN')
}