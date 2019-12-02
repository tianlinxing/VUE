<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h2>{{$store.state.count}}</h2>
    <h2>{{count}}</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {mapState, mapMutations, mapActions} from 'vuex'

export default {
  name: 'home',
  data() {
    return {
      
    }
  },
  components: {
    HelloWorld
  },
  computed: {
    ...mapState(['count']),
  },
}
</script>
