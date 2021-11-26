<template>
  <div class="music-list">
      <header class="header">
          <i class="icon-back" v-goBack></i>
          <h1>{{title}}</h1>
      </header>
      <div class="banner" ref="bannerWrap" :style="[{'background-image': `url(${bg})`}, bannerComputed]">
          <div class="filter" :style="backdropFilter"></div>
      </div>
     <Scroll class="muisc-scroll-wrap"  :style="musicWrapTop" :probeType="3" @scroll="scroll">
        <SongList :song='song'></SongList>
     </Scroll>
  </div>
</template>

<script lang='ts'>
import {defineComponent, PropType, reactive, toRefs, ref, computed} from 'vue'
import Scroll from '@/components/base/scroll/index.vue'
import SongList from '@/components/song-list/index.vue'
import { Singer } from '@/api'
const HEADERHEIGHT = 50
export default defineComponent({
  name: 'music-list',
  components:{
      Scroll, SongList
  },
  props: {
    title: {
        type: String,
        required: true
    },
    bg: {
        type: String,
        required: true
    },
    song: {
        type: Array as PropType<Singer[]>,
        required: true
    },
    modelValue: {
      type: Number || String,
      required:true
    },
  },
  setup() { 
   const state = reactive({
       scrollY: 0
    })
    const bannerWrap = ref<null | HTMLElement>(null)
     
    const scroll = (pos: {x: number, y:number}) => {
        state.scrollY = -pos.y
    }
    const bannerComputed = computed(() => {
       const MoveHeight = bannerWrap.value?.clientHeight && bannerWrap.value.clientHeight - HEADERHEIGHT || 0
        let zIndex = 0
        let height = '0'
        let paddingTop = '70%'
        let scale = 1
        // safari浏览器不支持添加transform的z-index，需要添加translateZ做兼容
        let translateZ = 0
      
        if(state.scrollY > MoveHeight){
            zIndex = 1
            height = `${HEADERHEIGHT}px`
            paddingTop = '0'
            translateZ = 1
        }
        // 向下滑动
        if(state.scrollY < 0){
            scale = 1 + Math.abs(state.scrollY / (bannerWrap.value?.clientHeight || 0))
        }
        return {
            zIndex,
            height,
            paddingTop,
            transform: `scale(${scale})translateZ(${translateZ}px)`
        }
    })

    const backdropFilter = computed(() => {
        let drop = 0
        let bannerHeight = bannerWrap.value?.clientHeight || 0
        // 向上滚动
        if(state.scrollY > 0){
            drop = Math.min((bannerWrap.value?.clientHeight || 0 - HEADERHEIGHT) / bannerHeight ,state.scrollY / bannerHeight) * 20
        }
        return {
            backdropFilter: `blur(${drop}px)`
        }
    }) 
    const musicWrapTop = computed(() => {
       return  {
           top: bannerWrap.value?.clientHeight? bannerWrap.value.clientHeight + 'px': 0
       }
    })
    return { 
      ...toRefs(state),
      bannerWrap,
      musicWrapTop,
      scroll,
      bannerComputed,
      backdropFilter
    }
  }
 })
</script>

<style lang="scss" scoped>
.music-list{
    position: relative;
    height: 100%;
    .header{
        width: 100%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        z-index: 9999;
        transform: translateZ(2px);
        .icon-back{
            padding-left: 20px;
            position: absolute;
            left: 0;
            color: #ffcd32;
        }
    }
    .banner{
        width: 100%;
        position: relative;
        background-size: cover;
        .filter{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(7,17,27,.4);
            backdrop-filter: blur(0px);
        }
    }
    .muisc-scroll-wrap{
        width: 100%;
        // overflow: hidden;
        position: absolute;
        left: 0;
        bottom: 0;
    }
}

</style>