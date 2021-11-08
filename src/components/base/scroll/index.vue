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
      }
  },
  setup(props) {
   const rootScroll = ref<HTMLElement | null>(null)
   const state = reactive({ 
    })
    const methods = {
        init: () => {}
    }
    useScroll(rootScroll, props)

   
    return { 
      ...toRefs(state),
      rootScroll,
      ...methods
    }
  }
 })
</script>

<style lang="scss" scoped>
</style>