function printOfUsers(usersArray: {id: number, firstName: string, age: number}[]): void {
    for (const user of usersArray) {
        document.write(`<div>${user.id} ${user.firstName} ${user.age}</div>`);
    }
}

printOfUsers([
    {id: 1, firstName: 'Andrii', age: 47},
    {id: 2, firstName: 'Lesia', age: 46},
    {id: 3, firstName: 'Andrii', age: 19},
    {id: 4, firstName: 'Dmytro', age: 22},
    {id: 5, firstName: 'Pavlo', age: 29},
])