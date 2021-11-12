import BScroll from "@better-scroll/core"
import ObserveDOM from '@better-scroll/observe-dom'
import {ref, Ref, onMounted, onUnmounted, nextTick} from 'vue'
BScroll.use(ObserveDOM)
export default < U extends object, V >(option: any, emit: any) => {
    const scroll = ref<BScroll | null>(null)
    const rootScroll = ref<HTMLElement | null>(null)
        nextTick(() => {
                scroll.value = rootScroll.value && new BScroll(rootScroll.value, {
                    observeDOM: true,
                    ...option
                })
                if(option.probeType > 0){
                    scroll.value?.on('scroll', (posi: {x: number,y: number}) => {
                        emit('scroll', posi)
                    })
                }
        })
        
    onUnmounted(() => {
        scroll.value?.destroy()
    })
    return {
        scroll,
        rootScroll
    }
}