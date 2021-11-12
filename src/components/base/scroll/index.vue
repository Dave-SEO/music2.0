<template>
  <div ref="rootScroll">
      <slot></slot>
  </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, ref, toRefs} from 'vue'
import useScroll from './useScroll'
export default defineComponent({
  name: 'scroll',
  components:{

  },
  props: {
      click: {
          type: Boolean,
          default: true
      },
      probeType: {
          type: Number,
          default: 1
      }
  },
  emits: ['scroll'],
  setup(props, {emit}) {
   
   const state = reactive({ 
    })
    const methods = {
        init: () => {}
    }
    
    const {rootScroll, scroll} = useScroll(props, emit)
   
    return { 
      ...toRefs(state),
      rootScroll,
      ...methods,
      scroll
    }
  }
 })
</script>

<style lang="scss" scoped>
</style>