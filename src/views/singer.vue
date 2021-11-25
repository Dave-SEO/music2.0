<template>
  <div class="singer-wrap">
    <SingerList :singerData="singerData" v-if="singerData" @select="selectSinger"></SingerList>
    <router-view :singer='singerdetail'></router-view>
  </div>
</template>

<script lang='ts' >
import {defineComponent, ref} from 'vue'
import {getSinger, SingersProps, Singer} from '@/api'
import SingerList from '@/components/SingerList/index.vue'
import { useRouter } from 'vue-router'

export default defineComponent({
 name: 'singer',
 setup(){
    const singerData = ref<SingersProps[]>([])
    const singerdetail = ref<null | Singer>(null)
    const router = useRouter()
    const methods = {
      init: () => {
        getSinger().then(res => {
          singerData.value = res.result.singers
        })
      },
      selectSinger(singer: Singer){
        singerdetail.value = singer
        router.push({
          path: `/singer/${singer.mid}`
        })
      }
    }
    methods.init()

    return {
      singerData,
      singerdetail,
      ...methods
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
