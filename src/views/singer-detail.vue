<template>
  <div>
      详情页
  </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs} from 'vue'
import { useRoute } from 'vue-router'
export default defineComponent({
  name: 'singerDetail',
  components:{

  },
  props: {
    modelValue: {
      type: Number || String,
      required:true
    },
  },
  setup() { 
   const state = reactive({ 
    })
    const route = useRoute()
    const methods = {
        init(){
            console.log('params', route.params)
        }
    }
    methods.init()
    return { 
      ...toRefs(state),
      ...methods
    }
  }
 })
</script>

<style lang="scss" scoped>
</style>