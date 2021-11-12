<template>
  <div class="singer-wrap">
    <SingerList :singerData="singerData" v-if="singerData"></SingerList>
  </div>
</template>

<script lang='ts' >
import {defineComponent, ref} from 'vue'
import {getSinger, SingersProps} from '@/api'
import SingerList from '@/components/SingerList/index.vue'
export default defineComponent({
 name: 'singer',
 setup(){
    const singerData = ref<SingersProps[]>([])
    const methods = {
      init: () => {
        getSinger().then(res => {
          singerData.value = res.result.singers
        })
      }
    }
    methods.init()

    return {
      singerData
    }
 },
 components: {
   SingerList
 }
})
</script>

<style lang="scss" scoped>
.singer-wrap{
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
  overflow: hidden;
}
</style>
