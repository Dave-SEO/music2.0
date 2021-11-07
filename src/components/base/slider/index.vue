<template>
   <div class="slider" ref="rootRef" >
    <div class="slider-group" >
      <div class="slider-page" v-for="item in slider" :key="item.id" >
        <a :href="item.link">
          <img :src="item.pic"/>
        </a>
      </div>
    </div>
    <div class="dots-wrapper">
        {{currentPageIndex}}
      <span
        class="dot"
        v-for="(item, index) in slider"
        :key="item.id"
        :class="{'active': currentPageIndex === index}"> -->
     </span>
    </div>
  </div>
</template>
<script lang='ts'>
import {defineComponent, PropType, reactive, ref, toRefs} from 'vue'
import useSlider from './useSlider'
import {SlidersProps} from '@/api'
export default defineComponent({
   name: 'slider',
   components:{ 
   },
   props: {
       slider: {
           type: Array as PropType<SlidersProps[]>,
           default: []
       }
   },
   setup(props) {
    const rootRef = ref<HTMLElement | null>(null)
    const {slider, currentPageIndex} = useSlider(rootRef)
     const state = reactive({
     })
     const methods = {
         init(){
           
         }
     }
     methods.init()
     return { 
       ...toRefs(state),
       rootRef,
       currentPageIndex,
       ...methods
     }
   }
   })
</script>
<style lang='scss' scoped>
  .slider {
   min-height: 1px;
    font-size: 0;
    touch-action: pan-y;
    position: relative;
    .slider-group {
     position: relative;
      overflow: hidden;
      white-space: nowrap;
      .slider-page {
        width: 100%;
        display: inline-block;
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
        a {
          display: block;
          width: 100%;
        }
        img {
          display: block;
          width: 100%;
        }
      }
    }
    .dots-wrapper {
      position: absolute;
      left: 50%;
      bottom: 12px;
      line-height: 12px;
      transform: translateX(-50%);
      .dot {
        display: inline-block;
        margin: 0 4px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: $color-text-l;
        &.active {
          width: 20px;
          border-radius: 5px;
          background: $color-text-ll;
        }
      }
    }
  }
</style>