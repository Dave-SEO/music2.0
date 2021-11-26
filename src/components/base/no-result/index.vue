<template>
  <div class="no-result">
      无数据
  </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs} from 'vue'
export default defineComponent({
  name: 'noResult',
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
    return { 
      ...toRefs(state) 
    }
  }
 })
</script>

<style lang="scss" scoped>
.no-result{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    background: #000;
}
</style>