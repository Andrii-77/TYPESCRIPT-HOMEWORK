const coursesAndDurationArray: {title: string, monthDuration: number}[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

const sort: {title: string, monthDuration: number}[] = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(sort);
console.log('');
const filter: {title: string, monthDuration: number}[] = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(filter);
console.log('');
const map: {title: string, monthDuration: number, id: number}[] = coursesAndDurationArray.map((value, index) => ({...value, id: index + 1}));
console.log(map);