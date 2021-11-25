<template>
  <div class="singer-details">
      <MusicList :title="singer.name" :bg="singer.pic" :song="singerList"></MusicList>
  </div>
</template>

<script lang='ts'>
import {defineComponent, PropType, reactive, toRefs} from 'vue'
import { useRoute } from 'vue-router'
import {getSingerDetail, getSongsUrl, Singer} from '@/api'
import MusicList from '@/components/music-list/index.vue'
export default defineComponent({
  name: 'singerDetail',
  components:{
    MusicList
  },
  props: {
    modelValue: {
      type: Number || String,
      required:true
    },
    singer: {
        type: Object as PropType<Singer>,
        required: true
    }
  },
  setup(props) { 
   interface StateProps {
     singerList: Singer[]
   }
   const state = reactive<StateProps>({
     singerList: []
    })
    const route = useRoute()
    const methods = {
        init: async () => {
          const {code,result} = await getSingerDetail({
            mid: props.singer.mid
          })
          const {result:{map}} = await getSongsUrl({
            mid: result.songs.map(ret => ret.mid)
          })
         state.singerList = result.songs.map(ret => {
            ret.url = map[ret.mid]
            return ret
          })
         
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
.singer-details{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: black;
  z-index: 1;
}
</style>