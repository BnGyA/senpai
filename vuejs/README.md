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
- [Lesson 1: What is the Vue Router](#what-is-the-vue-router)
- [Lesson 2: Setting up Routes](#setting-up-routes)
- [Lesson 3: Router links](#router-links)
- [Lesson 4: Watching the $route Object](#watching-the-route-object)
- [Lesson 5: More on router Links](#more-on-router-links)
- [Lesson 6: Programmatically redirecting users](#programmatically-redirecting-users)
- [Lesson 7: Hash vs History mode](#hash-vs-history-mode)
- [Lesson 8: Styling active links](#styling-active-links)

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

### What is the Vue Router 
Vue is already a great Javascript library that allows you to create some really cool, dynamic, front-end applications. Vue is also great for single page applications (SPA). SPAs work a little differently that your standard backend web application built in something like PHP. Instead of making requests to different routes on the backend and getting a fully rendered page as a response, a SPA does all the page rendering on the front-end and only sends requests to the server when new data is needed or needs to be refreshed or saved.

This can improve the responsiveness of your web application because you can render the pages once and display them dynamically based on the current context of the application. In order to make this work, you need a way to distinguish the different views or pages from eachother. In SPAs this is done with a router. Luckily Vue has a fully supported first-party router library called vue-router.

```
// Console
vue init webpack routing
```

### Setting up Routes
***app.vue***
```html
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>
```
***router/index.js***
```js
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
```

### Router links

We are binding the to so it matches the name defined into the ***router/index.js*** and the path/href will be automatically generated

```html
<li><router-link :to="{ name: 'About'}">About</router-link></li>
```