<template>
  <div>
    <ul>
      <li v-for="m in messages" :key="m.id">
        <router-link :to="`/home/messages/detail/${m.id}`">{{m.title}}</router-link>
        <button @click="pushShow(m.id)">push查看</button>
        <button @click="replaceShow(m.id)">replace查看</button>
      </li>
    </ul>
    <button @click="$router.back()">回退</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        messages: [
          /* {id: 1, title: 'Message001'},
           {id: 3, title: 'Message003'},
           {id: 5, title: 'Message005'}*/
        ]
      }
    },

    mounted () {
      setTimeout(() => {
        const messages = [
          {id: 1, title: 'Message001'},
          {id: 3, title: 'Message003'},
          {id: 5, title: 'Message005'}
        ]
        this.messages = messages
      }, 1000)
    },

    methods: {
      pushShow (id) {
        console.info(this.$router)
        //类似与将数据从栈中剔除
        this.$router.push(`/home/messages/detail/${id}`)
      },

      replaceShow(id) {
        this.$router.replace(`/home/messages/detail/${id}`)
      }
    }
  }
</script>

<style>

</style>
