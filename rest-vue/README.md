# Rest-vue

### APP
Create a new vue-js app with vuetify

```
vue create projectname
```

Use the router babel & linter, use history mode (no # in the url), ESLint with error prevention only, lint on save, in package.json

Before installing vuetify, you have to init the project 

```
vue add vuetify
```

Install axios to fetch data from the API

```
yarn add axios
```


```js
axios.get('http://127.0.0.1:8000/api/article/').then((res) =>{      
    console.log(res)
})
```
Tadam!