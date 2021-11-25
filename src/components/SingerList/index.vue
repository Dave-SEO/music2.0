<template>
     <Scroll 
        class="scrollList"
        :probe-type="3"
        @scroll="onScroll"
        ref="scrollRef"
        >
        <ul class="singerWrap" ref="groupRef">
            <li v-for="(item, index) in singerData" :key="index"  class="list-wrap">
                <h2 class="title">{{item.title}}</h2>
                <ul class="singerList">
                    <li v-for="singer in item.list" :key="singer" @click="selectSinger(singer)">
                        <img :src="singer.pic" >
                        <span>{{singer.name}}</span>
                    </li>
                </ul>
            </li>
        </ul>
     </Scroll>
     <div class="fixed-title" v-show="title" :style="fixedStyle">
         <span>{{title}}</span>
     </div>
     
     <ul class="shortcut" 
       @touchstart.stop.prevent="shortcutClick"
       @touchmove.stop.prevent="shortcutMove"
       @touchsend.stop.prevent
        >
         <li v-for="(item, index) in shortcut" :key="item" :data-index='index' :class="{'active': currentIndex === index}">{{item}}</li>
     </ul>
</template>

<script lang='ts'>
import {defineComponent, PropType} from 'vue'
import Scroll from '@/components/base/scroll/index.vue'
import useSinger from '@/components/SingerList/useSinger'
import useShortcut from '@/components/SingerList/shortcut'
import {SingersProps} from '@/api'

export default defineComponent({
  name: 'SingerList',
  components:{
    Scroll
  },
  props: {
    singerData: {
        type: Array as PropType<SingersProps[]>,
        default: []
    }
  },
  emits: ['select'],
  setup(props, {emit}) { 
    const {groupRef, onScroll, title, fixedStyle, currentIndex} = useSinger(props)

    const {shortcut, shortcutClick, scrollRef, shortcutMove} = useShortcut(props, groupRef)
    const selectSinger = (singer: object) => {
        emit('select', singer)
    }
    return { 
      groupRef,
      onScroll,
      title, 
      fixedStyle,
      shortcut,
      currentIndex,
      shortcutClick,
      scrollRef,
      shortcutMove,
      selectSinger
    }
  }
 })
</script>

<style lang="scss" scoped>

.scrollList{
    position: relative;
    height: 100%;
    overflow: hidden;
    background: #222;
}
.singerWrap{
    .title{
        height: 30px;
        line-height: 30px;
        padding-left: 20px;
        font-size: 12px;
        color: hsla(0,0%,100%,.5);
        background: #333;
    }
    .list-wrap{
       padding-bottom: 30px;
    }
    .singerList{
        li{
            display: flex;
            align-items: center;
            padding-left: 30px;
            padding-top: 20px;
            box-sizing: border-box;
            img{
                width: 50px;
                height: 50px;
                border-radius: 50%;
                margin-right: 20px;
            }
        }
    }
}

.fixed-title{
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    height: 30px;
    line-height: 30px;
    padding-left: 20px;
    font-size: 12px;
    color: hsla(0,0%,100%,.5);
    background: #333;
}

.shortcut{
    position: absolute;
    top: 50%;
    right: 4%;
    z-index: 1;
    transform: translateY(-50%);
    color: hsla(0,0%,100%,.5);
    font-size: 12px;
    background: rgba(0,0,0,.3);
    padding: 15px 3px;
    border-radius: 20px;
    text-align: center;
    li{
        padding: 3px;
    }
    .active{
        color: #ffcd32;
    }
}
</style>