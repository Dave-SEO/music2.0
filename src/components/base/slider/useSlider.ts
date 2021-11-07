import BScroll from '@better-scroll/core'
import Slide from '@better-scroll/slide'
import { onActivated, onDeactivated, onMounted, onUnmounted, ref, Ref } from 'vue'
BScroll.use(Slide)

export default (el: Ref<HTMLElement | null>)  => {
    const slider = ref<BScroll | null>(null)
    const currentPageIndex = ref<number>(0)
    onMounted(() => {
        const sliderVal = slider.value = el.value && new BScroll(el.value, {
                    click: true,
                    scrollX: true,
                    scrollY: false,
                    momentum: false,
                    bounce: false,
                    probeType: 2,
                    slide: true
           })
           
           sliderVal?.on('slideWillChange', (page: MouseEvent) => {
                currentPageIndex.value = page.pageX
            })
    })
    onActivated(() => {
        slider.value?.enable()
        slider.value?.refresh()
      })
    
      onDeactivated(() => {
        slider.value?.disable()
      })
    onUnmounted(() => {
        slider.value?.destroy()
    })
    return {
        slider,
        currentPageIndex
    }
}