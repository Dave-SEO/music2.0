<template>
    <div>
      <Silder :slider="sliders" v-if="sliders.length"></Silder>
    </div>
</template>
<script lang='ts'>
import {defineComponent, onMounted, reactive, toRefs} from 'vue'
import Silder from '@/components/base/slider/index.vue'
import {getRecommend, SlidersProps} from '@/api'
interface StateProps {
  sliders: SlidersProps[]
}
export default defineComponent({
   name: 'recommend',
   components:{ 
     Silder
   }, 
   setup() {
     const state = reactive<StateProps>({
       sliders: []
     })
     const methods = {
       init: async () => {
         const {code, result: {sliders}} =  await getRecommend()
         state.sliders = sliders
       }
     }
     methods.init()
     return { 
       ...toRefs(state)
     }
   }
   })
</script>
<style lang='scss' scoped>
</style>