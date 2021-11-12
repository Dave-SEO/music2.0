import {Ref, ref, nextTick, computed} from 'vue'
import {SingersProps} from '@/api'
const TITLE_HEIGHT = 30
const useSinger = (props: any) => {
  const groupRef = ref<HTMLElement | null>(null)
  const listHeightsVal = ref<number[]>([])
  const title = ref<string>('')
  const distance = ref<number>(0)
  const currentIndex = ref<number>(0)
  // 算每个元素的区间
  function calculate(){
     let height = 0
     listHeightsVal.value.push(height)
     const list = groupRef.value?.children as ArrayLike<Element>
     Array.from(list).forEach(ret => {
       height += ret.clientHeight
       listHeightsVal.value.push(height)
     })
  }

  nextTick(() => {
    setTimeout(() => {
      calculate()
    }, 300)
  })

  const fixedStyle = computed(() => {
    const distanceVal = distance.value
   
    const diff = (distanceVal > 0 && distanceVal < TITLE_HEIGHT) ? distanceVal - TITLE_HEIGHT: 0
   
    return {
      transform: `translate3d(0, ${diff}px, 0)`
    }
  })

  function position_title(scrollY: number){
    if(scrollY < 0) title.value = ''
    const height = listHeightsVal.value
   
    for(let i = 0; i < height.length - 1 ; i ++ ){
      const top = height[i]
      const bottom = height[i + 1]
      if(scrollY >= top && scrollY <= bottom){
        title.value = (props.singerData[i] as SingersProps).title
        currentIndex.value = i
        distance.value = bottom - scrollY
      }
    }
  }

  function onScroll(pos: {x: number, y: number}){
    position_title(-pos.y)
  }
  return {
    groupRef,
    onScroll,
    title,
    fixedStyle,
    currentIndex
  }
}

export default useSinger