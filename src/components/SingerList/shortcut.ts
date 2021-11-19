
import {SingersProps} from '@/api'
import {computed, Ref, ref} from 'vue'
import BScroll from "@better-scroll/core"
interface DataProps{
    singerData: SingersProps[]
}

/**
 * 
 * @description 联系人右侧快捷菜单
 */
const useShortcut = (props: DataProps, groupRef: Ref<HTMLElement | null>, ) => {
   const anchorHeight = 18
   const scrollRef = ref<HTMLElement | null>(null)
   const shortcut = computed(() => {
     return props.singerData.map(ret => {
         return ret.title
     })
   })
    
    type TouchProps = {y1: number, y2:number, AnchorIndex: number} 
    const touchs: Partial<TouchProps> = {}
    const shortcutClick = (e: MouseEvent & TouchEvent) => {
        const el = e.target as HTMLElement
        const AnchorIndex = Number(el.dataset.index)
        touchs.y1 = e.touches[0].pageY
        touchs.AnchorIndex = AnchorIndex
       
        scrollTo(AnchorIndex)
    }
    // 自定义守卫
    const isUndefined = (val: any): val is number => {
        return val !== 'undefined'
    }
    const shortcutMove = (e:TouchEvent) => {
        touchs.y2 = e.touches[0].pageY
        // 当前移动了几个位置 = （移动距离 - 开始距离）/ 当前锚点的高度
        const detal = touchs.y1 && (touchs.y2 - touchs.y1) / anchorHeight | 0
        let AnchorIndex
        if(isUndefined(detal) && isUndefined(touchs.AnchorIndex)){
            // 当前滑动到的位置的索引 = 开始的当前的索引 + 移动了n个位置
            let AnchorIndex = touchs.AnchorIndex + detal
           
            scrollTo(AnchorIndex)
        }
    }
    function scrollTo (index: number){
        // if(isNaN(index)) return
        // 0 到 shortcut.value.length - 1 的数
        index = Math.max(0, Math.min(shortcut.value.length - 1, index))
        const currentElement = groupRef.value && groupRef.value.children[index] as HTMLElement
        //  BScroll 实例对象
        const BScrollInstance = (scrollRef.value?.scroll as any) as BScroll
        currentElement && BScrollInstance.scrollToElement(currentElement, 0, 0, 0)
    }
    return {
        shortcut,
        shortcutClick,
        scrollRef,
        shortcutMove
    }
}

export default useShortcut