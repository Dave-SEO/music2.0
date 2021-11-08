import BScroll from "@better-scroll/core"
import ObserveDOM from '@better-scroll/observe-dom'
import {ref, Ref, onMounted, onUnmounted, nextTick} from 'vue'
BScroll.use(ObserveDOM)
export default <T extends Ref, U extends object>(el: Ref | null, option: object) => {
    const scroll = ref<BScroll | null>(null)

    onMounted(() => {
        nextTick(() => {
                scroll.value = el?.value && new BScroll(el.value, {
                    observeDOM: true,
                    ...option
                })
            })
        })
        
    onUnmounted(() => {
        scroll.value?.destroy()
    })
    return {
        scroll
    }
}