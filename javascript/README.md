# Modern Javascript

## S02: Javascript language fundamentals

- Primitive data types:
Stored directly in the location the variable accesses
Stored on the stack

-> String, number, boolean, null, undefined & symbols (es6)

- Reference data types:
Accessed by reference
Objects that are stored on the heap
A pointer to a location in memory

-> Arrays, object literals, functions, dates, anything else

### Numbers & math methods

val = Math.round(2.4); // log 2
val = Math.ceil(2.4); // log 3
val = Math.floor(2.8); // log 2
val = Math.sqrt(64); // log 8
val = Math.pow(8); // log 64
val = Math.min(2, -2, 44); // log -2
val = Math.max(2, -2, 44); // log 44
val = Math.random(); // log a random number btween 0 & 1
val = Math.random() * 20; // log a random number between 0 & 20 with decimals
val = Math.random() * 20 + 1 // log a random number between 1 & 20 with decimals

### Strings methods
### Template Literals



` Without template strings (es5); `

```
const name = 'John';
const age = 18;
const job = 'Developer';
const city = "Miami";
let html;

html = '<ul><li>Name: ' + name + '</li><li>Job: ' + job + '</li><li>City ' + city  + ' </li></ul>';
// OR

html = '<ul>' +
       '<li>Name: ' + name + '</li>' +
       '<li>Job: ' + job + '</li>' +
       '<li>City: ' + city + '</li>' +
       '</ul>'
```


` With template strings (es6+); `

```
const name = 'John';
const age = 18;
const job = 'Developer';
const city = "Miami";
let html;
function hello(){
    return 'hello';
}
html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Name: ${job}</li>
        <li>Name: ${city}</li>
        <li>${2+2}</li>
        <li>${hello()}</li>
        <li>${age > 30 ? 'over 30' : 'Under 30'}</li>
    </ul>
`
```



### Objects

```
const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 36,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function(){
    return 2017 - this.age;
  }
}

let val;

val = person;
// Get specific value
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);

const people = [
  {name: 'John', age: 30},
  {name: 'Mike', age: 23},
  {name: 'Nancy', age: 40}
];

for(let i = 0; i < people.length; i++){
  console.log(people[i].name);
}
```