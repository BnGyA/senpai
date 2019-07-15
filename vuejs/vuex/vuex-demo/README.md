https://www.techiediaries.com/vuex-tutorial/


We use the Vuex.Store method to create a store. It takes different properties, such as:

state: this object contains the actual state of the application i.e any variables and array etc.
mutations: this object contains the methods that will be used to mutate the state,
actions: this object contains methods that call the mutation methods.

Mutations
Mutations are functions that enable you to mutate and upsate the state in a Vuex store. These function can not be called directly but instead they need to be committed using the .commit('mutation') of the Vuex store.

Mutations are synchronous functions.

Actions
Actions are functions that can be used to commit the mutations.

Actions can do asynchronous operations.

