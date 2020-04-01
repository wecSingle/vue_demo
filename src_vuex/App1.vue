<template>
  <div><p>click {{count}} times, count is {{evenOrOdd}}</p>

    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>

</template>
<script>
  export default {
    mounted () {
      console.log(this.$store.state.count)
    },
    computed: {
      count () {
        return this.$store.state.count
      },
      evenOrOdd () {
        return this.$store.getters.evenOrOdd
        //return this.count % 2 === 0 ? '偶数' : '奇数'
      }
    },
    methods: {
      increment () {
        this.$store.dispatch('increment')
        //this.count++
      },
      decrement () {
        //this.count--
        this.$store.dispatch('decrement')
      },
      incrementIfOdd () {
        /*if(this.count % 2 !== 0){
          this.count++
        }*/
        this.$store.dispatch('incrementIfOdd')
      },
      incrementAsync () {
        this.$store.dispatch('incrementAsync')
        /*setTimeout(() => {
          // 提交一个mutation请求
          this.count++
        },1000)*/
      }
    }
  }
</script>

<style scoped>

</style>
