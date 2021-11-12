
import {SingersProps} from '@/api'
import {computed, Ref, ref} from 'vue'
import BScroll from "@better-scroll/core"
interface DataProps{
    singerData: SingersProps[]
}
const useShortcut = (props: DataProps, groupRef: Ref<HTMLElement | null>, ) => {
    const scrollRef = ref<HTMLElement | null>(null)
   const shortcut = computed(() => {
     return props.singerData.map(ret => {
         return ret.title
     })
   })

    const shortcutClick = (e: MouseEvent) => {
        const el = e.target as HTMLElement
        const index = Number(el.dataset.index)
        const currentElement = groupRef.value && groupRef.value.children[index] as HTMLElement
        //  BScroll 实例对象
        const BScrollInstance = (scrollRef.value?.scroll as any) as BScroll
        currentElement && BScrollInstance.scrollToElement(currentElement, 0, 0, 0)
    }

    const shortcutMove = (e:TouchEvent) => {
        console.log(e.touches[0])
    }

    return {
        shortcut,
        shortcutClick,
        scrollRef,
        shortcutMove
    }
}

export default useShortcut