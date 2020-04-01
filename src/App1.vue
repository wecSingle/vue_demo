<template>
  <div>
    <div v-if="!repoUrl">loading</div>
    <div v-else>most star repo is <a :href="repoUrl">{{repoName}}</a></div>
  </div>
</template>


<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        repoUrl: '',
        repoName: ''
      }
    },
    mounted () {
      const url = `https://api.github.com/search/repositories?q=vu&sort=stars`
      //resource的方式
      /*this.$http.get(url).then(
        (response) => {
          // success callback
          console.log(response.data) //返回结果数据
          const result = response.data
          this.repoName = result.items[0].name
          this.repoUrl = result.items[0].owner.html_url
        },
        (response) => {
          // error callback
          alert('访问失败')
        })*/
      //axios的方式
      axios.get(url).then(
        response => {
          console.log(response.data) // 得到返回结果数据
          const result = response.data
          this.repoName = result.items[0].name
          this.repoUrl = result.items[0].owner.html_url
        }).catch(error => {
          alert('获取失败')
          console.log(error.message)
        })
    }
  }
</script>

<style scoped>

</style>
