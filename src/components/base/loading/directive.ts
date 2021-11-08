import {createApp, DirectiveBinding, Directive} from 'vue'
import loading from './index.vue'
import {addClass, removeClass} from '@/assets/js/dom'
const gRelative = 'g-relative'
const app = createApp(loading)
const instance = app.mount(document.createElement('div'))
const loadingDirective: Directive = {
    mounted(el: HTMLElement, binding: DirectiveBinding) {
       if(binding.value){
        append(el)
       }
       // 设置loading 文字
      (instance as any).setTitle(binding.arg || '正在加载。。。')
    },
    updated(el, binding: DirectiveBinding){
        if(binding.value !== binding.oldValue){
            binding.value? append(el) : remove(el)
        }
    }
}

function append(el: HTMLElement){
    el.appendChild(instance.$el)
    addClassWay(el)
}
function remove(el: HTMLElement){
    el.removeChild(instance.$el)
    removeClassWay(el)
}

function addClassWay(el: HTMLElement){
    const styles = getComputedStyle(el);
    if((['relative', 'absolute', 'fixed'] as string[]).indexOf(styles.position) === -1){
        addClass(el, gRelative)
    }
    return el
}

function removeClassWay(el: HTMLElement){
    removeClass(el, gRelative)
    return el
}
export default loadingDirective