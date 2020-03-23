<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodos="addTodos"/>
      <TodoList :todos="todos" :deleteTodo="deleteTodo"/>
      <todo-footer :todos="todos" :delCompTodos="delCompTodos" :selectAllTodos="selectAllTodos"/>
    </div>
  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader'
  import TodoList from './components/TodoList'
  import TodoFooter from './components/TodoFooter'
  export default {
    data () {
      return {
        todos: JSON.parse(window.localStorage.getItem("todos_key") || '[]')
        /*[
          {title:'吃饭',complete:false},
          {title:'睡觉',complete:true},
          {title:'coding',complete:false},
          ]*/
      }
    },
    name: 'App',
    methods: {
      addTodos (todo) {
        this.todos.unshift(todo)
      },
      deleteTodo (index){
        this.todos.splice(index,1)
      },
      delCompTodos () {
        this.todos = this.todos.filter(todo => !todo.complete)
      },
      selectAllTodos (check){
        this.todos.forEach(todo => todo.complete = check)
      }
    },
    watch: {
      todos: {    //深度监视
        deep: true,
        handler: function (value) {
          window.localStorage.setItem('todos_key',JSON.stringify(value))
        }
      }
    },
    components: {
      TodoHeader,
      TodoList,
      TodoFooter
    }
  }
</script>

<style scoped>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
