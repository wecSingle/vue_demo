<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-show="comments.length === 0">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <Item v-for="(comment,index) in comments" :key="index" :comment="comment"
      :delComments="delComments" :index="index"/>
    </ul>
  </div>
</template>

<script>
  import Item from './Item'
  export default {
    name: 'List',
    //声明接收属性：这个属性就会成为属性对象的属性
    props: ['comments','delComments'],  //只指定了属性名
    components: { Item }
  }
</script>

<style scoped>
  .reply {
    margin-top: 0px;
  }
</style>
