# Vuejs

[1. Vue basics](#vue-basics)
[2. The Vue CLI](#the-view-cli)

- [Lesson 1: Introduction to the CLI](#introduction-to-the-cli)
- [Lesson 2: Components & vue files](#)
- [Lesson 3: The data() function](#)
- [Lesson 4: Nesting Components](#)
- [Lesson 5: Scoped CSS](#)
- [Lesson 6: Passing Data with Props](#)
- [Lesson 7: Custom events](#)
- [Lesson 8: Life-cycle hooks](#)
- [Lesson 9: Making request with Axios](#)
- [Lesson 10: Filters](#filters)
- [Lesson 11: Computed Properties(Custom search box)](#)

[3. The Vue Router](#the-view-router)

## Vue basics

## The Vue CLI

### Filters
Vue.js allows you to define filters that can be used to apply common text formatting. 

```html
{{message | capitalize}}
```
```js
Vue.filter('capitalize', function (value){
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
    })
})
```

### Computed properties (custom search box)
In-template expressions are very convenient, but they are meant for simple operations. Putting too much logic in your templates can make them bloated and hard to maintain. For example:

```html
<div id="example">
  {{ message.split('').reverse().join('') }}
</div>
```

```html
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>
```
```js
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    }
  }
})
```

We can use this to filter our Posts
```html
<input v-model="searchTerm" />
<div v-for='post in filteredPosts' :key='post.id'>
    <h3>{{post.title}}</h3>
    <p>{{post.body | snippet}}</p>
</div>
```
```js
export default{
name: 'Blogs',
data(){
    return{
        posts: [],
        searchTerm:''
    }
},
methods: {},
computed: {
    filteredPosts(){
        return this.posts.filter(post =>{
            // if the title is present, match will return true and the post will not be filterred
            return post.title.match(this.searchTerm)
            
        })
    }
}
``` 
## The Vue Router