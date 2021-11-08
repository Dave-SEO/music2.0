<template>
  <div>
    home
  </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs} from 'vue'
import {useStore} from '../store'
import axios from 'axios'
export default defineComponent({
  name: 'home',
  components:{

  },
  props: {
  },
  setup() { 
   const state = reactive({ 
    })
    // const store = useStore()
    axios.get('/api/getRecommend').then(res => {})
    return { 
      ...toRefs(state) 
    }
  }
 })
</script>

<style lang="scss" scoped>
</style>