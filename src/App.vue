<template>
  <div>
    <Header></Header>
    <Tab></Tab>
    <router-view></router-view>
  </div> 
</template>

<script lang="ts">
import { defineComponent, reactive, toRaw } from 'vue'
import Header from '@/components/header/header.vue'
import Tab from '@/components/tab/tab.vue'
export default defineComponent({
  name: 'App',
  setup(){
    const state = reactive({
      a: 1234556
    })
    return {
      ...toRaw(state)
    }
  },
  components: {
    Tab,
    Header
  }
})
</script>

<style lang='scss'>

</style>
