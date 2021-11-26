<template>
  <div class="song" v-no-result='resultData'>
      <ul class="list">
          <li v-for="item in song" :key="item.id">
              <h2 class="name">{{item.name}}</h2>
              <p class="desc">{{item.singer}}</p>
          </li>
      </ul>
  </div>
</template>

<script lang='ts'>
import {computed, defineComponent, PropType, reactive, toRefs} from 'vue'
import {Singer} from '@/api'
export default defineComponent({
  name: 'song-list',
  components: {

  },
  props: {
    song: {
        type: Array as PropType<Singer[]>,
        required: true
    },
    modelValue: {
      type: Number || String,
      required:true
    },
  },
  setup(props) { 
   const state = reactive({
       text: '无数据了'
    })
    const resultData = computed(() => {
        return props.song? false : true
    })
    return { 
      ...toRefs(state),
      resultData
    }
  }
 })
</script>

<style lang="scss" scoped>
.song{
    width: 100%;
    background: #000;
    .name{
        color: #fff;
    }
    .desc{
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        margin-top: 4px;
        color: hsla(0,0%,100%,.3);
    }
    .list{
        padding: 20px;
        box-sizing: border-box;
        li{
            padding: 10px 0;
            box-sizing: border-box;
        }
    }
}
</style>