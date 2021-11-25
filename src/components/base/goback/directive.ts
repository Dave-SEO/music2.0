import {Directive, DirectiveBinding} from 'vue'
const goBackFn = () => {
    window.history.go(-1)
}
const goBack:Directive = {
    mounted(el: HTMLElement, binding: DirectiveBinding){
        el.addEventListener('click', goBackFn)
    },
    unmounted(el: HTMLElement){
        el.removeEventListener('click', goBackFn)
    }
}

export default goBack