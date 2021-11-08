<template>
    <div>
      <div v-loading:[loadingText]='loading'>
           <Silder :slider="sliders" v-if="sliders.length"></Silder>
            <Scroll class="scroll-wrap" v-if="sliders.length">
                <div class="recommend-list" >
                    <h1 class="list-title">热门歌单推荐</h1>
                      <ul>
                        <li
                          v-for="item in albums"
                          class="item"
                          :key="item.id"
                        >
                          <div class="icon">
                            <img width="60" height="60"  v-lazy="item.pic">
                          </div>
                          <div class="text">
                            <h2 class="name">
                              {{ item.username }}
                            </h2>
                            <p class="title">
                              {{item.title}}
                            </p>
                          </div>
                        </li>
                      </ul>
                  </div>
            </Scroll>
      </div>
    </div>
</template>
<script lang='ts'>
import {computed, defineComponent, reactive, toRefs, ref} from 'vue'
import Silder from '@/components/base/slider/index.vue'
import Scroll from '@/components/base/scroll/index.vue'
import {getRecommend, SlidersProps, AlbumsProps} from '@/api'
interface StateProps {
  sliders: SlidersProps[];
  albums: AlbumsProps[];
  loadingText: string;
}
export default defineComponent({
   name: 'recommend',
   components:{ 
     Silder,
     Scroll
   }, 
   setup() {
     const state = reactive<StateProps>({
       sliders: [],
       albums: [],
       loadingText: '加载中。。。'
     })
     const methods = {
       init: async () => {
         const {code, result: {sliders, albums}} =  await getRecommend()
         state.sliders = sliders
         state.albums = albums
       }
     }
     methods.init()

    const loading = computed(() => {
       return state.sliders.length === 0 && state.albums.length === 0
     })
     return { 
       ...toRefs(state),
       loading,
     }
   }
   })
</script>
<style lang='scss' scoped>
.scroll-wrap{
  position: relative;
  height: calc(100vh - 88px - 150px);
  overflow: hidden;
}
  .recommend-list {
        .list-title {
          height: 65px;
          line-height: 65px;
          text-align: center;
          font-size: $font-size-medium;
          color: $color-theme;
        }
        .item {
          display: flex;
          box-sizing: border-box;
          align-items: center;
          padding: 0 20px 20px 20px;

          .icon {
            flex: 0 0 60px;
            width: 60px;
            padding-right: 20px;
          }
          .text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex: 1;
            line-height: 20px;
            overflow: hidden;
            font-size: $font-size-medium;
          }
          .name {
            margin-bottom: 10px;
            color: $color-text;
          }
          .title {
            color: $color-text-d;
          }
        }
      }
</style>