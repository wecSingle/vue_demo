<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!--   自定义事件（用于实现组件间的通信） addTodos，通过 @addTodos="addTodos" 的方式给标签TodoHeader添加自定义事件 -->
      <!--<TodoHeader @addTodos="addTodos"/>-->
      <!--通过$on()函数为标签绑定事件-->
      <TodoHeader ref="header"/>
      <TodoList :todos="todos" />
      <!--<todo-footer :todos="todos" :delCompTodos="delCompTodos" :selectAllTodos="selectAllTodos"/>-->
      <todo-footer>
        <input type="checkbox" v-model="isAllCheck" slot="checkAll"/>
        <span slot="count">已完成{{completeSize}} / 全部{{todos.length}}</span>
        <button class="btn btn-danger" v-show="completeSize" @click="delCompTodos" slot="delete">清除已完成任务</button>
      </todo-footer>
    </div>
  </div>
</template>

<!--组件中通信的三种方式
1.props
2.自定义事件
3.订阅发布
4.slot:传递标签数据
-->
<script>
  import PubSub from 'pubsub-js'
  import TodoHeader from './components/TodoHeader'
  import TodoList from './components/TodoList'
  import TodoFooter from './components/TodoFooter'

  import storageUtil from './util/storageUtil'
  export default {
    data () {
      return {
        todos: storageUtil.readTodos()
        /*[
          {title:'吃饭',complete:false},
          {title:'睡觉',complete:true},
          {title:'coding',complete:false},
          ]*/
      }
    },
    computed: {
      completeSize () {
        return this.todos.reduce((preTotal,todo) => preTotal + (todo.complete ? 1 : 0),0)
      },
      isAllCheck: {
        get(){
          return this.completeSize === this.todos.length && this.completeSize > 0
        },
        set(value){
          this.selectAllTodos(value)
        }
      }
    },
    name: 'App',
    mounted () {  //执行异步代码
      //this.$on('addTodos',this.addTodos)    此写法为：为标签App绑定事件
      this.$refs.header.$on('addTodos',this.addTodos)

      //npm install --save pubsub-js在使用订阅/发布事项组件中通信时，需要执行该操作来安装pubsub
      //订阅消息====绑定事件
      PubSub.subscribe('deleteTodo',(msg,index) => {
        this.deleteTodo(index)
      })
    },
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
        /*handler: function (value) {
          storageUtil.saveTodos(value)
        }*/
        handler: storageUtil.saveTodos
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
