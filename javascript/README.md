# Modern Javascript

## S03: Basics

### S03E18-19: Variable scope

Javascript uses lexical scope (static scope)
There is 2 scope :
- global scope : defined outside of all code blocks
- local scope : defined inside a code block
In a scope you can access var defined inside this scope or any parent scope

```js
// Global scope
    // Local
        // Local
    // Local


if name = "ben";

if(true){
    let name = "madi";
    if(true){
        console.log(name);
    }
}

if(true){

}


// -> this will input madi because the function is shadowing the parent var
```


### S04: Functions

### S04E: