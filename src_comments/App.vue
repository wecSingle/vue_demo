<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
    <!--  通过标签属性的方式实现组件中的通信 -->
      <Add :addComments="addComments"/>
      <List :comments="comments" :delComments="delComments"/>
    </div>
  </div>
</template>

<script>
  import Add from './components/Add'
  import List from './components/List'
  export default {
    data () {
      return {
        comments: [ //数据在哪个属性中，更新数据的行为（方法）就应该定义在哪个方法中
          {
            name: 'Bob',
            content: 'Vue 还不错'
          },
          {
            name: 'Cat',
            content: 'Vue So Easy'
          },
          {
            name: 'BZ',
            content: 'Vue So So'
          }
        ]
      }
    },
    methods: {
      // 添加评论
      addComments (comment) {
        this.comments.unshift(comment)
      },
      //删除评论
      delComments (index){
        this.comments.splice(index,1)
      }
    },
    components: {
      Add,
      List
    }
  }
</script>

<style scoped>

</style>
