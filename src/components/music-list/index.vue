<template>
  <div class="music-list">
      <header class="header">
          <i class="icon-back" v-goBack></i>
          <h1>{{title}}</h1>
      </header>
      <div class="banner" ref="bannerWrap" :style="{'background-image': `url(${bg})`, 'background-size': 'cover'}">
          <div class="filter"></div>
      </div>
     <Scroll class="muisc-scroll-wrap"  :style="{top: musicWrapTop}">
        <SongList :song='song'></SongList>
     </Scroll>
  </div>
</template>

<script lang='ts'>
import {defineComponent, PropType, reactive, toRefs, ref, computed} from 'vue'
import Scroll from '@/components/base/scroll/index.vue'
import SongList from '@/components/song-list/index.vue'
import { Singer } from '@/api'
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
    })
    const bannerWrap = ref<null | HTMLElement>(null)
    const musicWrapTop = computed(() => {
        console.log(bannerWrap.value?.offsetHeight)
       return  bannerWrap.value?.offsetHeight? bannerWrap.value.offsetHeight + 50 + 'px': 0
    })
    return { 
      ...toRefs(state),
      bannerWrap,
      musicWrapTop
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
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        z-index: 1;
        .icon-back{
            padding-left: 20px;
            position: absolute;
            left: 0;
            color: #ffcd32;
        }
    }
    .banner{
        width: 100%;
        height: 0;
        padding-top: 70%;
        position: relative;
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
        overflow: hidden;
        position: absolute;
        left: 0;
        bottom: 0;
    }
}

</style>